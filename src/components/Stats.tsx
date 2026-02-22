const Stats = () => {
  const stats = [
    {
      number: '25+',
      label: 'YEARS EXPERIENCE',
    },
    {
      number: '40+',
      label: 'COUNTRIES EXPORTED',
    },
    {
      number: '500+',
      label: 'PROJECTS COMPLETED',
    },
    {
      number: '100%',
      label: 'QUALITY GUARANTEE',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-medium text-emerald-100 tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
