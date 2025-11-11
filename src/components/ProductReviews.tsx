import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().trim().min(10, { message: "Comment must be at least 10 characters" }).max(500, { message: "Comment must be less than 500 characters" }),
});

interface Review {
  id: string;
  rating: number;
  comment: string;
  created_at: string;
}

interface ProductReviewsProps {
  productSlug: string;
}

const ProductReviews = ({ productSlug }: ProductReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadReviews();
    checkUser();
  }, [productSlug]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const loadReviews = async () => {
    const { data, error } = await supabase
      .from('product_reviews')
      .select('*')
      .eq('product_slug', productSlug)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading reviews:', error);
    } else {
      setReviews(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to leave a review",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      reviewSchema.parse({ rating, comment });

      const { error } = await supabase
        .from('product_reviews')
        .insert({
          user_id: user.id,
          product_slug: productSlug,
          rating,
          comment,
        });

      if (error) throw error;

      toast({
        title: "Review submitted!",
        description: "Thank you for your feedback.",
      });

      setRating(0);
      setComment("");
      loadReviews();
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else if (error.code === '23505') {
        toast({
          title: "Already reviewed",
          description: "You have already reviewed this product",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error.message || "Failed to submit review",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold mb-4">Customer Reviews</h2>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < Math.floor(Number(avgRating))
                    ? "fill-primary text-primary"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xl font-semibold">{avgRating} out of 5</span>
          <span className="text-muted-foreground">({reviews.length} reviews)</span>
        </div>
      </div>

      {user && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-bold text-xl mb-4">Write a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 font-semibold">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= rating
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="block mb-2 font-semibold">Your Review</label>
                <Textarea
                  id="comment"
                  placeholder="Share your experience with this product..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" disabled={loading || rating === 0}>
                {loading ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  {new Date(review.created_at).toLocaleDateString()}
                </span>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;