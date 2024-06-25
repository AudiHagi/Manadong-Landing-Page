import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/Images/images.jsx";

function Footer() {
  return (
    <footer className="bg-gray-800 py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32">
        <div className="w-full flex flex-col items-start">
          <Link to="/">
            <img src={Images.logo} alt="Company Logo" className="w-24 h-24" />
          </Link>
          <p className="text-white text-sm">
            Copyright 2023 PT Bogadong Anugerah Indonesia
          </p>
        </div>
        <div className="w-full flex flex-col text-start">
          <p className="text-white font-medium">Contact Us</p>
          <div className="py-3">
            <p className="text-white font-medium">
              Email :{" "}
              <span className="text-white mt-2 underline">
                Manadong@gmail.com
              </span>
            </p>
            <p className="text-white font-medium">
              Telp :{" "}
              <span className="text-white mt-2 underline">
                +62-811-1009-115{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col text-start">
          <p className="text-white font-medium">Available On</p>
          <div className="py-3">
            <Link to="/GrabFoodOutlet">
              <p className="text-white underline">Grab Food</p>
            </Link>
            <Link to="/">
              <p className="text-white underline">GoFood</p>
            </Link>
            <Link to="/">
              <p className="text-white underline">Shopee Food</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
