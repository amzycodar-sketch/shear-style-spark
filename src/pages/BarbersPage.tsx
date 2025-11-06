import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Award } from "lucide-react";

const BarbersPage = () => {
  const barbers = [
    {
      id: 1,
      name: "Marcus Johnson",
      title: "Master Barber",
      experience: "15 years",
      specialty: "Classic Cuts & Beard Styling",
      rating: 5.0,
      reviews: 342,
      slug: "marcus-johnson",
    },
    {
      id: 2,
      name: "David Martinez",
      title: "Senior Barber",
      experience: "12 years",
      specialty: "Modern Fades & Hair Design",
      rating: 4.9,
      reviews: 298,
      slug: "david-martinez",
    },
    {
      id: 3,
      name: "James Wilson",
      title: "Expert Barber",
      experience: "10 years",
      specialty: "Traditional Shaves & Grooming",
      rating: 4.9,
      reviews: 256,
      slug: "james-wilson",
    },
    {
      id: 4,
      name: "Ryan Thompson",
      title: "Style Specialist",
      experience: "8 years",
      specialty: "Contemporary Styles & Color",
      rating: 4.8,
      reviews: 184,
      slug: "ryan-thompson",
    },
    {
      id: 5,
      name: "Carlos Rodriguez",
      title: "Barber Artist",
      experience: "9 years",
      specialty: "Artistic Designs & Patterns",
      rating: 4.9,
      reviews: 221,
      slug: "carlos-rodriguez",
    },
    {
      id: 6,
      name: "Michael Chen",
      title: "Grooming Expert",
      experience: "11 years",
      specialty: "Asian Hair Techniques",
      rating: 4.9,
      reviews: 267,
      slug: "michael-chen",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Meet Our <span className="text-gradient">Barbers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of master barbers brings decades of combined experience and passion for the craft
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {barbers.map((barber, index) => (
              <Card
                key={barber.id}
                className="group overflow-hidden hover-lift bg-background border-border hover:border-primary transition-all duration-300 scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    <Award className="w-4 h-4 inline mr-1" />
                    {barber.experience}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-1">{barber.name}</h3>
                  <p className="text-primary font-semibold mb-3">{barber.title}</p>
                  <p className="text-muted-foreground mb-4">{barber.specialty}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 fill-primary text-primary" />
                      <span className="font-bold">{barber.rating}</span>
                      <span className="text-muted-foreground text-sm">({barber.reviews})</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link to={`/barbers/${barber.slug}`} className="flex-1">
                      <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                        View Profile
                      </Button>
                    </Link>
                    <Button className="flex-1 hover-glow">Book Now</Button>
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

export default BarbersPage;
