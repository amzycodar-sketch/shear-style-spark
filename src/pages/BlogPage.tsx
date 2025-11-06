import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "10 Essential Grooming Tips for Modern Men",
      excerpt: "Discover the must-know grooming habits that every modern gentleman should adopt for a polished appearance.",
      author: "Marcus Johnson",
      date: "Dec 15, 2024",
      category: "Grooming Tips",
      slug: "grooming-tips-modern-men",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Beard Maintenance",
      excerpt: "Learn professional techniques to keep your beard looking sharp, healthy, and well-groomed year-round.",
      author: "David Martinez",
      date: "Dec 12, 2024",
      category: "Beard Care",
      slug: "beard-maintenance-guide",
    },
    {
      id: 3,
      title: "Choosing the Right Haircut for Your Face Shape",
      excerpt: "Understanding your face shape is key to selecting a haircut that enhances your best features.",
      author: "James Wilson",
      date: "Dec 10, 2024",
      category: "Hairstyling",
      slug: "haircut-face-shape",
    },
    {
      id: 4,
      title: "The Art of Traditional Wet Shaving",
      excerpt: "Experience the luxury of traditional shaving techniques passed down through generations of barbers.",
      author: "Ryan Thompson",
      date: "Dec 8, 2024",
      category: "Shaving",
      slug: "traditional-wet-shaving",
    },
    {
      id: 5,
      title: "Hair Product Guide: Which One is Right for You?",
      excerpt: "Navigate the world of pomades, waxes, and gels to find the perfect product for your hair type.",
      author: "Carlos Rodriguez",
      date: "Dec 5, 2024",
      category: "Products",
      slug: "hair-product-guide",
    },
    {
      id: 6,
      title: "Maintaining Your Style Between Haircuts",
      excerpt: "Expert tips to keep your haircut looking fresh and styled throughout the weeks between appointments.",
      author: "Michael Chen",
      date: "Dec 3, 2024",
      category: "Maintenance",
      slug: "maintain-style-between-cuts",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Grooming <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert tips, trends, and insights from our master barbers
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={post.id}
                className="group hover-lift bg-background border-border hover:border-primary transition-all duration-300 scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="p-0 hover:text-primary">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
