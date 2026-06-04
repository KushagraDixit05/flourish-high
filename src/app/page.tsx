import Hero     from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import WhyUs   from "@/components/sections/WhyUs";
import Contact  from "@/components/sections/Contact";
import Footer   from "@/components/layout/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0e1210", color: "white", overflowX: "hidden" }}>
      {/* Navbar is fixed-position, rendered inside Hero to keep semantic proximity */}
      <Hero />
      <Products />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
