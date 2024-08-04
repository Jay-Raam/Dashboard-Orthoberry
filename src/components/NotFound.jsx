import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
      <p className="text-xl font-gilroy text-gray-500">
        The page you're looking for doesn't exist. Please go back and try again.
      </p>
      <Link
        to="/"
        className="flex justify-center items-center gap-2 rounded-full cursor-pointer p-2 border-[2px] text-white bg-black border-gray-950 w-[160px]"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFound;
