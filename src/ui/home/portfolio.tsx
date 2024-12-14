import React from "react";
import Image from "next/image";
import { Button } from "@/components/button";
import { portfolioData } from "@/utils/constants";

const Portfolio = () => {
  return (
    <section className="w-full mx-auto">
      {portfolioData.map((portfolio, index) => (
        <div
          className={`${
            portfolio.direction === "row-reverse"
              ? "bg-primaryGray"
              : "bg-darkBlack"
          } mx-auto`}
        >
          <div
            className={`max-w-[1400px] mx-auto flex justify-center items-center gap-10 w-full py-8 min-h-[80vh] ${
              portfolio.direction === "row-reverse"
                ? "flex-row-reverse"
                : "flex-row"
            }`}
            key={index}
          >
            <Image
              src={portfolio.imageUrl}
              alt={`${portfolio.headline} Image`}
              height="540"
              width="650"
            />
            <div className="w-1/2">
              <p className="text-yellow-500 mb-2 font-medium text-xl">
                {portfolio.title}
              </p>
              <p className="text-5xl font-bold">{portfolio.headline}</p>
              <p className="mt-8 mb-6 max-w-[520px] text-lg">
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
