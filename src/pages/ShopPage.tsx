import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  stock: number;
}

const ShopPage = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .gt('stock', 0)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <p>Loading products...</p>
        </div>
        <Footer />
      </div>
    );
  }

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
          {products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No products available at the moment.</p>
            </div>
          ) : (
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
                  <p className="text-sm text-primary font-semibold mb-1 capitalize">{product.category}</p>
                  <h3 className="font-display text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${Number(product.price).toFixed(2)}</span>
                    <div className="flex gap-2">
                      <Link to={`/shop/${product.slug}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        className="hover-glow"
                        onClick={() => addToCart(product.slug, product.name, Number(product.price))}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopPage;
