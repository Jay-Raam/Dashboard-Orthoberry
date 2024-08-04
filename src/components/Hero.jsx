import React, { useState } from "react";
import Image001 from "./image/293025749_458408642957566_878363431450472338_n 1.png";
import Image002 from "./image/img-1.png";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import Card from "./ui/card";
import User from "./User";
import Image003 from "./image/Layer_1.png";
import Image004 from "./image/Group 2370.png";
import Modal from "./Modal";
import Title from "./ui/Title";
import { Link } from "react-router-dom";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (patientData) => {
    console.log("New patient data:", patientData);
  };

  return (
    <>
      <div className="flex justify-start w-full items-center mt-8 md:mt-0 flex-col">
        <Title
          titleImageSrc={Image001}
          titleText="Hello Ortho"
          userImageSrc={Image002}
        />

        <div className="Add-New-Patient flex flex-col md:flex-row justify-center sm:justify-between items-center w-full mt-4 flex-wrap gap-4 sm:gap-0">
          <h1
            style={{
              fontFamily: "Gilroy",
              fontWeight: "bold",
              fontSize: "2.25rem",
            }}
            className="sm:ml-2"
          >
            Patients
          </h1>
          <div className="flex flex-col sm:flex-row mr-8 justify-center items-center lg:gap-2 gap-4">
            <Link to="/users">
              <div className="flex justify-center items-center gap-2 cursor-pointer rounded-full p-2 border-[2px] border-gray-950 w-[160px]">
                <h1 className="font-gilroy">All Patient</h1>
                <MdOutlineKeyboardArrowDown />
              </div>
            </Link>
            <div
              onClick={openModal}
              className="flex justify-center items-center gap-2 rounded-full cursor-pointer p-2 border-[2px] text-white bg-black border-gray-950 w-[160px]"
            >
              <AiOutlinePlus />
              <h1 className="font-gilroy">New Patient</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly mt-5 items-center w-full gap-6">
          <Link to="/users">
            <Card
              imageSrc={Image003}
              title="1384"
              subtitle="Patients"
              description="Added in the last month"
              bgColor="bg-card-bg"
              textColor="text-text-bg"
            />
          </Link>
          <Link to="/users">
            <Card
              imageSrc={Image004}
              title="46"
              subtitle="Wishlinks"
              description="Sent last month"
              bgColor="bg-card-two-bg"
              textColor="text-text-bg"
            />
          </Link>
          <Link to="/users">
            <div className="w-[290px] md:w-[380px] rounded-2xl h-[195px] flex flex-col justify-center items-start bg-card-three-bg p-4 shadow-lg">
              <div className="text ml-8 flex flex-col justify-center items-start gap-3">
                <h4 className="text-2xl font-gilroy font-bold text-white">
                  Learn how to send <br /> Wishlinks
                </h4>
                <button
                  type="button"
                  aria-label="Play Video"
                  className="bg-white py-2 px-4 rounded-full text-black flex font-medium justify-center items-center gap-2 shadow-md transition-transform transform hover:scale-105"
                >
                  <IoIosPlay /> Play Video
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full">
          <User />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Home;
