import React from "react";
import BannerImage from "../assets/Images/image 14.png";
import Button from "./Button";

function Banner() {
  return (
    <div className="mx-auto">
      <div className="flex flex-row">
        <div className="w-1/2 flex items-center justify-center bg-pink text-left">
          <div>
            <p className="text-manadong font-bold">Manadong</p>
            <p className="text-black">
              is a Manado dish with a spicy <br /> and appetizing flavour.
            </p>
            <div className="py-4">
              <p className="text-manadong font-medium">#NikmatnyaGaPakeRibet</p>
            </div>
            <div className="py-4">
              <Button link="/OrderNow" />
            </div>
          </div>
        </div>
        <div className="w-1/2w-full">
          <img src={BannerImage} alt="Blog Logo" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
