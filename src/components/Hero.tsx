import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -left-8 lg:-left-20 top-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-sage-200 rounded-full opacity-40 -z-10"></div>

              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-xs font-medium text-emerald-700 tracking-widest border border-emerald-700 px-4 py-1">
                    SINCE 1999
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-800 leading-tight">
                  PREMIUM<br />
                  <span className="text-gray-700">STONE SHADOW</span>
                </h1>

                <p className="text-lg sm:text-xl italic text-amber-700 font-serif">
                  Crafted for Interiors & Exteriors
                </p>

                <p className="text-gray-600 text-base leading-relaxed max-w-md">
                  Discover the finest collection of marble, granite, and natural stones sourced globally for your architectural masterpieces.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-amber-700 text-white px-8 py-3 font-medium hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                    EXPLORE STONES
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
                    VIEW PROJECTS
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern Kitchen Interior"
                className="w-full h-96 lg:h-[600px] object-cover"
              />

              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button className="bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300">
                  <ChevronLeft size={24} className="text-gray-800" />
                </button>
              </div>

              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button className="bg-amber-700 bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300">
                  <ChevronRight size={24} className="text-white" />
                </button>
              </div>

              <div className="absolute bottom-6 right-6 bg-white p-4 shadow-xl max-w-xs">
                <h3 className="font-serif font-bold text-gray-800 text-lg mb-1">Luxury Villa Exterior</h3>
                <p className="text-sm text-gray-600">Italian Carrara Marble Cladding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
