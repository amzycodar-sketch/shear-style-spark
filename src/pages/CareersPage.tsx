import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Heart, TrendingUp } from "lucide-react";

const CareersPage = () => {
  const positions = [
    {
      title: "Senior Barber",
      type: "Full-time",
      location: "Downtown Location",
      description: "Join our elite team of master barbers. Minimum 5 years experience required.",
    },
    {
      title: "Junior Barber",
      type: "Full-time",
      location: "Downtown Location",
      description: "Great opportunity for talented barbers looking to grow their skills in a professional environment.",
    },
    {
      title: "Barber Apprentice",
      type: "Apprenticeship",
      location: "Downtown Location",
      description: "Learn from the best. Perfect for those starting their barbering career.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a team that's passionate about the craft of barbering
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover-lift scale-in">
              <CardContent className="p-8 text-center">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">
                  Continuous training and development to advance your career
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">Supportive Culture</h3>
                <p className="text-muted-foreground">
                  Work in a positive environment with passionate professionals
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">Competitive Benefits</h3>
                <p className="text-muted-foreground">
                  Great compensation, flexible schedules, and employee discounts
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="font-display text-4xl font-bold text-center mb-12">Open Positions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="hover-lift scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="font-display text-2xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">{position.type}</span>
                        <span className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">{position.location}</span>
                      </div>
                      <p className="text-muted-foreground">{position.description}</p>
                    </div>
                    <Button className="hover-glow whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
