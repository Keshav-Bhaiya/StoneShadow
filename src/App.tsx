import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Gallery />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;