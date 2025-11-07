import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Award, Star, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoyaltyPage = () => {
  const tiers = [
    {
      name: "Bronze",
      icon: Award,
      points: "0-500",
      perks: ["5% off all services", "Birthday bonus", "Early access to promotions"],
      color: "text-orange-500",
    },
    {
      name: "Silver",
      icon: Star,
      points: "501-1000",
      perks: ["10% off all services", "Free upgrade once/month", "Priority booking", "Exclusive member events"],
      color: "text-gray-400",
    },
    {
      name: "Gold",
      icon: Crown,
      points: "1001+",
      perks: ["15% off all services", "Free monthly treatment", "VIP priority booking", "Bring a friend free monthly", "Exclusive products"],
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Loyalty <span className="text-gradient">Rewards</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Earn points with every visit and unlock exclusive perks as you level up
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Earn 10 points for every dollar spent. Watch your benefits grow as you reach each tier!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="hover-lift h-full bg-background border-border hover:border-primary transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <Icon className={`w-16 h-16 mx-auto mb-4 ${tier.color}`} />
                      <h3 className="font-display text-3xl font-bold mb-2">{tier.name}</h3>
                      <p className="text-muted-foreground mb-6">{tier.points} Points</p>
                      <ul className="space-y-3 text-left">
                        {tier.perks.map((perk, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{perk}</span>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/booking">
              <Button size="lg" className="hover-glow">
                Start Earning Points Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoyaltyPage;
