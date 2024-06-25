import React from "react";
import Button from "../Components/Button";

function PlatformCard({ image, link }) {
  return (
    <div className="w-full flex flex-col items-center">
      <img src={image} className="w-48 h-56 object-cover rounded-lg mb-2" />
      <Button link={link} />
    </div>
  );
}

export default PlatformCard;
