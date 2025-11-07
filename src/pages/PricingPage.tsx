import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const packages = [
    {
      name: "Basic Package",
      icon: Star,
      price: 75,
      period: "per visit",
      description: "Perfect for regular maintenance",
      features: [
        "Premium Haircut",
        "Basic Beard Trim",
        "Complimentary Beverage",
        "15% Product Discount",
      ],
      color: "text-blue-500",
      popular: false,
    },
    {
      name: "Premium Package",
      icon: Crown,
      price: 120,
      period: "per visit",
      description: "The ultimate grooming experience",
      features: [
        "Premium Haircut",
        "Complete Beard Grooming",
        "Hot Towel Shave",
        "Scalp Massage",
        "Hair Treatment",
        "Premium Products Included",
        "20% Product Discount",
        "Priority Booking",
      ],
      color: "text-primary",
      popular: true,
    },
    {
      name: "Elite Membership",
      icon: Zap,
      price: 299,
      period: "per month",
      description: "Unlimited grooming for professionals",
      features: [
        "Unlimited Haircuts",
        "Unlimited Beard Grooming",
        "4 Hot Towel Shaves/month",
        "Monthly Hair Treatment",
        "Priority Booking Always",
        "30% Product Discount",
        "Exclusive Member Events",
        "Bring a Friend Free Monthly",
      ],
      color: "text-accent",
      popular: false,
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
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Pricing & <span className="text-gradient">Packages</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your grooming needs and save with our exclusive memberships
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`relative hover-lift h-full ${
                      pkg.popular
                        ? "border-primary border-2 shadow-[0_0_30px_hsl(38_92%_50%_/_0.3)]"
                        : "border-border"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pt-8">
                      <Icon className={`w-12 h-12 mx-auto mb-4 ${pkg.color}`} />
                      <CardTitle className="font-display text-3xl mb-2">{pkg.name}</CardTitle>
                      <p className="text-muted-foreground">{pkg.description}</p>
                      <div className="mt-6">
                        <span className="text-5xl font-bold">${pkg.price}</span>
                        <span className="text-muted-foreground ml-2">/ {pkg.period}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to="/booking">
                        <Button
                          size="lg"
                          className={`w-full ${
                            pkg.popular ? "hover-glow" : ""
                          }`}
                          variant={pkg.popular ? "default" : "outline"}
                        >
                          Get Started
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">
              Need a custom package? Contact us to discuss your specific needs.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
