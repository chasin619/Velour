import React from "react";
import Link from "next/link";
import { navList } from "@/utils/constants";
import {
  FacebookSvg,
  InstagramSvg,
  TwitterSvg,
  YoutubeSvg,
} from "@/assets/svgs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primaryGray w-full">
      <div className="max-w-[1400px] mx-auto xs:px-5 lg:px-0">
        <div className="flex justify-between items-center xs:flex-col md:flex-row pt-12 gap-6 pb-14">
          <p className="font-extrabold text-4xl self-start">velour</p>
          <div className="flex flex-col xs:w-full md:w-auto">
            <ul className="flex justify-center xs:flex-col md:flex-row gap-12 md:border-b-[0.1px] pb-3 border-white">
              {navList.map((item, index) => (
                <li key={index} className="text-base font-extralight">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-4 md:self-end">
              <Image src={FacebookSvg} alt="Facebook Image" />
              <Image src={InstagramSvg} alt="Instagram Image" />
              <Image src={TwitterSvg} alt="Twitter Image" />
              <Image src={YoutubeSvg} alt="Youtube Image" />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-12 border-t-[0.1px] py-6 border-white">
          <p className="text-sm font-extralight">Privacy & Policy</p>
          <p className="text-sm font-extralight">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
