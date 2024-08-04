import React from "react";
import { BsCake } from "react-icons/bs";
import { IoMdCalendar } from "react-icons/io";
import { HiPencil } from "react-icons/hi";

const UserCardList = ({ Editdata }) => {
  return (
    <div className="user-editer mt-6">
      {Editdata.map((user, index) => (
        <div
          key={index}
          className="user-card w-full flex justify-center md:justify-between items-center gap-7 md:gap-4 flex-wrap"
        >
          <div className="flex justify-center items-start gap-2">
            <div className="logo w-14 flex items-center justify-center">
              <h1 className="font-gilroy text-3xl font-medium bg-orange-700 text-white px-4 py-2 rounded-full">
                {user.name.charAt(0)}
              </h1>
            </div>
            <div className="flex justify-center items-start gap-2 flex-col text-text-two-bg">
              <h1 className="font-gilroy text-xl font-medium">{user.name}</h1>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <h4>
                  {user.gender}
                  <span className="ml-1">({user.age})</span>
                </h4>
                <h4 className="flex justify-center items-center gap-1">
                  <span className="text-[15px]">
                    <BsCake />
                  </span>
                  {user.birthday}
                </h4>
                <h4 className="flex justify-center items-center gap-1">
                  <span className="text-[15px]">
                    <IoMdCalendar />
                  </span>
                  Exam:
                  <span className="text-text-three-bg decoration-text-three-bg underline cursor-pointer">
                    mm-dd-yyyy
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="edit-icon flex gap-2 justify-center items-center px-8 py-2 rounded-full text-white bg-black cursor-pointer">
            <span>
              <HiPencil />
            </span>
            <h3>Edit</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCardList;
