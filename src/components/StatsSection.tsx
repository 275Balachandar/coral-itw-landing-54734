const stats = [
  {
    id: 1,
    value: "5,000+",
    label: "Students",
  },
  {
    id: 2,
    value: "Ranked #1",
    label: "By Parents",
  },
  {
    id: 3,
    value: "98%",
    label: "Satisfaction",
  },
];

const StatsSection = () => {
  return (
    <section className="py-8 md:py-10 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center justify-center text-center px-4 md:px-6 ${
                index < stats.length - 1 ? 'border-r border-border' : ''
              }`}
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 whitespace-nowrap">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
