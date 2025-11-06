import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const MaintainStylePost = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 slide-up">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Dec 3, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Michael Chen</span>
              </div>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Maintenance</span>
            </div>

            <h1 className="font-display text-5xl font-bold mb-6">
              Maintaining Your Style <span className="text-gradient">Between Haircuts</span>
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              Expert tips to keep your haircut looking fresh and styled throughout the weeks between professional appointments.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">Daily Maintenance</h2>
            <p>
              Use quality styling products and take a few minutes each morning to style your hair properly. This prevents your cut from looking unkempt as it grows.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default MaintainStylePost;
