import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Store, TrendingUp, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FranchisePage = () => {
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
            <Store className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Franchise <span className="text-gradient">Opportunities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the Elite Cutz family and bring premium grooming to your community
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Award, label: "Proven Brand", desc: "15+ years of excellence" },
              { icon: TrendingUp, label: "High ROI", desc: "Strong profit margins" },
              { icon: Users, label: "Full Support", desc: "Training & ongoing help" },
              { icon: Store, label: "Turnkey Setup", desc: "Complete system included" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover-lift text-center h-full">
                    <CardContent className="p-8">
                      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-display text-xl font-bold mb-2">{item.label}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
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
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-8 text-center">What We Provide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Complete brand package & marketing materials",
                "Comprehensive training program",
                "Site selection assistance",
                "Equipment & supplier partnerships",
                "Operations manual & systems",
                "Ongoing support & consultation",
                "Marketing & advertising support",
                "Exclusive territory rights",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-center space-x-3 p-4 bg-background rounded-lg border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards owning your own Elite Cutz franchise
            </p>
            <Link to="/contact">
              <Button size="lg" className="hover-glow">
                Request Franchise Information
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FranchisePage;
