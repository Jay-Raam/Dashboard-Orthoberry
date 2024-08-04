import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { UserData } from "./ui/Userdata";

const statusColors = {
  Completed: "bg-green-500",
  Expired: "bg-red-500",
  Sent: "bg-yellow-500",
};

const hashCode = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
};

const intToColor = (hash) => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const value = (hash >> (i * 4)) & 0xf;
    color += value.toString(16);
  }
  return color;
};

const getColorForUser = (userName) => {
  const hash = hashCode(userName);
  return intToColor(hash);
};

const User = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="user pb-6">
      <div className="title-user flex justify-between items-center mt-6 mb-6">
        <h1 className="font-gilroy text-sm ml-10 text-[14px]">Patient</h1>
        <h1 className="font-gilroy text-sm mr-10 text-[14px]">Action</h1>
      </div>
      <div className="flex flex-col justify-center gap-2 w-full">
        {UserData &&
          UserData.map((user, index) => {
            return (
              <div
                key={user.id || index}
                className="relative flex flex-col sm:flex-row justify-between items-center p-4 hover:border hover:border-gray-200 rounded-lg hover:shadow-md "
              >
                <div className="flex justify-center items-center gap-4">
                  <h1
                    className="w-[30px] h-[30px] rounded-full text-white flex justify-center items-center font-gilroy"
                    style={{ backgroundColor: getColorForUser(user.name) }}
                  >
                    {user.name.charAt(0)}
                  </h1>
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-[13px] md:text-xl font-gilroy font-medium">
                      {user.name}
                    </h1>
                    <div className="flex justify-center items-center gap-3">
                      <h4 className="text-sm font-gilroy font-medium text-text-two-bg">
                        {user.gender}
                      </h4>
                      <h4 className="text-sm font-gilroy font-medium text-text-two-bg">
                        {user.age}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-5 mr-7">
                  <div className="flex items-center gap-4 mt-2">
                    {user.phone && (
                      <span className="text-gray-600 text-[24px] hover:border hover:border-green-600 hover:rounded-full p-2 cursor-pointer">
                        {user.phone}
                      </span>
                    )}
                    {user.email && (
                      <span className="text-gray-600 text-[24px] hover:border hover:border-red-700 hover:rounded-full p-2 cursor-pointer">
                        {user.email}
                      </span>
                    )}
                  </div>
                  <p
                    className={`flex items-center mt-2 ${
                      user.status === "W"
                        ? "px-4 py-2 bg-black text-white rounded-full font-extrabold flex justify-center items-center w-16"
                        : ""
                    }`}
                  >
                    {user.status.length >= 3 && (
                      <span
                        className={`w-1 h-1 mr-3 rounded-full ${
                          statusColors[user.status]
                        }`}
                      ></span>
                    )}
                    {user.status}
                  </p>
                  <button
                    type="button"
                    className="text-gray-600 relative"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    <HiOutlineDotsVertical />
                    {openDropdown === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                        <span
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => handleDropdownToggle(index)}
                        >
                          View Details
                        </span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default User;
