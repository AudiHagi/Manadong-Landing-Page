import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function OutletCard({ locationName, locationLink }) {
  return (
    <div className="flex justify-between p-4 border border-b-black">
      <p className="text-left text-black font-semibold">{locationName}</p>
      <div className="text-right text-manadong">
        <Link to={locationLink} className="inline-flex items-center">
          <span className="text-sm font-semibold">Purchase here</span>
          <FaArrowRight className="text-lg ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default OutletCard;
