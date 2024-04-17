import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import React, { useState } from "react";
import { NavLinks } from "./PcNav";

import { CiMenuFries } from "react-icons/ci";
import MobileNav from "./MobileNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-around items-center pt-5 max-w-7xl mx-auto ">
      <CiMenuFries onClick={() => setIsOpen(true)} className="lg:hidden" />
      <img src="../../public/imageye/logo.svg" alt="" />
      <NavLinks />
      <div className="flex gap-6">
        <IoSearch className="hover:text-yellow-500 transition-colors" />
        <FaRegUser className="hover:text-yellow-500 transition-colors" />
        <FaRegHeart className="hidden sm:hidden lg:block md:block hover:text-yellow-500 transition-colors" />
        <MdOutlineShoppingBag className="hover:text-yellow-500 transition-colors" />
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Navbar;
