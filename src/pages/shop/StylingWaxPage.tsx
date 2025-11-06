import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ShoppingCart, Check } from "lucide-react";

const StylingWaxPage = () => {
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
              <span className="text-primary font-semibold mb-2 block">Hair Styling</span>
              <h1 className="font-display text-5xl font-bold mb-4">
                Professional Styling <span className="text-gradient">Wax</span>
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-primary text-primary" : "text-muted"}`} />
                  ))}
                </div>
                <span className="text-muted-foreground">(128 reviews)</span>
              </div>

              <p className="text-3xl font-bold mb-6">$19.99</p>

              <p className="text-lg text-muted-foreground mb-8">
                Flexible styling wax for creating versatile looks. Medium hold with natural shine for effortless styling.
              </p>

              <Button size="lg" className="hover-glow mb-12">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Add to Cart
              </Button>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold">Features:</h3>
                <ul className="space-y-3">
                  {[
                    "Medium hold, natural shine",
                    "Re-workable formula",
                    "Flexible styling",
                    "Non-sticky texture",
                    "All hair types",
                    "Professional grade",
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

export default StylingWaxPage;
