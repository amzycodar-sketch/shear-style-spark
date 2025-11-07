import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";
import { motion } from "framer-motion";

const BookingPage = () => {
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
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Book Your <span className="text-gradient">Appointment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred date, time, barber, and service. We'll confirm your appointment shortly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <BookingCalendar />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingPage;
