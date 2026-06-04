"use client";

import { useRef, useEffect } from "react";

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const FADE_MS       = 500;   // ms for each fade transition
const FADE_OUT_LEAD = 0.55;  // seconds before end to start fade-out

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef     = useRef<HTMLVideoElement>(null);
  const rafRef       = useRef<number>(0);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // ── Fade helper (rAF-driven, resumes from current opacity) ──────────
    function fadeTo(target: number, durationMs: number) {
      cancelAnimationFrame(rafRef.current);
      const start    = performance.now();
      const startVal = parseFloat(video!.style.opacity ?? "0");

      function step(now: number) {
        const t = Math.min((now - start) / durationMs, 1);
        video!.style.opacity = String(startVal + (target - startVal) * t);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      }
      rafRef.current = requestAnimationFrame(step);
    }

    // ── Event handlers ───────────────────────────────────────────────────
    function onLoaded() {
      video!.style.opacity = "0";
      video!.play().catch(() => {});
      fadeTo(1, FADE_MS);
    }

    function onTimeUpdate() {
      const remaining = video!.duration - video!.currentTime;
      if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    }

    function onEnded() {
      video!.style.opacity = "0";
      setTimeout(() => {
        if (!video) return;
        video.currentTime    = 0;
        fadingOutRef.current = false;
        video.play().catch(() => {});
        fadeTo(1, FADE_MS);
      }, 100);
    }

    video.style.opacity = "0";
    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended",      onEnded);

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended",      onEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ ...style, opacity: 0 }}
    />
  );
}
