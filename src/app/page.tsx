import React from "react";
import { ContactSection, HeroSection, PortfolioSection, ReviewSection, ServiceSection } from "@/ui/home";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <PortfolioSection />
      <ReviewSection />
      <ContactSection />
    </>
  );
};

export default Home;
