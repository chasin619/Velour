import { ServiceSvg } from "@/assets/svgs";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  content: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ content }) => {
  return (
    <div className="relative max-w-[320px] max-h-[300px] p-8 flex justify-center items-center flex-col gap-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:text-darkBlack bg-darkBlack text-white cursor-pointer">
      <Image
        src={ServiceSvg}
        alt="Service Icon"
        className="w-12 h-12"
      />
      <p className="text-md sm:text-lg mt-2 text-center leading-relaxed">
        {content}
      </p>
    </div>
  );
};


export default ServiceCard;
