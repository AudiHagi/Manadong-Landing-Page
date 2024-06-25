import React from "react";
import Logo from "../assets/Images/image 22.svg";

function LocationCard({ locationName, locationDetail }) {
  return (
    <div className="w-full flex flex-row p-4 border border-lightgrey rounded-lg items-center">
      <div className="mr-4">
        <img src={Logo} alt="Blog Logo" />
      </div>
      <div>
        <p className="text-start font-bold text-navbar">{locationName}</p>
        <p className="text-start font-medium text-black">{locationDetail}</p>
        <p className="text-start font-medium text-manadong underline">
          View Map
        </p>
      </div>
    </div>
  );
}

export default LocationCard;
