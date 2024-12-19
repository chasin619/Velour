import React from "react";
import {
  ContactSection,
  HeroSection,
  PortfolioSection,
  ReviewSection,
  ServiceSection,
} from "@/ui/home";

export const metadata = {
  title:
    "Custom Websites & SEO for Wedding Planners, Florists, and Venues | Velour",
  description:
    "Velour offers custom website design and SEO services tailored for wedding planners, florists, and venues. Elevate your brand and grow your business online today!",
  openGraph: {
    title:
      "Custom Websites & SEO for Wedding Planners, Florists, and Venues | Velour",
    description:
      "Velour offers custom website design and SEO services tailored for wedding planners, florists, and venues. Elevate your brand and grow your business online today!",
    type: "website",
    url: "https://www.velourweb.com/",
    images: [
      {
        url: "https://www.velourweb.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Velour Website Favicon",
      },
    ],
    siteName: "Velour",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Websites & SEO for Wedding Planners, Florists, and Venues | Velour",
    description:
      "Velour offers custom website design and SEO services tailored for wedding planners, florists, and venues. Elevate your brand and grow your business online today!",
    images: ["https://www.velourweb.com/twitter.png"],
    creator: "@ChasinAlex",
  },
  metadataBase: new URL("https://www.velourweb.com/"),
  alternates: {
    canonical: "./",
  },
};

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
