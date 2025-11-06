import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const HaircutFaceShapePost = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 slide-up">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Dec 10, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>James Wilson</span>
              </div>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Hairstyling</span>
            </div>

            <h1 className="font-display text-5xl font-bold mb-6">
              Choosing the Right Haircut for Your <span className="text-gradient">Face Shape</span>
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              Understanding your face shape is crucial for selecting a haircut that enhances your best features and creates balance.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">Oval Face Shape</h2>
            <p>
              Lucky you! Oval faces work well with almost any hairstyle. Consider experimenting with different lengths and styles to find what suits your personality best.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground">Square Face Shape</h2>
            <p>
              Soften strong jawlines with textured styles and avoid harsh, geometric cuts. Longer styles on top with shorter sides work particularly well.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default HaircutFaceShapePost;
