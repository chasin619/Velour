import React from "react";
import Link from "next/link";
import { Button } from "@/components/button";
import { navList } from "@/utils/constants";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-20 max-w-[1400px] mx-auto py-8">
      <p className="font-extrabold text-4xl">velour</p>
      <ul className="flex justify-center gap-12">
        {navList.map((item, index) => (
          <li
            key={index}
            className="text-base pb-1 border-b-2 border-transparent hover:border-b-yellow-500 transition duration-300 ease-in-out"
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Button title="Get Started" />
    </header>
  );
};

export default Header;
