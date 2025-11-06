import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const GroomingTipsPost = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 slide-up">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Dec 15, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Marcus Johnson</span>
              </div>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Grooming Tips</span>
            </div>

            <h1 className="font-display text-5xl font-bold mb-6">
              10 Essential Grooming Tips for <span className="text-gradient">Modern Men</span>
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              In today's world, proper grooming is more important than ever. Here are 10 essential tips that every modern gentleman should follow to maintain a polished appearance.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">1. Establish a Daily Routine</h2>
            <p>
              Consistency is key when it comes to grooming. Establish a daily routine that includes washing, moisturizing, and styling. This doesn't have to be complicated – even 10-15 minutes each morning can make a significant difference.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">2. Invest in Quality Products</h2>
            <p>
              Using high-quality grooming products pays off in the long run. From shampoo to styling products, invest in formulations that suit your hair type and skin. Professional-grade products often contain better ingredients and deliver superior results.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">3. Regular Haircuts Are Essential</h2>
            <p>
              Don't wait until your hair looks unkempt. Schedule regular haircuts every 3-4 weeks to maintain your style. This keeps your look fresh and prevents the need for dramatic changes.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">4. Master Your Beard Care</h2>
            <p>
              If you have facial hair, maintain it properly. Use beard oil daily to keep it soft and healthy. Trim regularly to maintain your desired shape and length.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">5. Don't Forget Skincare</h2>
            <p>
              Healthy skin is the foundation of good grooming. Use a gentle cleanser, moisturizer, and sunscreen daily. Consider adding a quality face serum to your routine for optimal results.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GroomingTipsPost;
