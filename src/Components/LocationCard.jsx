import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/Images/images.jsx";

function LocationCard({ locationName, locationDetail }) {
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    locationDetail
  )}`;
  return (
    <div className="w-full flex flex-row p-4 border border-lightgrey rounded-lg items-center">
      <div className="mr-4">
        <img src={Images.logo} alt="Blog Logo" />
      </div>
      <div>
        <p className="text-start font-bold text-navbar">{locationName}</p>
        <p className="text-start font-medium text-black">{locationDetail}</p>
        <Link to={googleMapsUrl}>
          <p className="text-start font-medium text-manadong underline">
            View Map
          </p>
        </Link>
      </div>
    </div>
  );
}

export default LocationCard;
