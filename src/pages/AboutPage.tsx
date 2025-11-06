import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, TrendingUp } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              About <span className="text-gradient">Elite Cutz</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where tradition meets modern luxury in the art of men's grooming
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="slide-up mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2009, Elite Cutz began with a simple vision: to create a space where men could experience the finest in traditional barbering combined with contemporary style and comfort.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our founder, Marcus Johnson, brought together a team of master barbers who share his passion for excellence and dedication to the craft. Over the years, we've grown from a single chair operation to a premier destination for discerning gentlemen.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, Elite Cutz stands as a testament to quality, consistency, and the timeless art of barbering. We continue to honor traditional techniques while embracing modern innovations in grooming.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="hover-lift scale-in">
                <CardContent className="p-8 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    We maintain the highest standards in every service we provide
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift scale-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">Community</h3>
                  <p className="text-muted-foreground">
                    Building lasting relationships with every client who walks through our door
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift scale-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-8 text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">Passion</h3>
                  <p className="text-muted-foreground">
                    Every cut, every shave, every service is delivered with genuine care
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift scale-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Continuously evolving our techniques and services to exceed expectations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
