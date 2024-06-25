import React from "react";

function MenuCard({ image, name }) {
  return (
    <div className="w-full flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-48 h-56 object-cover rounded-lg mb-2"
      />
      <p className="text-center font-medium text-black">{name}</p>
    </div>
  );
}

export default MenuCard;
