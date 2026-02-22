import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const helpfulLinks = [
    { label: 'Home',         to: '/'          },
    { label: 'About Us',    to: '/#about'    },
    { label: 'Our Products', to: '/#products' },
    { label: 'Gallery',     to: '/gallery'   },
    { label: 'Contact',     to: '/#contact'  },
  ]

  const hotProducts = [
    'Italian Marble',
    'Black Granite',
    'Sandstone Blocks',
    'Onyx Slabs',
    'Garden Pebbles',
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
                <span className="text-gray-900 font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-serif font-bold text-white tracking-widest">STONE</span>
                <span className="text-xs text-gray-400 tracking-widest">SHADOW</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Premium natural stone manufacturer and exporter, delivering excellence to
              architectural projects worldwide since 1998.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-white/20 rounded-full flex items-center
                             justify-center text-gray-400 hover:text-white hover:border-white
                             transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-[2px] uppercase text-white mb-5">
              Helpful Links
            </h3>
            <ul className="space-y-3">
              {helpfulLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm hover:text-white transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hot Products */}
          <div>
            <h3 className="text-sm font-semibold tracking-[2px] uppercase text-white mb-5">
              Hot Products
            </h3>
            <ul className="space-y-3">
              {hotProducts.map((p) => (
                <li key={p}>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-300">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-sm font-semibold tracking-[2px] uppercase text-white mb-5">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a href="mailto:info@stoneshadow.com"
                 className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                info@stoneshadow.com
              </a>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm">
                  <a href="tel:+15551234567" className="block hover:text-white transition-colors duration-300">
                    +1 (555) 123-4567
                  </a>
                  <a href="tel:+15559876543" className="block hover:text-white transition-colors duration-300">
                    +1 (555) 987-6543
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p>123 Stone Avenue, Industrial Area,</p>
                  <p>Marble City, 305001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {currentYear} Stone Shadow. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer