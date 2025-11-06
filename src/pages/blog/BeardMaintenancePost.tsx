import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const BeardMaintenancePost = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 slide-up">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Dec 12, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>David Martinez</span>
              </div>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Beard Care</span>
            </div>

            <h1 className="font-display text-5xl font-bold mb-6">
              The Ultimate Guide to <span className="text-gradient">Beard Maintenance</span>
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              A well-maintained beard is the mark of a true gentleman. Here's everything you need to know about keeping your facial hair in top condition.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">Daily Beard Care Routine</h2>
            <p>
              Start your day by washing your beard with a quality beard shampoo. Regular soap can dry out your facial hair and the skin underneath. Follow up with a beard oil to keep everything moisturized and looking sharp.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">Weekly Maintenance</h2>
            <p>
              Once a week, give your beard a deep conditioning treatment. Use a beard balm to style and shape your facial hair while providing extra hold throughout the day.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BeardMaintenancePost;
