import { NavLinksData } from "./NavLinksData";
import { FaChevronDown } from "react-icons/fa";

export function NavLinks() {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-10 ">
        {NavLinksData.map(({ title, dropdown }, ind) => (
          <ListItem title={title} key={ind} dropdown={dropdown} />
        ))}
      </ul>
    </nav>
  );
}
function ListItem({ title, dropdown }) {
  return (
    <li className=" font-medium group pt-5 pb-5 relative transition-colors cursor-pointer  gap-2 flex  items-center ">
      <span className="group-hover:text-yellow-500">{title}</span>
      {dropdown && (
        <FaChevronDown
          size={"12px"}
          className="group-hover:text-yellow-500 transition-colors  "
        />
      )}
      {dropdown && (
        <ul className="absolute top-full z-30 bg-white -left-7 transition-all shadow-md hidden group-hover:block">
          {dropdown.map(({ title }, ind) => (
            <li
              key={ind}
              className="w-max py-2 px-7  hover:text-yellow-500 transition-color"
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
