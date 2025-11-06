import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, DollarSign } from "lucide-react";
import haircutImg from "@/assets/service-haircut.jpg";

const HairColoringPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Hair <span className="text-gradient">Coloring</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert hair coloring services using premium products to achieve natural-looking, vibrant results that complement your style.
              </p>

              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <span className="text-2xl font-bold">$65</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-lg">90 minutes</span>
                </div>
              </div>

              <Button size="lg" className="hover-glow mb-12">
                Book Appointment
              </Button>

              <ul className="space-y-3">
                {[
                  "Color consultation",
                  "Premium coloring products",
                  "Professional application",
                  "Hair treatment included",
                  "Styling and maintenance tips",
                ].map((feature, index) => (
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
                  alt="Hair Coloring Service"
                  className="w-full h-[600px] object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HairColoringPage;
