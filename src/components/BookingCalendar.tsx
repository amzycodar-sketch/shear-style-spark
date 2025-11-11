import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }),
  notes: z.string().max(500, { message: "Notes must be less than 500 characters" }).optional(),
});

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
    "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  const barbers = [
    "Marcus Johnson",
    "David Martinez", 
    "James Wilson",
    "Ryan Thompson",
    "Carlos Rodriguez",
    "Michael Chen"
  ];

  const services = [
    "Premium Haircut - $45",
    "Beard Grooming - $30",
    "Hot Towel Shave - $40",
    "Hair Coloring - $65",
    "VIP Package - $120"
  ];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to book an appointment",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }
    
    if (!date || !selectedTime || !selectedBarber || !selectedService) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      bookingSchema.parse({ name, email, phone, notes });

      const { error } = await supabase
        .from('appointments')
        .insert({
          user_id: user.id,
          name,
          email,
          phone,
          date: date.toISOString().split('T')[0],
          time: selectedTime,
          barber: selectedBarber,
          service: selectedService,
          notes: notes || null,
        });

      if (error) throw error;

      toast({
        title: "Booking Confirmed!",
        description: `Your appointment on ${date.toLocaleDateString()} at ${selectedTime} has been booked with ${selectedBarber}.`,
      });

      // Reset form
      setDate(new Date());
      setSelectedTime("");
      setSelectedBarber("");
      setSelectedService("");
      setName("");
      setEmail("");
      setPhone("");
      setNotes("");
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error.message || "Failed to book appointment",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-8"
    >
      <Card>
        <CardContent className="p-6">
          <h2 className="font-display text-2xl font-bold mb-6">Select Date & Time</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            disabled={(date) => date < new Date()}
          />

          <div className="mt-6">
            <Label className="mb-3 block">Available Times</Label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="font-display text-2xl font-bold mb-6">Booking Details</h2>
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <Label>Select Barber</Label>
              <Select value={selectedBarber} onValueChange={setSelectedBarber}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your barber" />
                </SelectTrigger>
                <SelectContent>
                  {barbers.map((barber) => (
                    <SelectItem key={barber} value={barber}>
                      {barber}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Select Service</Label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                required
              />
            </div>

            <div>
              <Label htmlFor="notes">Special Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special requests..."
                rows={3}
              />
            </div>

            <Button type="submit" size="lg" className="w-full hover-glow" disabled={loading}>
              {loading ? "Booking..." : "Confirm Booking"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BookingCalendar;