import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Family from './components/Family';
import Gallery from './components/Gallery';
import Lifestyle from './components/Lifestyle';
import PartnerValues from './components/PartnerValues';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Career />
        <Skills />
        <Education />
        <Certificates />
        <Family />
        <Gallery />
        <Lifestyle />
        <PartnerValues />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
