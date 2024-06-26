import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BannerImage from "../assets/Images/image 14.png";

function AboutUs() {
  return (
    <div className="min-h-screen">
      <div className="bg-navbar px-36">
        <Header />
      </div>
      <div className="py-8 px-36">
        <div className="mb-4">
          <h1 className="font-bold text-navbar text-start text-2xl">
            <span className="border-b-4 border-b-manadong">Abo</span>ut Us
          </h1>
        </div>
        <div className="bg-white text-black shadow-md rounded-lg mx-auto flex flex-row">
          <div className="w-1/2 flex items-center justify-center">
            <img src={BannerImage} alt="Banner" className="mx-auto" />
          </div>
          <div className="w-1/2 mt-0 pl-6 flex flex-col text-start">
            <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vehicula, nisi vel placerat vehicula, erat felis bibendum libero,
              ut egestas libero urna ut turpis. Sed ultricies, nunc ut lacinia
              facilisis, orci purus vehicula tortor, ac consectetur ligula eros
              ut enim. Vivamus volutpat nulla sit amet magna placerat, vel
              consequat turpis vehicula.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-navbar px-36">
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
