import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import "./styles/styles.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full lg:w-[112px] lg:h-[100vh] sticky top-0 z-50">
        <ul className="flex justify-center items-center gap-12 lg:flex-col">
          <li className="mt-3">
            <GiHamburgerMenu
              className="text-[26px] cursor-pointer"
              onClick={toggleMenu}
            />
          </li>
          <li className="mt-3 bg-button-bg p-3 rounded-md">
            <Link to="*">
              <CiUser className="text-[26px] text-white font-bold" />
            </Link>
          </li>
          <li className="mt-3">
            <Link to="*">
              <MdOutlineHealthAndSafety className="text-[26px] font-thin" />
            </Link>
          </li>
        </ul>

        {isMenuOpen && (
          <ul className="flex justify-center items-center flex-col absolute bg-black text-white w-[280px] h-[500px] right-0 left-0 top-[8rem] lg:top-9 lg:left-[8rem] z-50 gap-6 border border-gray-300 mx-auto p-2 border-t-0 border-r-0 border-l-0 hover:border-b-green-500 outline-none focus:border-b-[2px]">
            <li>
              <Link
                to="/"
                className="text-white border border-gray-300 mx-auto p-2 border-t-0 border-r-0 border-l-0 hover:border-b-green-500 outline-none focus:border-b-[2px]"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                onClick={toggleMenu}
                className="text-white border border-gray-300 mx-auto p-2 border-t-0 border-r-0 border-l-0 hover:border-b-green-500 outline-none focus:border-b-2 transition-all duration-300 ease-in-out"
              >
                Users
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
