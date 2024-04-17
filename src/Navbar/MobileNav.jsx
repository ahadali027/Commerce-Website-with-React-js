import React from "react";
import { NavLinksData } from "./NavLinksData";
import { IoCloseSharp } from "react-icons/io5";

function MobileNav({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed w-screen h-screen inset-0 z-50 bg-black/20  ${
        isOpen === true ? "block opacity-100" : "hidden opacity-0"
      }`}
    >
      <div
        className={`h-full bg-white  max-w-sm  ${
          isOpen === true ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-200`}
      >
        <div className="px-10 py-5 flex justify-end">
          <IoCloseSharp
            onClick={() => setIsOpen(false)}
            className="hover:rotate-90 duration-300 hover:text-black transition-transform"
            size={24}
          />
        </div>
        <nav>
          <ul className="px-5 py-5 flex flex-col gap-3  ">
            {NavLinksData.map(({ title }, ind) => (
              <ListItem key={ind} title={title} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
function ListItem({ title }) {
  return (
    <li className="border-t-2 pt-3 uppercase text-xs font-medium hover:text-yellow-500 transition-colors cursor-pointer">
      {title}
    </li>
  );
}

export default MobileNav;
