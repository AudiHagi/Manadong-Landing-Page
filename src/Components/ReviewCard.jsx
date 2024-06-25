import React from "react";
import Logo from "../assets/Images/image 22.svg";

function ReviewCard({ reviewName, reviewDetail }) {
  return (
    <div className="w-full flex flex-col p-4 bg-white rounded-lg">
      <div className="flex justify-start">
        <img src={Logo} alt="Blog Logo" />
      </div>
      <div>
        <p className="text-start font-bold text-navbar">{reviewName}</p>
        <p className="text-start font-medium text-black">{reviewDetail}</p>
      </div>
      <div className="flex justify-end">
        <img src={Logo} alt="Blog Logo" />
      </div>
    </div>
  );
}

export default ReviewCard;
