import React from "react";
import Image from "next/image";
import { Button } from "@/components/button";
import { portfolioData } from "@/utils/constants";

const Portfolio = () => {
  return (
    <section className="w-full" id="portfolio">
      {portfolioData.map((portfolio, index) => (
        <div
          className={`${
            portfolio.direction === "row-reverse"
              ? "bg-primaryGray"
              : "bg-darkBlack"
          } mx-auto`}
          key={index}
        > 
          <div
            className={`max-w-[1400px] mx-auto flex justify-center items-center gap-10 w-full py-8 min-h-[80vh] xs:px-5 lg:px-8 ${
              portfolio.direction === "row-reverse"
                ? "xs:flex-col md:flex-row-reverse"
                : "xs:flex-col md:flex-row"
            }`}
            key={index}
          >
            <Image
              src={portfolio.imageUrl}
              alt={`${portfolio.headline} Image`}
              height="540"
              width="650"
            />
            <div className="xs:w-full md:w-1/2">
              <p className="text-yellow-500 mb-2 font-medium md:text-xl">
                {portfolio.title}
              </p>
              <p className="xs:text-4xl lg:text-5xl font-bold">{portfolio.headline}</p>
              <p className="mt-8 mb-6 max-w-[520px] md:text-lg">
                {portfolio.description}
              </p>
              <Button title="Get Started" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
