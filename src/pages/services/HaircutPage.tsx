import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, DollarSign } from "lucide-react";
import haircutImg from "@/assets/service-haircut.jpg";

const HaircutPage = () => {
  const features = [
    "Personalized style consultation",
    "Premium hair wash with massage",
    "Precision cutting technique",
    "Professional styling products",
    "Hot towel treatment",
    "Complimentary beverage",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Premium <span className="text-gradient">Haircut</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the art of precision cutting with our master barbers. Each haircut is customized to complement your unique style and facial features.
              </p>

              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <span className="text-2xl font-bold">$45</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-lg">45 minutes</span>
                </div>
              </div>

              <Button size="lg" className="hover-glow mb-12">
                Book Appointment
              </Button>

              <h3 className="font-display text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="scale-in">
              <Card className="overflow-hidden border-primary/20">
                <img
                  src={haircutImg}
                  alt="Premium Haircut Service"
                  className="w-full h-[600px] object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            The <span className="text-gradient">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your desired style and preferences" },
              { step: "02", title: "Preparation", desc: "Premium wash and conditioning treatment" },
              { step: "03", title: "Cutting", desc: "Precision cutting by master barbers" },
              { step: "04", title: "Styling", desc: "Professional finishing and product application" },
            ].map((item, index) => (
              <Card key={index} className="text-center hover-lift scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-5xl font-display font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HaircutPage;
