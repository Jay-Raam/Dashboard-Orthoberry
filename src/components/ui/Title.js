import React from "react";

const Title = ({ titleImageSrc, titleText, userImageSrc }) => {
  return (
    <div className="title flex justify-between w-full items-start mt-2">
      <div className="title-image flex justify-center items-center gap-4">
        <img src={titleImageSrc} alt="title-image" className="ml-2" />
        <h1 className="text-center font-gilroy">{titleText}</h1>
      </div>
      <img src={userImageSrc} alt="user-image" className="mr-3" />
    </div>
  );
};

export default Title;
