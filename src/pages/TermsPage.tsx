import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-5xl font-bold mb-8 slide-up">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">Last updated: December 2024</p>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Appointment Booking</h2>
              <p>
                When you book an appointment with Elite Cutz, you agree to arrive on time and provide at least 24 hours notice for cancellations or rescheduling.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Payment Terms</h2>
              <p>
                Payment is due at the time of service. We accept cash, credit cards, and digital payments. Prices are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Cancellation Policy</h2>
              <p>
                Cancellations made less than 24 hours before your appointment may be subject to a cancellation fee. No-shows will be charged the full service amount.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Service Guarantee</h2>
              <p>
                We stand behind the quality of our work. If you're not satisfied with your service, please let us know within 48 hours and we'll make it right.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Shop Policies</h2>
              <p>
                All product sales are final unless the product is defective. Returns must be made within 14 days with original packaging and receipt.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Contact</h2>
              <p>
                Questions about these terms? Contact us at info@elitecutz.com or call (555) 123-4567.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;
