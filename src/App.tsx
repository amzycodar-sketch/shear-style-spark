import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import BarbersPage from "./pages/BarbersPage";
import GalleryPage from "./pages/GalleryPage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CareersPage from "./pages/CareersPage";
import FAQPage from "./pages/FAQPage";
import BookingPage from "./pages/BookingPage";
import PricingPage from "./pages/PricingPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import LoyaltyPage from "./pages/LoyaltyPage";
import GiftCardsPage from "./pages/GiftCardsPage";
import StudentDiscountPage from "./pages/StudentDiscountPage";
import CorporatePage from "./pages/CorporatePage";
import FranchisePage from "./pages/FranchisePage";
import PressPage from "./pages/PressPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import EventsPage from "./pages/EventsPage";
import AcademyPage from "./pages/AcademyPage";
import HaircutPage from "./pages/services/HaircutPage";
import BeardGroomingPage from "./pages/services/BeardGroomingPage";
import HotTowelShavePage from "./pages/services/HotTowelShavePage";
import HairColoringPage from "./pages/services/HairColoringPage";
import VIPPackagePage from "./pages/services/VIPPackagePage";
import HairTreatmentPage from "./pages/services/HairTreatmentPage";
import KidsHaircutPage from "./pages/services/KidsHaircutPage";
import BuzzCutPage from "./pages/services/BuzzCutPage";
import MarcusJohnsonPage from "./pages/barbers/MarcusJohnsonPage";
import DavidMartinezPage from "./pages/barbers/DavidMartinezPage";
import JamesWilsonPage from "./pages/barbers/JamesWilsonPage";
import RyanThompsonPage from "./pages/barbers/RyanThompsonPage";
import CarlosRodriguezPage from "./pages/barbers/CarlosRodriguezPage";
import MichaelChenPage from "./pages/barbers/MichaelChenPage";
import GroomingTipsPost from "./pages/blog/GroomingTipsPost";
import BeardMaintenancePost from "./pages/blog/BeardMaintenancePost";
import HaircutFaceShapePost from "./pages/blog/HaircutFaceShapePost";
import TraditionalShavingPost from "./pages/blog/TraditionalShavingPost";
import HairProductGuidePost from "./pages/blog/HairProductGuidePost";
import MaintainStylePost from "./pages/blog/MaintainStylePost";
import PremiumPomadePage from "./pages/shop/PremiumPomadePage";
import BeardOilPage from "./pages/shop/BeardOilPage";
import HairClayPage from "./pages/shop/HairClayPage";
import BeardBalmPage from "./pages/shop/BeardBalmPage";
import StylingWaxPage from "./pages/shop/StylingWaxPage";
import ShavingCreamPage from "./pages/shop/ShavingCreamPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/haircut" element={<HaircutPage />} />
          <Route path="/services/beard-grooming" element={<BeardGroomingPage />} />
          <Route path="/services/hot-towel-shave" element={<HotTowelShavePage />} />
          <Route path="/services/hair-coloring" element={<HairColoringPage />} />
          <Route path="/services/vip-package" element={<VIPPackagePage />} />
          <Route path="/services/hair-treatment" element={<HairTreatmentPage />} />
          <Route path="/services/kids-haircut" element={<KidsHaircutPage />} />
          <Route path="/services/buzz-cut" element={<BuzzCutPage />} />
          <Route path="/barbers" element={<BarbersPage />} />
          <Route path="/barbers/marcus-johnson" element={<MarcusJohnsonPage />} />
          <Route path="/barbers/david-martinez" element={<DavidMartinezPage />} />
          <Route path="/barbers/james-wilson" element={<JamesWilsonPage />} />
          <Route path="/barbers/ryan-thompson" element={<RyanThompsonPage />} />
          <Route path="/barbers/carlos-rodriguez" element={<CarlosRodriguezPage />} />
          <Route path="/barbers/michael-chen" element={<MichaelChenPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/premium-pomade" element={<PremiumPomadePage />} />
          <Route path="/shop/beard-oil" element={<BeardOilPage />} />
          <Route path="/shop/hair-clay" element={<HairClayPage />} />
          <Route path="/shop/beard-balm" element={<BeardBalmPage />} />
          <Route path="/shop/styling-wax" element={<StylingWaxPage />} />
          <Route path="/shop/shaving-cream" element={<ShavingCreamPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/grooming-tips-modern-men" element={<GroomingTipsPost />} />
          <Route path="/blog/beard-maintenance-guide" element={<BeardMaintenancePost />} />
          <Route path="/blog/haircut-face-shape" element={<HaircutFaceShapePost />} />
          <Route path="/blog/traditional-wet-shaving" element={<TraditionalShavingPost />} />
          <Route path="/blog/hair-product-guide" element={<HairProductGuidePost />} />
          <Route path="/blog/maintain-style-between-cuts" element={<MaintainStylePost />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/loyalty" element={<LoyaltyPage />} />
          <Route path="/gift-cards" element={<GiftCardsPage />} />
          <Route path="/student-discount" element={<StudentDiscountPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
