import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Percent, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StudentDiscountPage = () => {
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
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Student <span className="text-gradient">Discount</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We support students! Get 20% off all services with a valid student ID
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-primary/20 mb-12">
              <CardContent className="p-12 text-center">
                <Percent className="w-20 h-20 text-primary mx-auto mb-6" />
                <h2 className="font-display text-5xl font-bold mb-4">
                  <span className="text-gradient">20% OFF</span>
                </h2>
                <p className="text-2xl text-muted-foreground mb-6">
                  All Services for Students
                </p>
                <p className="text-muted-foreground mb-8">
                  Valid Monday - Thursday | Must present valid student ID
                </p>
                <Link to="/booking">
                  <Button size="lg" className="hover-glow">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book with Student Discount
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl font-bold mb-6">Eligibility & Terms</h3>
            
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Who Qualifies?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High school students</li>
                  <li>• College and university students</li>
                  <li>• Graduate students</li>
                  <li>• Trade school students</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">What You Need</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Valid student ID with current semester/year</li>
                  <li>• Current enrollment verification</li>
                  <li>• Photo identification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Important Details</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Discount valid Monday through Thursday only</li>
                  <li>• Cannot be combined with other offers</li>
                  <li>• Must present ID at time of service</li>
                  <li>• Valid for all regular services</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentDiscountPage;
