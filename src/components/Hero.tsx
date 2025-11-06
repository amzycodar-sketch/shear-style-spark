import { Button } from "@/components/ui/button";
import { Calendar, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-barber.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl slide-up">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6">
            Elevate Your <span className="text-gradient">Style</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Experience the art of premium grooming where tradition meets modern luxury.
            Our master barbers deliver precision cuts and impeccable service.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 hover-glow hover-lift">
              <Calendar className="mr-2 w-5 h-5" />
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 hover-lift border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="text-center scale-in">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-display text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center scale-in" style={{ animationDelay: "0.1s" }}>
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-display text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center scale-in" style={{ animationDelay: "0.2s" }}>
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-display text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
