const ITEMS = [
  "Handicrafts & Home Décor",
  "Textiles & Hospitality Linen",
  "Carpets & Rugs",
  "Paper & Stationery",
  "Artisan Products",
  "Custom Sourcing",
  "Global Trade",
  "India's Best Crafts",
];

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden w-full py-3 border-y border-white/10" style={{ background: "rgba(45,106,79,0.15)" }}>
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display italic text-2xl tracking-tight"
            style={{ color: "#c8a96e" }}
          >
            ◆ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
