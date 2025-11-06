import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Wind, Palette } from "lucide-react";
import haircutImg from "@/assets/service-haircut.jpg";
import beardImg from "@/assets/service-beard.jpg";
import shaveImg from "@/assets/service-shave.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Scissors,
      title: "Premium Haircut",
      description: "Precision cuts tailored to your style, delivered by master barbers with years of experience.",
      price: "$45",
      image: haircutImg,
      link: "/services/haircut",
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Beard Grooming",
      description: "Professional beard trimming, shaping, and conditioning for the perfect look.",
      price: "$30",
      image: beardImg,
      link: "/services/beard-grooming",
    },
    {
      id: 3,
      icon: Wind,
      title: "Hot Towel Shave",
      description: "Traditional straight razor shave with hot towel treatment for ultimate relaxation.",
      price: "$40",
      image: shaveImg,
      link: "/services/hot-towel-shave",
    },
    {
      id: 4,
      icon: Palette,
      title: "Hair Coloring",
      description: "Expert hair coloring services to refresh your look with premium products.",
      price: "$65",
      image: haircutImg,
      link: "/services/hair-coloring",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From classic cuts to modern styles, we offer a full range of premium grooming services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group overflow-hidden hover-lift bg-background border-border hover:border-primary transition-all duration-300 scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Link to={service.link}>
                      <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="hover-glow">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
