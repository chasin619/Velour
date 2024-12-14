"use client";

import { QouteSvg } from "@/assets/svgs";
import Image from "next/image";
import React from "react";
import { Rating } from "react-simple-star-rating";

const Review = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-28 px-12">
      <p className="text-5xl font-bold text-center">
        Trusted by top wedding florists and planners for elegant web design.
      </p>
      <div className="flex justify-center items-center gap-6 mt-20">
        {Array.from({ length: 3 }).map(() => (
          <div className="bg-white rounded-2xl max-w-[500px] p-8">
            <Image src={QouteSvg} alt="Qoute Image" className="mb-8" />
            <p className="text-[#808080]">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </p>
            <div className="border-t border-[#D4D4D4] pt-6 mt-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="rounded-full overflow-hidden w-12 h-12">
                  <Image
                    src="/review-image.jpeg"
                    alt="Review Image"
                    width={41}
                    height={41}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <p className="text-darkBlack text-lg">Barbara D. Smith</p>
              </div>
              <Rating
                initialValue={5}
                size={25}
                allowFraction={false}
                allowHover={false}
                readonly
                transition
                emptyClassName="!flex justify-center item-center flex-row"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
