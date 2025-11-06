import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: "Premium Pomade",
      price: 24.99,
      rating: 4.8,
      reviews: 156,
      category: "Hair Styling",
      slug: "premium-pomade",
    },
    {
      id: 2,
      name: "Beard Oil",
      price: 18.99,
      rating: 4.9,
      reviews: 203,
      category: "Beard Care",
      slug: "beard-oil",
    },
    {
      id: 3,
      name: "Hair Clay",
      price: 22.99,
      rating: 4.7,
      reviews: 142,
      category: "Hair Styling",
      slug: "hair-clay",
    },
    {
      id: 4,
      name: "Beard Balm",
      price: 16.99,
      rating: 4.8,
      reviews: 189,
      category: "Beard Care",
      slug: "beard-balm",
    },
    {
      id: 5,
      name: "Styling Wax",
      price: 19.99,
      rating: 4.6,
      reviews: 128,
      category: "Hair Styling",
      slug: "styling-wax",
    },
    {
      id: 6,
      name: "Shaving Cream",
      price: 14.99,
      rating: 4.9,
      reviews: 234,
      category: "Shaving",
      slug: "shaving-cream",
    },
    {
      id: 7,
      name: "Hair Spray",
      price: 17.99,
      rating: 4.5,
      reviews: 98,
      category: "Hair Styling",
      slug: "hair-spray",
    },
    {
      id: 8,
      name: "Aftershave Lotion",
      price: 21.99,
      rating: 4.8,
      reviews: 167,
      category: "Shaving",
      slug: "aftershave-lotion",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Premium <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-grade grooming products used by our barbers, now available for home use
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group hover-lift bg-background border-border hover:border-primary transition-all duration-300 scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      New
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-primary font-semibold mb-1">{product.category}</p>
                  <h3 className="font-display text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-primary text-primary"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <div className="flex gap-2">
                      <Link to={`/shop/${product.slug}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                      <Button size="sm" className="hover-glow">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
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

export default ShopPage;
