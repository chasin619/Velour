import { ServiceSvg } from "@/assets/svgs";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  content: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ content }) => {
  return (
    <div className="relative max-w-[320px] max-h-[300px] p-16 flex justify-center items-center flex-col gap-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:text-darkBlack bg-darkBlack text-white cursor-pointer">
      <Image src={ServiceSvg} alt="Service Image" className="" />
      <p className="text-lg mt-2 text-center">{content}</p>
    </div>
  );
};

export default ServiceCard;
