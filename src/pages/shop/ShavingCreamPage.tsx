import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ShoppingCart, Check } from "lucide-react";

const ShavingCreamPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="scale-in">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted"></div>
              </Card>
            </div>

            <div className="slide-up">
              <span className="text-primary font-semibold mb-2 block">Shaving</span>
              <h1 className="font-display text-5xl font-bold mb-4">
                Luxury Shaving <span className="text-gradient">Cream</span>
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground">(234 reviews)</span>
              </div>

              <p className="text-3xl font-bold mb-6">$14.99</p>

              <p className="text-lg text-muted-foreground mb-8">
                Rich, creamy lather for the smoothest shave possible. Protects skin while providing superior razor glide.
              </p>

              <Button size="lg" className="hover-glow mb-12">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Add to Cart
              </Button>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold">Features:</h3>
                <ul className="space-y-3">
                  {[
                    "Rich, protective lather",
                    "Moisturizing formula",
                    "Reduces razor burn",
                    "Traditional barbershop scent",
                    "Suitable for all skin types",
                    "Professional quality",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShavingCreamPage;
