import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BannerImage from "../assets/Images/image 14.png";

function GrabFoodOutlet() {
  return (
    <div className="min-h-screen">
      <div className="bg-navbar px-8 md:px-14 lg:px-36">
        <Header />
      </div>
      <div className="py-8 px-8 md:px-14 lg:px-36">
        <div className="mb-4">
          <h1 className="font-bold text-navbar text-start text-2xl">
            <span className="underline decoration-manadong">Gra</span>bFoot
            Outlet
          </h1>
        </div>
        <div class="flex flex-col md:flex-row items-center md:items-start md:space-y-0 md:space-x-6">
          <div class="md:w-1/2"></div>
          <div class="md:w-1/2">
            <img src={BannerImage} alt="Blog Logo" className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="bg-navbar px-8 md:px-14 lg:px-36">
        <Footer />
      </div>
    </div>
  );
}

export default GrabFoodOutlet;
