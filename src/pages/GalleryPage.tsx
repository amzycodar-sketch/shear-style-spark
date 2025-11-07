import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import haircutImg from "@/assets/service-haircut.jpg";
import beardImg from "@/assets/service-beard.jpg";
import shaveImg from "@/assets/service-shave.jpg";

const GalleryPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const categories = ["All", "Haircuts", "Beards", "Shaves", "Colors", "Designs"];
  
  const images = Array(24).fill(null).map((_, i) => ({
    id: i + 1,
    src: i % 3 === 0 ? haircutImg : i % 3 === 1 ? beardImg : shaveImg,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    title: `Professional Style ${i + 1}`,
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of exceptional grooming work and get inspired for your next style
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="mb-12 flex justify-center flex-wrap gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="px-6">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images
                    .filter((img) => category === "All" || img.category === category)
                    .map((image, index) => {
                      const filteredIndex = images.filter((img) => category === "All" || img.category === category).indexOf(image);
                      return (
                        <motion.div
                          key={image.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                          <Card
                            className="group overflow-hidden hover-lift cursor-pointer"
                            onClick={() => openLightbox(filteredIndex)}
                          >
                            <div className="aspect-square relative overflow-hidden">
                              <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4">
                                <p className="font-display text-lg font-bold">{image.title}</p>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {lightboxOpen && (
        <GalleryLightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
