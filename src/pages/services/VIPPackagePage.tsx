import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, DollarSign, Crown } from "lucide-react";

const VIPPackagePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 slide-up">
            <Crown className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              VIP <span className="text-gradient">Package</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The ultimate grooming experience combining all our premium services for the discerning gentleman
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-8 mb-12 scale-in">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold">$120</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-8 h-8 text-primary" />
                  <span className="text-2xl">2 hours</span>
                </div>
              </div>
              <Button size="lg" className="hover-glow">
                Book VIP Experience
              </Button>
            </div>

            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold mb-4">Package Includes:</h3>
              <ul className="space-y-4">
                {[
                  "Premium Haircut with Style Consultation",
                  "Complete Beard Grooming & Shaping",
                  "Traditional Hot Towel Shave",
                  "Relaxing Scalp Massage",
                  "Hair & Beard Treatment",
                  "Complimentary Premium Products",
                  "Refreshments & Beverages",
                  "Priority Booking",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VIPPackagePage;
