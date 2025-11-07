import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: "Grand Opening - West Side Location",
      date: "January 15, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "456 West Avenue",
      description: "Join us for our newest location opening! Free consultations, giveaways, and special discounts all day.",
      attendees: "Open to all",
    },
    {
      title: "Men's Grooming Workshop",
      date: "January 22, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Elite Cutz Downtown",
      description: "Learn professional grooming techniques from our master barbers. Limited seats available.",
      attendees: "20 spots",
    },
    {
      title: "Charity Cut-a-Thon",
      date: "February 5, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "All Locations",
      description: "All proceeds from haircuts donated to local youth programs. Book your spot to support the cause.",
      attendees: "Community event",
    },
  ];

  const pastEvents = [
    {
      title: "Holiday Appreciation Event",
      date: "December 2024",
      description: "Thank you to everyone who attended our annual client appreciation event!",
    },
    {
      title: "Fall Fashion Show",
      date: "November 2024",
      description: "Showcased the latest men's grooming trends and styles.",
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
            <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Events & <span className="text-gradient">Workshops</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us for special events, workshops, and community gatherings
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
            <h2 className="font-display text-4xl font-bold mb-8">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover-lift bg-background border-border hover:border-primary transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="font-display text-2xl font-bold mb-4">{event.title}</h3>
                          <p className="text-muted-foreground mb-6">{event.description}</p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2 text-sm">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <Clock className="w-4 h-4 text-primary" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <Users className="w-4 h-4 text-primary" />
                              <span>{event.attendees}</span>
                            </div>
                          </div>
                        </div>
                        <Button className="hover-glow whitespace-nowrap">
                          Register Now
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
            <h2 className="font-display text-4xl font-bold mb-8">Past Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <h3 className="font-display text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-sm text-primary mb-3">{event.date}</p>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;
