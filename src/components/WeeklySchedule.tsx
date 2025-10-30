import { useState } from "react";
import { ChevronDown } from "lucide-react";

const weeks = [
  {
    week: "Week 1",
    title: "The Philippines",
    description: "Flying lizards & rare island species",
  },
  {
    week: "Week 2",
    title: "Tasmania",
    description: "Native amphibians from a unique ecosystem",
  },
  {
    week: "Week 3",
    title: "New Zealand",
    description: "Ancient reptiles like the tuatara & their island adaptations",
  },
];

const WeeklySchedule = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-8 md:py-12 px-6 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-6 fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold">
            Next 3 Weeks' Schedule At A Glance: Island Herpetology
          </h2>
        </div>

        <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden fade-in">
          {/* Preview - Always visible */}
          <div className="p-4 md:p-6">
            <div className="flex items-start gap-3 pb-3 border-b border-border">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg text-foreground">
                  {weeks[0].week} - {weeks[0].title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {weeks[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Expandable content */}
          {isExpanded && (
            <div className="px-4 md:px-6 pb-4 space-y-3">
              {weeks.slice(1).map((week, index) => (
                <div key={index} className="flex items-start gap-3 pt-3 border-t border-border">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{index + 2}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-foreground">
                      {week.week} - {week.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {week.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Expand/Collapse button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-3 flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium bg-card hover:bg-accent border-t border-border"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            <span>{isExpanded ? "Show less" : "Show full schedule"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeeklySchedule;
