import React from "react";
import { MdOutlineFiberNew } from "react-icons/md";

function MenuCard({ image, name, isNew }) {
  return (
    <div className="w-fit flex flex-col items-center hover:border-2 hover:border-hoverLight rounded-lg">
      <img
        src={image}
        alt={name}
        className="w-fit h-fit object-cover rounded-lg mb-2"
      />
      <div className="flex items-center justify-center">
        <p className="text-center font-medium text-black">{name}</p>
        {isNew && (
          <span className="border border-manadong flex items-center ml-2">
            <MdOutlineFiberNew className="text-xl text-manadong" />
          </span>
        )}
      </div>
    </div>
  );
}

export default MenuCard;
