import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, DollarSign } from "lucide-react";

const KidsHaircutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 slide-up">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Kids <span className="text-gradient">Haircut</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Fun and comfortable haircuts for children in a welcoming environment
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-8 scale-in">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold">$25</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-8 h-8 text-primary" />
                  <span className="text-2xl">30 min</span>
                </div>
              </div>
              <Button size="lg" className="hover-glow">
                Book Kids Haircut
              </Button>
            </div>

            <ul className="space-y-3">
              {[
                "Patient, experienced barbers",
                "Fun, child-friendly atmosphere",
                "Quick and efficient service",
                "Lollipop included!",
                "First haircut certificate available",
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KidsHaircutPage;
