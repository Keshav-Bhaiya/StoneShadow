import { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'MARBLE', 'GRANITE', 'SANDSTONE', 'QUARTZITE', 'EXOTICS'];

  const projects = [
    {
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'MARBLE',
      span: 'row-span-2',
    },
    {
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'GRANITE',
      span: 'row-span-1',
    },
    {
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SANDSTONE',
      span: 'row-span-1',
    },
    {
      image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'MARBLE',
      span: 'row-span-2',
    },
    {
      image: 'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'QUARTZITE',
      span: 'row-span-1',
    },
    {
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SANDSTONE',
      span: 'row-span-1',
    },
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">
            Stone Shadow Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Explore Our Premium Natural Stone Collection
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`${project.span} relative overflow-hidden group cursor-pointer rounded-lg`}
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium tracking-wider">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
            LOAD MORE PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
