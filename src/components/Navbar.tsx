import { useState } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'OUR PRODUCTS', href: '#products' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'PROJECTS', href: '#projects' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-gray-800">STONE</span>
                <span className="text-xs text-gray-600 tracking-widest">SHADOW</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="mailto:info@stoneshadow.com" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+15551234567" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Phone size={20} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-amber-700 text-white px-6 py-2 text-sm font-medium hover:bg-amber-800 transition-colors duration-300"
            >
              CONTACT US
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <a href="mailto:info@stoneshadow.com" className="text-gray-700">
              <Mail size={20} />
            </a>
            <a href="tel:+15551234567" className="text-gray-700">
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-amber-700 text-white px-6 py-2 text-sm font-medium hover:bg-amber-800 transition-colors"
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
