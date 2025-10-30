import { Eye, Globe, Camera } from "lucide-react";

const outcomes = [
  {
    icon: Eye,
    description: "Explore the key traits of reptiles and amphibians with help of live animals like toads, snakes, and salamanders",
  },
  {
    icon: Globe,
    description: "Learn from a teacher who's explored wildlife across nearly every continent: bringing real stories, field research, & stunning nature photography into each class",
  },
  {
    icon: Camera,
    description: "Spot reptiles and amphibians in your own environment through fun at-home challenges and creative activities",
  },
];

const LearningOutcomes = () => {
  return (
    <section className="py-8 md:py-12 px-6 bg-gradient-to-b from-background to-coral-secondary/10">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-6 fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold">
            What Kids Learn
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 fade-in max-w-3xl mx-auto">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div 
                key={index}
                className="bg-card p-4 rounded-xl shadow-md hover:shadow-coral transition-all duration-300 border border-border"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mt-1">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                    {outcome.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
