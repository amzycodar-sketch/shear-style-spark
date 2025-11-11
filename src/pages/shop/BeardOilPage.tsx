import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ShoppingCart, Check } from "lucide-react";
import ProductReviews from "@/components/ProductReviews";
import { useCart } from "@/contexts/CartContext";

const BeardOilPage = () => {
  const { addToCart } = useCart();
  
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
              <span className="text-primary font-semibold mb-2 block">Beard Care</span>
              <h1 className="font-display text-5xl font-bold mb-4">
                Premium Beard <span className="text-gradient">Oil</span>
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground">(203 reviews)</span>
              </div>

              <p className="text-3xl font-bold mb-6">$18.99</p>

              <p className="text-lg text-muted-foreground mb-8">
                Nourish and condition your beard with our premium blend of natural oils. Softens facial hair, eliminates itchiness, and promotes healthy growth.
              </p>

              <Button 
                size="lg" 
                className="hover-glow mb-12"
                onClick={() => addToCart('beard-oil', 'Beard Oil', 18.99)}
              >
                <ShoppingCart className="mr-2 w-5 h-5" />
                Add to Cart
              </Button>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold">Features:</h3>
                <ul className="space-y-3">
                  {[
                    "100% natural ingredients",
                    "Jojoba and argan oil blend",
                    "Eliminates beard itch",
                    "Promotes healthy growth",
                    "Subtle, masculine scent",
                    "Non-greasy formula",
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

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <ProductReviews productSlug="beard-oil" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BeardOilPage;
