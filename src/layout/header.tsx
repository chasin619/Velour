"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/button";
import { navList } from "@/utils/constants";
import { scrollToSection } from "@/utils/helpers";
import { CloseSvg, MenuSvg } from "@/assets/svgs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-between items-center mx-auto px-5 py-6 glass-effect">
      <div className="max-w-[1400px] w-full flex justify-between items-center mx-auto">
        <p className="font-extrabold text-4xl">velour</p>
        <ul className="hidden lg:flex justify-center items-center gap-12">
          {navList.map((item, index) => (
            <li
              key={index}
              className="text-base pb-1 border-b-2 border-transparent hover:border-b-yellow-500 transition duration-300 ease-in-out"
            >
              <Link
                href={item.href}
                data-target={item.targetAtr}
                onClick={item.targetAtr ? scrollToSection : () => {}}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <Image
            src={MenuSvg}
            alt="Menu Toggle"
            height="24"
            width="24"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-darkBlack text-white flex flex-col items-center justify-center gap-8 z-50 transition-all duration-500 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={CloseSvg}
            alt="Close Image"
            height="24"
            width="24"
            onClick={toggleMenu}
            className="cursor-pointer z-[999] absolute top-8 right-8"
          />
          {navList.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              data-target={item.targetAtr}
              onClick={(e) => {
                setIsOpen(false);
                if (item.targetAtr) scrollToSection(e);
              }}
              className="text-xl"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Button
          title="Get Started"
          buttonStyles="hidden lg:block"
          data-target="contact-us"
          onClick={scrollToSection}
        />
      </div>
    </header>
  );
};

export default Header;
