import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "Do I need to book an appointment?",
      answer: "While walk-ins are welcome, we highly recommend booking an appointment to guarantee your preferred time and barber.",
    },
    {
      question: "How long does a typical haircut take?",
      answer: "Most haircuts take 30-45 minutes. However, more complex styles or additional services may require more time.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, and digital payment methods including Apple Pay and Google Pay.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.",
    },
    {
      question: "Do you offer services for children?",
      answer: "Yes! We offer specialized kids' haircuts in a fun, comfortable environment with experienced barbers.",
    },
    {
      question: "What products do you use?",
      answer: "We use only premium, professional-grade products from trusted brands. All products are also available for purchase.",
    },
    {
      question: "How often should I get a haircut?",
      answer: "For most styles, we recommend every 3-4 weeks to maintain your look. Your barber can provide personalized recommendations.",
    },
    {
      question: "Do you provide beard grooming services?",
      answer: "Absolutely! We offer comprehensive beard grooming including trimming, shaping, conditioning, and hot towel treatments.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services and policies
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover-lift"
              >
                <AccordionTrigger className="text-left font-display text-xl font-bold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
