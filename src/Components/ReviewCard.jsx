import React from "react";
import Images from "../assets/Images/images.jsx";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

function ReviewCard({ reviewName, reviewDetail }) {
  return (
    <div className="w-full h-fit flex flex-col p-4 bg-white rounded-lg">
      <div className="flex justify-start">
        <FaQuoteLeft className="text-xl text-yellowQuote" />
      </div>
      <div className="p-4 text-[14px]">
        <p className="text-start font-bold text-navbar">{reviewName}</p>
        <p className="text-start font-medium text-black">{reviewDetail}</p>
      </div>
      <div className="flex justify-end ">
        <FaQuoteRight className="text-xl text-yellowQuote" />
      </div>
    </div>
  );
}

export default ReviewCard;
