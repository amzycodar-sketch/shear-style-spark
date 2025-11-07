import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Clock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AcademyPage = () => {
  const programs = [
    {
      title: "Barber Fundamentals",
      duration: "8 Weeks",
      level: "Beginner",
      description: "Complete introduction to barbering including cutting techniques, tools, and client service.",
      topics: ["Basic cutting techniques", "Tool knowledge & maintenance", "Client consultation", "Sanitation & safety"],
    },
    {
      title: "Advanced Styling",
      duration: "6 Weeks",
      level: "Intermediate",
      description: "Master modern fades, designs, and contemporary styling techniques.",
      topics: ["Fade techniques", "Hair designs & patterns", "Product knowledge", "Trend forecasting"],
    },
    {
      title: "Master Barber Certification",
      duration: "12 Weeks",
      level: "Advanced",
      description: "Comprehensive program covering all aspects of professional barbering.",
      topics: ["Traditional shaving", "Business management", "Advanced color techniques", "Mentorship training"],
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
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Elite Cutz <span className="text-gradient">Academy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional barber training programs taught by master barbers with decades of experience
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="hover-lift h-full bg-background border-border hover:border-primary transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {program.level}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span>Topics Covered:</span>
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {program.topics.map((topic, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full hover-glow">Learn More</Button>
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
            className="max-w-4xl mx-auto"
          >
            <Card className="border-primary/20">
              <CardContent className="p-12 text-center">
                <Award className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="font-display text-4xl font-bold mb-4">
                  Why Train at Elite Cutz Academy?
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                  {[
                    "Learn from award-winning barbers",
                    "Hands-on training with real clients",
                    "Small class sizes for personalized attention",
                    "Job placement assistance",
                    "Flexible scheduling options",
                    "Industry-recognized certification",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button size="lg" className="mt-8 hover-glow">
                    Request Information
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

export default AcademyPage;
