import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Award, Calendar } from "lucide-react";

const CarlosRodriguezPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="slide-up">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Barber Artist</span>
              </div>
              <h1 className="font-display text-5xl font-bold mb-4">
                Carlos <span className="text-gradient">Rodriguez</span>
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-bold">4.9</span>
                  <span className="text-muted-foreground">(221 reviews)</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                Carlos brings artistic flair to every cut. Specializing in creative designs and patterns, he transforms haircuts into works of art with 9 years of experience.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Specialties</h3>
                  <p className="text-muted-foreground">Artistic Designs, Hair Patterns, Creative Styles</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Experience</h3>
                  <p className="text-muted-foreground">9 Years</p>
                </div>
              </div>

              <Button size="lg" className="hover-glow">
                <Calendar className="mr-2 w-5 h-5" />
                Book with Carlos
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

      <Footer />
    </div>
  );
};

export default CarlosRodriguezPage;
