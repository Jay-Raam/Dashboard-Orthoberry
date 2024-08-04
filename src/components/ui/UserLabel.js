import React from "react";

const CardDetail = ({ label, value }) => {
  return (
    <div className="flex justify-start items-start gap-3 w-full">
      <div className="name flex justify-start items-start gap-3 flex-col w-1/2">
        <span className="text-[14px] text-text-two-bg">{label}</span>
        <h1 className="font-medium text-[16px]">{value}</h1>
      </div>
    </div>
  );
};

export default CardDetail;
