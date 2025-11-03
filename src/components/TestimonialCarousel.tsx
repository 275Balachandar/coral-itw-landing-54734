import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "My son can't wait for Thursday classes every week!",
    author: "David K.",
    location: "Nevada",
    rating: 4.5,
  },
  {
    id: 2,
    quote: "Great teacher, my daughter loves learning about reptiles!",
    author: "Sarah M.",
    location: "California",
    rating: 5,
  },
  {
    id: 3,
    quote: "The live animals make it so engaging. Worth every penny!",
    author: "Michael R.",
    location: "Texas",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-4 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
            >
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(testimonial.rating)
                          ? "text-primary fill-primary"
                          : i < testimonial.rating
                          ? "text-primary fill-primary opacity-50"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-base mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">— {testimonial.author}</p>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
