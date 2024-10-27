// src/App.jsx
import Certificates from "./componentes/Certificates";
import Contacto from "./componentes/Contacto";
import Experience from "./componentes/Experience";
import Footer from "./componentes/Footer";
import Hero from "./componentes/Hero";
import Navbar from "./componentes/Navbar";
import Portafolio from "./componentes/Portafolio";
import Skills from "./componentes/Skills";
import Particle from "./componentes/Particle";

export default function App() {
  return (
    <>
      <Navbar />
      <Particle />
      <Hero />
      <Experience />
      <Skills />
      <Portafolio />
      <Certificates />
      <Contacto />
      <Footer />
    </>
  );
}
