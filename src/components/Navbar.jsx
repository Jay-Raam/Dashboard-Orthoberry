import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import "./styles/styles.css";

function Navbar() {
  return (
    <>
      <nav className="w-full lg:w-[112px] lg:h-[100vh] sticky top-0 z-50">
        <ul className="flex justify-center items-center gap-12 lg:flex-col">
          <li className="mt-3">
            <GiHamburgerMenu className="text-[26px]" />
          </li>
          <li className="mt-3 bg-button-bg p-3 rounded-md">
            <CiUser className="text-[26px] text-white font-bold" />
          </li>
          <li className="mt-3">
            <MdOutlineHealthAndSafety className="text-[26px] font-thin" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
