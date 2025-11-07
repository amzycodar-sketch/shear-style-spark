import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gift, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const GiftCardsPage = () => {
  const [amount, setAmount] = useState("100");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");

  const amounts = ["50", "100", "150", "200"];

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Gift Card Purchased!",
      description: `A $${amount} gift card has been sent to ${recipientEmail}`,
    });
  };

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
            <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Gift <span className="text-gradient">Cards</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Give the gift of grooming excellence. Perfect for any occasion.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-primary/20 sticky top-24">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-primary to-accent rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                    <div className="relative z-10 text-center">
                      <CreditCard className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
                      <h3 className="font-display text-3xl font-bold text-primary-foreground mb-2">Elite Cutz</h3>
                      <p className="text-primary-foreground/80">Gift Card</p>
                      <p className="text-5xl font-bold text-primary-foreground mt-6">${amount}</p>
                    </div>
                  </div>
                  <p className="text-center text-muted-foreground">
                    Redeemable for any service or product at Elite Cutz
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="font-display text-3xl font-bold mb-6">Purchase Gift Card</h2>
                  
                  <form onSubmit={handlePurchase} className="space-y-6">
                    <div>
                      <Label className="mb-3 block">Select Amount</Label>
                      <div className="grid grid-cols-4 gap-3">
                        {amounts.map((amt) => (
                          <Button
                            key={amt}
                            type="button"
                            variant={amount === amt ? "default" : "outline"}
                            onClick={() => setAmount(amt)}
                            className="hover-glow"
                          >
                            ${amt}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="custom">Custom Amount</Label>
                      <Input
                        id="custom"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        min="25"
                        max="1000"
                      />
                    </div>

                    <div>
                      <Label htmlFor="recipientName">Recipient Name</Label>
                      <Input
                        id="recipientName"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="recipientEmail">Recipient Email</Label>
                      <Input
                        id="recipientEmail"
                        type="email"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Personal Message (Optional)</Label>
                      <Input
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Happy Birthday!"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full hover-glow">
                      Purchase Gift Card - ${amount}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GiftCardsPage;
