"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/button";
import { scrollToSection } from "@/utils/helpers";

const Hero = () => {
  return (
    <section className="flex justify-center items-center xs:flex-col md:flex-row xs:px-5 lg:px-8 gap-10 max-w-[1400px] mx-auto py-8 min-h-[80vh]">
      <div className="xs:w-full md:w-1/2">
        <h1 className="xs:text-4xl lg:text-5xl">
          Elevate Your Brand with Luxurious Web Presence.
        </h1>
        <p className="mt-8 mb-6 max-w-[520px] text-lg">
          Custom websites tailored to reflect the elegance and sophistication of
          your brand.
        </p>
        <Button
          title="Get Started"
          data-target={"contact-us"}
          onClick={scrollToSection}
        />
      </div>
      <div className="xs:hidden md:block">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={450}
          height={200}
          className="custom-hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
