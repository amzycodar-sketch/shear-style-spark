-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Anyone can view testimonials
CREATE POLICY "Anyone can view testimonials"
  ON public.testimonials
  FOR SELECT
  USING (true);

-- Only admins can insert testimonials
CREATE POLICY "Admins can insert testimonials"
  ON public.testimonials
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update testimonials
CREATE POLICY "Admins can update testimonials"
  ON public.testimonials
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete testimonials
CREATE POLICY "Admins can delete testimonials"
  ON public.testimonials
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create barbers table
CREATE TABLE public.barbers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  bio TEXT NOT NULL,
  specialties TEXT[] NOT NULL,
  experience_years INTEGER NOT NULL,
  image_url TEXT,
  slug TEXT NOT NULL UNIQUE,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.barbers ENABLE ROW LEVEL SECURITY;

-- Anyone can view barbers
CREATE POLICY "Anyone can view barbers"
  ON public.barbers
  FOR SELECT
  USING (true);

-- Only admins can insert barbers
CREATE POLICY "Admins can insert barbers"
  ON public.barbers
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update barbers
CREATE POLICY "Admins can update barbers"
  ON public.barbers
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete barbers
CREATE POLICY "Admins can delete barbers"
  ON public.barbers
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_barbers_updated_at
  BEFORE UPDATE ON public.barbers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();