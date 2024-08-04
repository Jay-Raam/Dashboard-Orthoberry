// Card.js
import React from "react";

const Card = ({
  imageSrc,
  title,
  subtitle,
  description,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className={`w-[280px] md:w-[380px] rounded-2xl h-auto lg:h-[195px] flex flex-col sm:flex-row items-center justify-evenly gap-11 p-4 shadow-lg ${bgColor}`}
    >
      <div className="text">
        <h1 className={`text-7xl font-bold ${textColor}`}>{title}</h1>
        <h4 className="text-2xl font-gilroy font-medium">{subtitle}</h4>
        <p className="font-gilroy text-sm">{description}</p>
      </div>
      {imageSrc && (
        <img src={imageSrc} alt={subtitle} className="w-24 h-auto" />
      )}
    </div>
  );
};

export default Card;
