import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, Users, Calendar, Check } from "lucide-react";
import { motion } from "framer-motion";

const CorporatePage = () => {
  const packages = [
    {
      name: "Team Grooming Package",
      description: "Perfect for small teams and departments",
      features: [
        "Quarterly team grooming sessions",
        "15% corporate discount",
        "Flexible scheduling",
        "Invoice billing available",
      ],
    },
    {
      name: "Executive Package",
      description: "Premium grooming for leadership teams",
      features: [
        "Monthly VIP grooming sessions",
        "20% corporate discount",
        "Priority scheduling",
        "Dedicated account manager",
        "On-site services available",
      ],
    },
    {
      name: "Enterprise Package",
      description: "Comprehensive wellness program for large organizations",
      features: [
        "Unlimited team member access",
        "25% corporate discount",
        "On-site grooming events",
        "Wellness program integration",
        "Quarterly reporting",
        "Dedicated team",
      ],
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
            <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Corporate <span className="text-gradient">Packages</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elevate your team's image with our exclusive corporate grooming programs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="hover-lift h-full bg-background border-border hover:border-primary transition-all duration-300">
                  <CardContent className="p-8">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-display text-2xl font-bold mb-3">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-6">{pkg.description}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h2 className="font-display text-3xl font-bold mb-6 text-center">
                  Request Corporate Package Info
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" placeholder="Acme Corp" required />
                    </div>
                    <div>
                      <Label htmlFor="contactName">Contact Name</Label>
                      <Input id="contactName" placeholder="John Doe" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="employees">Number of Employees</Label>
                    <Input id="employees" type="number" placeholder="50" required />
                  </div>
                  <Button type="submit" size="lg" className="w-full hover-glow">
                    <Calendar className="mr-2 w-5 h-5" />
                    Request Information
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporatePage;
