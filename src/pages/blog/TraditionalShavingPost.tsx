import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const TraditionalShavingPost = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 slide-up">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Dec 8, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Ryan Thompson</span>
              </div>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Shaving</span>
            </div>

            <h1 className="font-display text-5xl font-bold mb-6">
              The Art of <span className="text-gradient">Traditional Wet Shaving</span>
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              Traditional wet shaving is more than just grooming—it's a ritual that connects us to generations of gentlemen before us.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">The Tools</h2>
            <p>
              A quality straight razor, premium shaving cream, and a badger hair brush are the foundation of a perfect traditional shave.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default TraditionalShavingPost;
