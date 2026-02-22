import { Mountain, Flower2, Landmark } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      title: 'Sandstone Blocks',
      description: 'Premium quality raw sandstone blocks extracted from our exclusive quarries, perfect for large-scale architectural projects.',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Mountain,
      iconBg: 'bg-emerald-600',
    },
    {
      title: 'Stone Planters',
      description: 'Hand-carved natural stone planters that blend nature with art, suitable for luxury gardens and hotel lobbies.',
      image: 'https://images.pexels.com/photos/6231858/pexels-photo-6231858.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Flower2,
      iconBg: 'bg-amber-700',
    },
    {
      title: 'Stone Artifacts',
      description: 'Exquisite stone sculptures, fountains, and architectural artifacts crafted by master artisans with decades of experience.',
      image: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Landmark,
      iconBg: 'bg-gray-800',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-amber-500 tracking-widest">
            WHAT WE DO
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mt-4 mb-4">
            Our Best Stone Categories
          </h2>
          <p className="text-gray-300 text-lg italic font-serif max-w-3xl mx-auto">
            Highlighting Stone Shadow's 25+ years of experience in curating the earth's finest textures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 ${category.iconBg} w-14 h-14 rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <button className="text-sm font-medium text-gray-800 hover:text-amber-700 transition-colors duration-300 border-b-2 border-gray-800 hover:border-amber-700 pb-1">
                    VIEW PRODUCTS
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-gray-800 transition-all duration-300">
            DOWNLOAD CATALOG
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
