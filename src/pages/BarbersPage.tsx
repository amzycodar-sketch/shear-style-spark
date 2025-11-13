import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Barber {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  experience_years: number;
  image_url: string | null;
  slug: string;
  featured: boolean;
}

const BarbersPage = () => {
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBarbers();
  }, []);

  const loadBarbers = async () => {
    try {
      const { data, error } = await supabase
        .from('barbers')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false});

      if (error) throw error;
      setBarbers(data || []);
    } catch (error) {
      console.error('Error loading barbers:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <p>Loading barbers...</p>
        </div>
        <Footer />
      </div>
    );
  }

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
          {barbers.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No barbers available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {barbers.map((barber, index) => (
                <Card
                  key={barber.id}
                  className="group hover-lift bg-background border-border hover:border-primary transition-all duration-300 scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                    {barber.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                        {barber.name}
                      </h3>
                      <p className="text-primary font-semibold">{barber.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{barber.experience_years} years exp.</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {barber.specialties.map((specialty, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link to={`/barbers/${barber.slug}`}>
                      <Button className="w-full hover-glow">
                        View Profile
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BarbersPage;
