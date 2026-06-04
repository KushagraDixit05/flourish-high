import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight:   ["300", "400", "600"],
  style:    ["normal", "italic"],
  subsets:  ["latin"],
  variable: "--font-cormorant",
  display:  "swap",
});

const dmSans = DM_Sans({
  subsets:  ["latin"],
  variable: "--font-dm-sans",
  display:  "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flourishhigh.com"),
  title: "Flourish High International — India-based Trading Company",
  description:
    "India-based international trader. Export and import of quality agricultural commodities, spices, pulses, and FMCG goods across Asia, the Middle East, and beyond. Get a free trade quote.",
  openGraph: {
    title: "Flourish High International",
    description:
      "Quality agricultural commodities, spices, pulses and FMCG goods — sourced from India and traded globally.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="bg-fh-base antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
