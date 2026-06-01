import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SchedulingWidget from './components/SchedulingWidget';
import SobreMi from './components/SobreMi';
import Especialidades from './components/Especialidades';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import './index.css';

function App() {
  useScrollReveal();

  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SchedulingWidget />
        <SobreMi />
        <Especialidades />
        <Testimonios />
        <FAQ />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
