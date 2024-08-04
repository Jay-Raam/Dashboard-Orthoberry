import React, { useState } from "react";
import { Link } from "react-router-dom";

const Title = ({ titleImageSrc, titleText, userImageSrc }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="title flex justify-between w-full items-start mt-2 relative">
      <div className="title-image flex justify-center items-center gap-4">
        <img src={titleImageSrc} alt="title-image" className="ml-2" />
        <h1 className="text-center font-gilroy">{titleText}</h1>
      </div>
      <div className="relative">
        <img
          src={userImageSrc}
          alt="user-image"
          className="mr-3 cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="dropdown-menu absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
            <ul className="list-none p-0 m-0">
              <Link to="/users">
                <li
                  className="hover:bg-gray-200 text-black cursor-pointer px-4 py-2"
                  onClick={toggleDropdown}
                >
                  Edit Profile
                </li>
              </Link>
              <li
                className="hover:bg-gray-200 text-black cursor-pointer px-4 py-2"
                onClick={toggleDropdown}
              >
                Sign Out
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Title;
