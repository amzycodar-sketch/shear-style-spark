import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, DollarSign } from "lucide-react";
import beardImg from "@/assets/service-beard.jpg";

const BeardGroomingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Beard <span className="text-gradient">Grooming</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional beard trimming, shaping, and conditioning services to keep your facial hair looking its absolute best.
              </p>

              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <span className="text-2xl font-bold">$30</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-lg">30 minutes</span>
                </div>
              </div>

              <Button size="lg" className="hover-glow mb-12">
                Book Appointment
              </Button>

              <ul className="space-y-3">
                {[
                  "Beard shape consultation",
                  "Precision trimming and edging",
                  "Hot towel treatment",
                  "Beard oil application",
                  "Styling and grooming tips",
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
                  src={beardImg}
                  alt="Beard Grooming Service"
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

export default BeardGroomingPage;
