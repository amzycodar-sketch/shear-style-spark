import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Check } from "lucide-react";

const PremiumPomadePage = () => {
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
                Premium <span className="text-gradient">Pomade</span>
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground">(156 reviews)</span>
              </div>

              <p className="text-3xl font-bold mb-6">$24.99</p>

              <p className="text-lg text-muted-foreground mb-8">
                Our signature pomade provides a strong hold with a natural finish. Perfect for classic and modern styles, this water-based formula washes out easily while keeping your hair styled all day.
              </p>

              <Button size="lg" className="hover-glow mb-12">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Add to Cart
              </Button>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold">Features:</h3>
                <ul className="space-y-3">
                  {[
                    "Strong hold, natural finish",
                    "Water-based formula",
                    "Easy to wash out",
                    "Pleasant, masculine scent",
                    "Suitable for all hair types",
                    "Professional barber grade",
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
          <h2 className="font-display text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {[
              { name: "Alex M.", rating: 5, text: "Best pomade I've ever used. Holds all day without feeling stiff." },
              { name: "James P.", rating: 5, text: "Great product! Smells amazing and gives my hair the perfect texture." },
              { name: "Ryan T.", rating: 4, text: "Excellent hold and easy to style. Highly recommend!" },
            ].map((review, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold">{review.name}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">"{review.text}"</p>
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

export default PremiumPomadePage;
