import React from "react";

function PromoCard({ image, promoName, promoDetail }) {
  return (
    <div className="p-2 bg-white rounded-lg border hover:border-hoverLight">
      <img
        src={image}
        alt={promoName}
        className="w-full h-60 object-cover rounded-lg mb-4 mx-auto"
      />
      <div className="text-start">
        <p className="font-extrabold text-navbar">{promoName}</p>
        <p className="font-medium text-black">{promoDetail}</p>
      </div>
    </div>
  );
}

export default PromoCard;
