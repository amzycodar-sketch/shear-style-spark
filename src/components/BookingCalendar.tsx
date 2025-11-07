import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Clock, User, Scissors } from "lucide-react";

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedBarber, setSelectedBarber] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
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
    "VIP Package - $120",
    "Hair Treatment - $50",
    "Kids Haircut - $25",
    "Buzz Cut - $20"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !selectedBarber || !selectedService || !name || !phone || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to complete your booking.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: `Your appointment with ${selectedBarber} is scheduled for ${date.toLocaleDateString()} at ${selectedTime}.`,
    });

    // Reset form
    setSelectedTime("");
    setSelectedBarber("");
    setSelectedService("");
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Select Date & Time</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-border"
            disabled={(date) => date < new Date()}
          />

          <div className="space-y-4">
            <div>
              <Label className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Select Time</span>
              </Label>
              <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto p-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className="hover-glow"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Booking Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="flex items-center space-x-2 mb-2">
                <User className="w-4 h-4 text-primary" />
                <span>Select Barber</span>
              </Label>
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
              <Label className="flex items-center space-x-2 mb-2">
                <Scissors className="w-4 h-4 text-primary" />
                <span>Select Service</span>
              </Label>
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
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
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
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full hover-glow">
              Confirm Booking
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingCalendar;
