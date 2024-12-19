import Brands from "@/components/Brands";
import Browse from "@/components/Browse";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import Testimonials from "@/components/Testimonials";
import TopSelling from "@/components/TopSelling";

const Homepage = () => {
  return (
    <div className="font-">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Brands Section */}
      <Brands />
      {/* New Arrivals */}
      <NewArrivals />
      {/* Top Selling */}
      <TopSelling />
      {/* Browse by Dress Style */}
      <Browse />
      {/* Testimonials */}
      <Testimonials />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
