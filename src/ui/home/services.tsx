import React from "react";
import Image from "next/image";
import { BusinessSvg, CallSvg, RevenueSvg } from "@/assets/svgs";
import { ServiceCard } from "@/components/serviceCard";
import { serviceData } from "@/utils/constants";

const Services = () => {
  return (
    <section className="grid place-items-center w-full relative bg-primaryGray xs:py-8 lg:py-20" id="service">
      <div className="xs:hidden md:grid grid-cols-3 gap-10 place-items-center w-full max-w-6xl px-4 absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center cursor-pointer gap-6 bg-yellow-400 text-black font-medium px-16 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-yellow-500 hover:shadow-lg">
          <Image src={CallSvg} alt="Call Svg" />
          Increase Calls
        </div>
        <div className="flex justify-center items-center cursor-pointer gap-6 bg-yellow-400 text-black font-medium px-16 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-yellow-500 hover:shadow-lg">
          <Image src={RevenueSvg} alt="Revenue Svg" />
          Grow Revenue
        </div>
        <div className="flex justify-center items-center cursor-pointer gap-4 bg-yellow-400 text-black font-medium px-12 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-yellow-500 hover:shadow-lg">
          <Image src={BusinessSvg} alt="Business Svg" />
          Expand Your Business
        </div>
      </div>
      <h2 className="text-4xl font-medium mt-10">Our Services</h2>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} content={service.content} />
        ))}
      </div>
    </section>
  );
};

export default Services;
