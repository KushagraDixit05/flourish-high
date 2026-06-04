const ITEMS = [
  "Basmati Rice",
  "Spices & Herbs",
  "Pulses & Lentils",
  "Edible Oils",
  "Agricultural Commodities",
  "FMCG Goods",
  "Custom Sourcing",
  "Certified Exports",
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
