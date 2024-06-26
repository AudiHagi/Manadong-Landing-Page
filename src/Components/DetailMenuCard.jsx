import React from "react";
import { IoCloseSharp } from "react-icons/io5";

function DetailMenuCard({ image, menuName, menuDetail, menuPrice, onClick }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };
  return (
    <div className="bg-white  rounded-lg relative">
      <div
        onClick={onClick}
        className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 bg-hoverLight rounded-full mt-2 mr-2 cursor-pointer"
      >
        <IoCloseSharp className="text-xl text-black" />
      </div>
      <img
        src={image}
        alt={menuName}
        className="w-80 h-96 object-cover rounded-lg mb-2"
      />
      <div className="p-5 text-start">
        <p className="font-semibold text-xl text-navbar mb-2">{menuName}</p>
        <p className="font-light text-black mb-2">{menuDetail}</p>
        <p className="font-semibold text-manadong">{formatCurrency(menuPrice)}</p>
      </div>
    </div>
  );
}

export default DetailMenuCard;
