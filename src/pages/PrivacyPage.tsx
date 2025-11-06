import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-5xl font-bold mb-8 slide-up">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">Last updated: December 2024</p>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when you book an appointment, create an account, or communicate with us. This may include your name, email address, phone number, and payment information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide and improve our services, process your bookings, communicate with you, and personalize your experience at Elite Cutz.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. Contact us at privacy@elitecutz.com for any privacy-related requests.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at info@elitecutz.com or call (555) 123-4567.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
