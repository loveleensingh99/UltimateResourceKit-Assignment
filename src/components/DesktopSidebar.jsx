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

export default function DesktopSidebar() {
  return (
    <aside
      id="default-sidebar"
      class="hidden md:flex fixed top-0 left-0 z-40 w-16 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-white flex flex-col justify-between">
        {" "}
        <div className="">
          <ul class="space-y-0.5 font-medium">
            <li>
              <a
                href="/"
                class="flex items-center py-2 text-gray-900 rounded-lg   justify-center hover:bg-gray-100   group"
              >
                <GiButterfly size={35} className="text-primary" />
              </a>
            </li>

            <li>
              <a
                href="/"
                class="flex items-center p-2 text-gray-900 rounded-lg   hover:bg-gray-100   group"
              >
                <AiOutlineSearch size={40} className="text-gray-400" />
              </a>
            </li>
          </ul>
          <ul class="space-y-4 font-medium mt-12">
            <li>
              <a
                href="/"
                class="flex items-center justify-center p-2 shadow-lg bg-primary rounded-md   group"
              >
                <FiHome size={20} className="text-white " />
              </a>
            </li>

            <li>
              <a
                href="/"
                class="flex items-center justify-center p-2     group"
              >
                <ImNewspaper size={20} className="text-gray-500 " />
              </a>
            </li>

            <li>
              <a
                href="/"
                class="flex items-center justify-center p-2     group"
              >
                <AiOutlineUnorderedList size={20} className="text-gray-500 " />
              </a>
            </li>

            <li>
              <a
                href="/"
                class="flex items-center justify-center p-2     group"
              >
                <CiUser size={20} className="text-gray-500 " />
              </a>
            </li>
          </ul>
        </div>
        <ul class="space-y-4 font-medium pt-4   ">
          <li>
            <a href="/" class="flex items-center justify-center p-2     group">
              <AiOutlineBell size={20} className="text-gray-500 " />
            </a>
          </li>

          <li>
            <a href="/" class="flex items-center justify-center p-2     group">
              <FiLogOut size={20} className="text-gray-500 " />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
