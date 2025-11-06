import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, Wind, Palette, Star, Crown, Cog } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: Scissors,
      title: "Premium Haircut",
      description: "Expert precision cutting tailored to your face shape and personal style. Includes consultation, wash, cut, and styling.",
      price: "$45",
      duration: "45 min",
      link: "/services/haircut",
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Beard Grooming",
      description: "Complete beard care including trim, shape, conditioning, and hot towel treatment.",
      price: "$30",
      duration: "30 min",
      link: "/services/beard-grooming",
    },
    {
      id: 3,
      icon: Wind,
      title: "Hot Towel Shave",
      description: "Traditional straight razor shave with premium products and relaxing hot towel treatment.",
      price: "$40",
      duration: "40 min",
      link: "/services/hot-towel-shave",
    },
    {
      id: 4,
      icon: Palette,
      title: "Hair Coloring",
      description: "Professional hair coloring services using premium products for natural-looking results.",
      price: "$65",
      duration: "90 min",
      link: "/services/hair-coloring",
    },
    {
      id: 5,
      icon: Crown,
      title: "VIP Package",
      description: "The ultimate grooming experience: haircut, beard grooming, hot towel shave, and scalp massage.",
      price: "$120",
      duration: "2 hours",
      link: "/services/vip-package",
    },
    {
      id: 6,
      icon: Star,
      title: "Hair Treatment",
      description: "Deep conditioning and revitalizing treatments to restore health and shine to your hair.",
      price: "$50",
      duration: "45 min",
      link: "/services/hair-treatment",
    },
    {
      id: 7,
      icon: Cog,
      title: "Kids Haircut",
      description: "Specialized haircuts for children in a fun, comfortable environment with experienced barbers.",
      price: "$25",
      duration: "30 min",
      link: "/services/kids-haircut",
    },
    {
      id: 8,
      icon: Scissors,
      title: "Buzz Cut",
      description: "Clean, precise buzz cut with multiple guard options and neck cleanup.",
      price: "$20",
      duration: "20 min",
      link: "/services/buzz-cut",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium grooming services delivered by expert barbers with precision and care
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="group hover-lift bg-background border-border hover:border-primary transition-all duration-300 scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="font-display text-2xl font-bold mb-2">{service.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <span className="font-semibold text-primary text-xl">{service.price}</span>
                        <span>•</span>
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="flex gap-3">
                      <Link to={service.link} className="flex-1">
                        <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                          Learn More
                        </Button>
                      </Link>
                      <Button className="flex-1 hover-glow">Book Now</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
