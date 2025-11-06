import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const HairProductGuidePost = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 slide-up">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Dec 5, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Carlos Rodriguez</span>
              </div>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Products</span>
            </div>

            <h1 className="font-display text-5xl font-bold mb-6">
              Hair Product Guide: Which One is <span className="text-gradient">Right for You</span>?
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              Navigate the world of pomades, waxes, and gels to find the perfect product for your hair type and desired style.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">Pomades</h2>
            <p>
              Best for classic, slicked-back styles. Water-based pomades wash out easily, while oil-based versions provide stronger hold and shine.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">Hair Clay</h2>
            <p>
              Perfect for textured, matte styles. Clay provides strong hold with a natural finish and works great for shorter to medium-length hair.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default HairProductGuidePost;
