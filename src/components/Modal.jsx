import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Imag0005 from "./image/Mask group.png";
import "./styles/styles.css";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [value, setValue] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const patientData = Object.fromEntries(formData.entries());
    onSubmit(patientData);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg sm:max-w-md md:max-w-sm">
        <div className="relative">
          <img
            src={Imag0005}
            alt="fruit"
            className="bg-image-bg rounded-t-lg w-full h-32 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute bottom-[6.5rem] right-[-11px] md:bottom-[110px] md:right-[-16px] bg-white text-black rounded-full p-2 shadow-md"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center">Add New Patient</h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">
                Patient Name
                <input
                  type="text"
                  name="name"
                  className="border border-gray-300 w-[100%] mx-auto p-2 border-t-0 border-r-0 border-l-0 hover:border-b-green-500 outline-none focus:border-b-green-500 focus:border-b-[2px]"
                  required
                />
              </label>
              <label className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="custom-checkbox"
                />
                <span className="text-gray-700">
                  Patient is the responsible party
                </span>
              </label>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700">
                Phone
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                  defaultCountry="US"
                  className="border border-gray-300 w-[100%] mx-auto p-2 border-t-0 border-r-0 border-l-0 hover:border-b-green-500 outline-none focus:border-b-green-500 focus:border-b-[2px]"
                />
              </label>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700">
                Email
                <input
                  type="email"
                  name="email"
                  className="border border-gray-300 w-[100%] mx-auto p-2 border-t-0 border-r-0 border-l-0 hover:border-b-green-500 outline-none focus:border-b-green-500 focus:border-b-[2px]"
                  required
                />
              </label>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-600 transition-colors"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
