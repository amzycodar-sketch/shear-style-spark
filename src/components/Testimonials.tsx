import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Peterson",
      role: "Business Executive",
      rating: 5,
      text: "Elite Cutz has been my go-to barber shop for over 3 years. Marcus always knows exactly what I need. The attention to detail is unmatched!",
      image: "",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Software Engineer",
      rating: 5,
      text: "Best barber experience in the city. The hot towel shave is absolutely incredible. Professional service every single time.",
      image: "",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Marketing Director",
      rating: 5,
      text: "I've tried many barbershops, but Elite Cutz stands out. The team is skilled, friendly, and the atmosphere is perfect for relaxation.",
      image: "",
    },
    {
      id: 4,
      name: "Robert Williams",
      role: "Entrepreneur",
      rating: 5,
      text: "The VIP package is worth every penny. From the haircut to the beard grooming and massage, it's the ultimate grooming experience.",
      image: "",
    },
    {
      id: 5,
      name: "Alex Thompson",
      role: "Designer",
      rating: 5,
      text: "Carlos is an artist with the clippers! The creative designs he does are always on point. Highly recommend booking with him.",
      image: "",
    },
    {
      id: 6,
      name: "Daniel Martinez",
      role: "Real Estate Agent",
      rating: 5,
      text: "Consistent quality, professional service, and great atmosphere. Elite Cutz has set the standard for what a modern barbershop should be.",
      image: "",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-lift h-full bg-card border-border hover:border-primary transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
