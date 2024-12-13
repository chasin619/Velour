import React from "react";
import Image from "next/image";
import { Button } from "@/components/button";

const Hero = () => {
  return (
    <section className="flex justify-center items-center gap-10 max-w-[1400px] mx-auto py-8 min-h-[70vh]">
      <div className="w-1/2">
        <h1 className="text-5xl">
          Elevate Your Brand with Luxurious Web Presence.
        </h1>
        <p className="mt-8 mb-6 max-w-[520px] text-lg">
          Custom websites tailored to reflect the elegance and sophistication of
          your brand.
        </p>
        <Button title="Get Started" />
      </div>
      <Image src="/hero.png" alt="Hero Image" height="450" width="600" />
    </section>
  );
};

export default Hero;
