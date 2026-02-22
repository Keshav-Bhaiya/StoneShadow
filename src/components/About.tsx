import { Gem, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury Interior"
                className="w-full h-96 lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-8 left-8 bg-white bg-opacity-95 p-6 max-w-xs">
                <div className="text-5xl font-bold text-amber-700 mb-1">25+</div>
                <div className="text-sm text-gray-700 font-medium tracking-wider">
                  YEARS OF EXCELLENCE IN STONE EXPORT
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-medium text-amber-700 tracking-widest">
                IN THE BEGINNING
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800">
              Stone Shadow Journey
            </h2>

            <p className="text-xl italic text-emerald-700 font-serif">
              "Finest Quality Natural Stone Exporters"
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Founded on the principles of integrity and quality, Stone Shadow has evolved into a global leader in the natural stone industry. We source raw blocks from the finest quarries worldwide and process them with state-of-the-art technology to deliver masterpieces that stand the test of time.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Gem className="text-emerald-700" size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Precision Processing</h3>
                <p className="text-sm text-gray-600">
                  Processing natural stone with Italian machinery for over 25 years.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-amber-700" size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Global Export</h3>
                <p className="text-sm text-gray-600">
                  Delivering premium quality stone to over 40 countries worldwide.
                </p>
              </div>
            </div>

            <button className="text-gray-800 font-medium hover:text-amber-700 transition-colors duration-300 border-b-2 border-gray-800 hover:border-amber-700 pb-1">
              Read Our Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
