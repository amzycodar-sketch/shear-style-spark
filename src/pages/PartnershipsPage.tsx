import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Building2, ShoppingBag, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PartnershipsPage = () => {
  const partnerTypes = [
    {
      icon: Building2,
      title: "Corporate Partners",
      description: "Exclusive grooming programs for businesses and organizations",
      benefits: ["Employee wellness programs", "Corporate discount rates", "Flexible billing options", "Dedicated account support"],
    },
    {
      icon: ShoppingBag,
      title: "Product Partners",
      description: "Premium grooming product brands and suppliers",
      benefits: ["Featured product placement", "Co-marketing opportunities", "Event collaborations", "Brand exposure"],
    },
    {
      icon: Users,
      title: "Community Partners",
      description: "Local businesses and community organizations",
      benefits: ["Cross-promotion opportunities", "Joint events", "Referral programs", "Community engagement"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Partnership <span className="text-gradient">Opportunities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborate with Elite Cutz to create value for your business and our community
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="hover-lift h-full bg-background border-border hover:border-primary transition-all duration-300">
                    <CardContent className="p-8">
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="font-display text-2xl font-bold mb-3">{type.title}</h3>
                      <p className="text-muted-foreground mb-6">{type.description}</p>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="border-primary/20">
              <CardContent className="p-12">
                <h2 className="font-display text-4xl font-bold mb-4">
                  Interested in Partnering?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's explore how we can work together to create mutual success
                </p>
                <Link to="/contact">
                  <Button size="lg" className="hover-glow">
                    Get in Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnershipsPage;
