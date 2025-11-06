import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Award, Calendar } from "lucide-react";

const JamesWilsonPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="slide-up">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Expert Barber</span>
              </div>
              <h1 className="font-display text-5xl font-bold mb-4">
                James <span className="text-gradient">Wilson</span>
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-bold">4.9</span>
                  <span className="text-muted-foreground">(256 reviews)</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                James is a master of traditional shaves and grooming services. With 10 years of experience, he brings old-world techniques to modern grooming.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Specialties</h3>
                  <p className="text-muted-foreground">Traditional Shaves, Grooming, Classic Styles</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Experience</h3>
                  <p className="text-muted-foreground">10 Years</p>
                </div>
              </div>

              <Button size="lg" className="hover-glow">
                <Calendar className="mr-2 w-5 h-5" />
                Book with James
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

export default JamesWilsonPage;
