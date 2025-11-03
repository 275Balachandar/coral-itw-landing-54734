import { Video, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Video,
    title: "Join Live Classes",
    description: "Weekly interactive sessions with real reptiles and amphibians, led by expert educators.",
  },
  {
    icon: Calendar,
    title: "Engage & Explore",
    description: "Hands-on activities, wildlife challenges, and exciting weekly themes to keep kids engaged.",
  },
  {
    icon: Award,
    title: "Track Progress",
    description: "See your child's growth and learning as they develop their understanding of herpetology.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to start your child's wildlife learning adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative fade-in-up border-primary/20 hover:shadow-coral-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4 border border-primary/20">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
