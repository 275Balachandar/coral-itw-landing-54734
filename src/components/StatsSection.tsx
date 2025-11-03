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
    <section className="py-12 md:py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center justify-center text-center py-4 md:py-6 px-4 md:px-8 ${
                index < stats.length - 1 ? 'border-r border-border/50' : ''
              }`}
            >
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2 whitespace-nowrap">
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
