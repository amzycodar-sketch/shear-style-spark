import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Calendar } from "lucide-react";

const MarcusJohnsonPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="slide-up">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Master Barber</span>
              </div>
              <h1 className="font-display text-5xl font-bold mb-4">
                Marcus <span className="text-gradient">Johnson</span>
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-bold">5.0</span>
                  <span className="text-muted-foreground">(342 reviews)</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                With over 15 years of experience, Marcus is our lead barber and the founder of Elite Cutz. His expertise in classic cuts and beard styling has made him one of the most sought-after barbers in the city.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Specialties</h3>
                  <p className="text-muted-foreground">Classic Cuts, Beard Styling, Hot Towel Shaves</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Experience</h3>
                  <p className="text-muted-foreground">15+ Years</p>
                </div>
              </div>

              <Button size="lg" className="hover-glow">
                <Calendar className="mr-2 w-5 h-5" />
                Book with Marcus
              </Button>
            </div>

            <div className="scale-in">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-8">Client Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "John D.", rating: 5, text: "Marcus is a true professional. Best haircut I've ever had!" },
              { name: "Michael R.", rating: 5, text: "Exceptional service and attention to detail. Highly recommend!" },
              { name: "David S.", rating: 5, text: "Marcus knows exactly what works for my face shape. Always leaves looking sharp!" },
            ].map((review, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-2">"{review.text}"</p>
                  <p className="font-semibold">- {review.name}</p>
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

export default MarcusJohnsonPage;
