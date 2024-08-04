import React from "react";
import { IoPencilOutline } from "react-icons/io5";

const UserCard = ({ title, children, onEdit }) => {
  return (
    <div className="card border border-gray-400 p-5 w-full rounded-md font-gilroy">
      <div className="flex w-full justify-between items-start mb-8">
        <h1 className="font-bold text-xl">{title}</h1>
        <div
          className="arrow text-text-three-bg flex justify-center items-center cursor-pointer"
          onClick={onEdit}
        >
          <span>
            <IoPencilOutline />
          </span>
          <h5 className="underline ml-2 decoration-dotted">Edit</h5>
        </div>
      </div>
      <div className="flex justify-start items-start gap-6 w-full flex-col">
        {children}
      </div>
    </div>
  );
};

export default UserCard;
