import React from "react";
import Images from "../assets/Images/images.jsx";
import Button from "./Button";

function Banner() {
  return (
    <div className="mx-auto">
      <div className="flex flex-row">
        <div className="w-1/2 flex items-center justify-center bg-pink text-left">
          <div>
            <p className="text-manadong font-bold text-[42px]">Manadong</p>
            <p className="text-black text-[16px]">
              is a Manado dish with a spicy <br /> and appetizing flavour.
            </p>
            <div className="py-4">
              <p className="text-manadong font-medium text-[16px]">
                #NikmatnyaGaPakeRibet
              </p>
            </div>
            <div className="py-4">
              <Button link="/OrderNow" isLight={true} />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={Images.banner} alt="Blog Logo" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
