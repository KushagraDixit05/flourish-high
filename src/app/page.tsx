import Navbar    from "@/components/layout/Navbar";
import Hero      from "@/components/sections/Hero";
import Verticals from "@/components/sections/Verticals";
import Products  from "@/components/sections/Products";
import About     from "@/components/sections/About";
import Services  from "@/components/sections/Services";
import WhyUs     from "@/components/sections/WhyUs";
import FAQ       from "@/components/sections/FAQ";
import Contact   from "@/components/sections/Contact";
import Footer    from "@/components/layout/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0e1210", color: "white", overflowX: "hidden" }}>
      {/* Navbar lives at root level — never inside any section stacking context */}
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Services />
      <Verticals />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
