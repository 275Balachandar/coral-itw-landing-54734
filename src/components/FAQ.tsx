import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What age group is this class for?",
    answer: "This class is designed for kids ages 8-13 who are curious about reptiles, amphibians, and wildlife. The content is tailored to be engaging and educational for this age range.",
  },
  {
    question: "Do I need any special equipment?",
    answer: "No special equipment is needed! Just a computer or tablet with a stable internet connection, a webcam, and a microphone. We'll provide all the learning materials and activities during the class.",
  },
  {
    question: "What if my child misses a class?",
    answer: "Don't worry! All classes are recorded and available for replay. Your child can catch up at their own pace and won't miss any of the exciting herpetology content.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a FREE trial class so your child can experience our live wildlife sessions before committing. Sign up today to join our next Thursday class.",
  },
  {
    question: "How many kids are in each class?",
    answer: "We keep our class sizes small (typically 10-15 students) to ensure each child gets personalized attention and has the opportunity to ask questions and interact with the animals.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our reptile and amphibian classes
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full fade-in-up">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
