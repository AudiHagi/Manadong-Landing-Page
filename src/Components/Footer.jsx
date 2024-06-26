import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Images from "../assets/Images/images.jsx";

function Footer() {
  return (
    <footer className="bg-navbar py-2 px-4 text-[15px]">
      <div className="grid grid-cols-5">
        <div className="col-span-2 w-fit flex flex-col items-start justify-center">
          <Link to="/">
            <img src={Images.logo} alt="Manadong Logo" className="w-24 h-24" />
          </Link>
          <p className="text-white text-sm mt-2">
            Copyright © 2023 PT Bogadong Anugerah Indonesia
          </p>
        </div>
        <div className="col-span-2 w-fit flex flex-col text-start justify-center">
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
        <div className="w-fit flex flex-col text-start justify-center">
          <p className="text-white font-medium mt-2">Available On</p>
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
      <div className="mt-2 text-2xl flex space-x-4 justify-center">
        <Link to="https://api.whatsapp.com/send?phone=628111009115&text=Hi%2C%20aku%20mau%20pesen%20Manadongnya%20ya!%20yang%20jelas%20%23NikmatnyaGaPakeRibet!!">
          <FaWhatsapp className="text-white" />
        </Link>
        <FaFacebook className="text-white" />
        <Link to="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fmanadong.id%2F&is_from_rle">
          <FaInstagram className="text-white" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
