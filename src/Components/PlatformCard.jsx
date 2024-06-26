import React from "react";
import Button from "../Components/Button";

function PlatformCard({ image, link }) {
  return (
    <div className="w-fit rounded-lg">
      <img
        src={image}
        className="w-40 h-40 object-cover rounded-full overflow-hidden mb-12"
      />
      <Button link={link} isLight={false} />
    </div>
  );
}

export default PlatformCard;
