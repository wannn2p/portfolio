import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#0a0a0a]">
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="work">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
