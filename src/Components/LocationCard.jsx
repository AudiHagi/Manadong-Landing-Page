import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/Images/images.jsx";
import Clamp from "react-multiline-clamp";
import { IoMdPaperPlane } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";

function LocationCard({ locationName, locationDetail }) {
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    locationDetail
  )}`;
  return (
    <div className="w-full flex flex-row p-4 border border-lightGrey rounded-lg items-center">
      <div className="w-12 h-12 flex items-center justify-center bg-manadongLight mr-4 rounded-md">
        <MdOutlinePlace className="text-2xl text-manadong" />
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-start font-bold text-navbar text-[20px]">
          {locationName}
        </p>
        <Clamp maxLines={2}>
          <p className="text-start font-light text-black text-[16px] mt-2">
            {locationDetail}
          </p>
        </Clamp>
        <Link to={googleMapsUrl} className="flex items-center mt-2">
          <div className="border border-b-manadong flex items-center">
            <IoMdPaperPlane className="text-xl text-manadong" />
            <p className="text-start font-medium text-manadong ml-2">
              View Map
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LocationCard;
