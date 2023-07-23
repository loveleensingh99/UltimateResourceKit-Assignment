import { FiLogOut } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { ImNewspaper } from "react-icons/im";
import React from "react";
import { GiButterfly } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";

export default function MobileAppbar() {
  return (
    <aside
      id="default-sidebar"
      className="md:hidden fixed bottom-0 left-0 z-30 w-full h-16 bg-white shadow-md flex justify-center"
      aria-label="Bottom App Bar"
    >
      <ul className="flex items-center justify-center w-full space-x-8">
        <li>
          <a
            href="/"
            class="flex items-center justify-center p-2 shadow-lg bg-primary rounded-md   group"
          >
            <FiHome size={25} className="text-white " />
          </a>
        </li>

        <li>
          <a
            href="/"
            className="flex items-center justify-center p-2 text-gray-500 hover:text-primary"
          >
            <ImNewspaper size={25} />
          </a>
        </li>

        <li>
          <a
            href="/"
            className="flex items-center justify-center p-2 text-gray-500 hover:text-primary"
          >
            <AiOutlineUnorderedList size={25} />
          </a>
        </li>

        <li>
          <a
            href="/"
            className="flex items-center justify-center p-2 text-gray-500 hover:text-primary"
          >
            <CiUser size={25} />
          </a>
        </li>

        <li>
          <a
            href="/"
            className="flex items-center justify-center p-2 text-gray-500 hover:text-primary"
          >
            <AiOutlineSearch size={25} />
          </a>
        </li>
      </ul>
    </aside>
  );
}
