import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
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
