import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, DollarSign } from "lucide-react";

const BuzzCutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 slide-up">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Buzz <span className="text-gradient">Cut</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Clean, precise buzz cuts with professional finish
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-8 scale-in">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold">$20</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-8 h-8 text-primary" />
                  <span className="text-2xl">20 min</span>
                </div>
              </div>
              <Button size="lg" className="hover-glow">
                Book Buzz Cut
              </Button>
            </div>

            <ul className="space-y-3">
              {[
                "Multiple guard options",
                "Precise, even cutting",
                "Neck cleanup included",
                "Quick service",
                "Professional finish",
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

export default BuzzCutPage;
