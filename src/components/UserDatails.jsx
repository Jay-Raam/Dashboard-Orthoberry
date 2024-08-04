import React from "react";
import Title from "./ui/Title";
import Image0001 from "./image/293025749_458408642957566_878363431450472338_n 1.png";
import Image0002 from "./image/img-2.png";
import UserCardList from "./ui/UserEditerCardList";
import { Link } from "react-router-dom";
import UserCardDatails from "./UserCardDatails";
import { Editdata } from "./ui/Userdata";

const UserDatails = () => {
  return (
    <>
      <div className="flex justify-start itmes-center flex-col w-full mt-6 md:mt-0">
        <Title
          titleImageSrc={Image0001}
          titleText="Hello Ortho"
          userImageSrc={Image0002}
          className="mt-3"
        />

        <div className="page-title w-full flex flex-col justify-center items-start mt-7 gap-2">
          <h1 className="font-gilroy font-bold text-4xl">Patient Info</h1>
          <div className="flex justify-center items-center ml-3 gap-1">
            <Link
              to="/"
              className="font-gilroy text-[16px] text-text-three-bg underline decoration-text-three-bg"
            >
              Patient
            </Link>
            <span>/</span>
            <Link to="/users" className="font-gilroy text-[16px]">
              Patient Info
            </Link>
          </div>
        </div>

        <UserCardList Editdata={Editdata} />

        {/* user detais */}
        <UserCardDatails />
      </div>
    </>
  );
};

export default UserDatails;
