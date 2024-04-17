import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

import { FaPinterestP } from "react-icons/fa6";
import React from "react";

function MainFooter() {
  return (
    <footer className="bg-black">
      <div className="flex gap-5 px-10 py-14 max-w-7xl mx-auto flex-wrap">
        <div className="max-w-sm ">
          <h2 className="text-white text-lg font-semibold">Our Store</h2>

          <p className="text-white mt-3  ">
            Miniture is one of the biggest international fashion companies, one
            of the world&apos;s largest distribution groups.
          </p>
          <div className="flex gap-2 mt-3 ">
            <span className="w-max p-3 rounded-full border border-white/50 hover:bg-yellow-500 hover:border-transparent transition-colors">
              <FaFacebookF size={15} className="text-white " />
            </span>
            <span className="w-max p-3 rounded-full border border-white/50 hover:bg-yellow-500 hover:border-transparent transition-colors">
              <FaXTwitter size={15} className="text-white " />
            </span>
            <span className="w-max p-3 rounded-full border border-white/50 hover:bg-yellow-500 hover:border-transparent transition-colors">
              <IoLogoInstagram size={15} className="text-white " />
            </span>
            <span className="w-max p-3 rounded-full border border-white/50 hover:bg-yellow-500 hover:border-transparent transition-colors">
              <FaPinterestP size={15} className="text-white " />
            </span>
          </div>
        </div>
        <div className="flex md:justify-evenly gap-10 flex-wrap flex-1">
          <div>
            <h2 className="text-white text-lg font-semibold">Quick Link</h2>
            <ul className="text-white mt-3 w-full flex flex-col gap-2 ">
              <li className="cursor-pointer hover:text-gray-400 transition-all font-semibold w-max ">
                My account
              </li>
              <li className="cursor-pointer hover:text-gray-400 transition-all font-semibold w-max">
                Shopping Cart
              </li>
              <li className="cursor-pointer hover:text-gray-400 transition-all font-semibold w-max">
                Wishlist
              </li>
              <li className="cursor-pointer hover:text-gray-400 transition-all font-semibold w-max">
                Product Compare
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold">Information</h2>
            <ul className="text-white mt-3 w-full flex flex-col gap-2 ">
              <li className="cursor-pointer hover:text-gray-400 transition-all font-semibold w-max ">
                Privacy policy
              </li>
              <li className="cursor-pointer hover:text-gray-400 transition-all font-semibold w-max">
                Refund policy
              </li>
              <li className="cursor-pointer hover:text-gray-400 transition-all font-semibold w-max">
                Shipping & Return
              </li>
              <li className="cursor-pointer hover:text-gray-400 transition-all font-semibold w-max">
                Product Compare
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-sm">
          <h2 className="text-white text-3xl ">Let&apos;s get in touch </h2>

          <p className="text-white mt-3 ">
            Sign up for our newsletter and receive 10% off your
          </p>
          <div className="flex gap-2 mt-10 ">
            <div className="flex bg-white w-full rounded-lg  ">
              <input
                className="border-none px-3 rounded-lg py-3 w-full focus:outline-none"
                type="text"
                placeholder="Enter your email adress..."
              />
              <button className="px-3">
                <GoArrowRight
                  size={25}
                  className="hover:text-yellow-500 transition-colors duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
