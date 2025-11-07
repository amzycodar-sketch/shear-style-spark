import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, Download, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const PressPage = () => {
  const pressReleases = [
    {
      title: "Elite Cutz Expands to Fifth Location",
      date: "December 15, 2024",
      excerpt: "Leading men's grooming brand announces new downtown location opening in Q1 2025.",
    },
    {
      title: "Elite Cutz Wins Best Barbershop Award 2024",
      date: "November 20, 2024",
      excerpt: "Local business excellence recognized with prestigious city award for outstanding service.",
    },
    {
      title: "New VIP Membership Program Launches",
      date: "October 10, 2024",
      excerpt: "Innovative loyalty program offers unprecedented value for regular clients.",
    },
  ];

  const mediaKit = [
    { name: "Company Logo (PNG)", size: "2.4 MB" },
    { name: "Company Logo (SVG)", size: "156 KB" },
    { name: "Brand Guidelines PDF", size: "8.1 MB" },
    { name: "High-Res Photos", size: "45 MB" },
    { name: "Fact Sheet", size: "890 KB" },
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
            <Newspaper className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Press & <span className="text-gradient">Media</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest news, press releases, and media resources
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-8">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover-lift">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{release.date}</span>
                          </div>
                          <h3 className="font-display text-2xl font-bold mb-3">{release.title}</h3>
                          <p className="text-muted-foreground">{release.excerpt}</p>
                        </div>
                        <Button variant="outline" className="ml-4">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl font-bold mb-8">Media Kit</h2>
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  Download our complete media kit including logos, brand guidelines, and high-resolution images.
                </p>
                <div className="space-y-3">
                  {mediaKit.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.size}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
                <Button size="lg" className="w-full mt-6 hover-glow">
                  <Download className="mr-2 w-5 h-5" />
                  Download Complete Media Kit
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressPage;
