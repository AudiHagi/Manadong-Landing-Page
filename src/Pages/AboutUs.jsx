import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BannerImage from "../assets/Images/image 14.png";

function AboutUs() {
  return (
    <div className="min-h-screen">
      <div className="bg-navbar px-8 md:px-14 lg:px-36">
        <Header />
      </div>
      <div className="py-8 px-8 md:px-14 lg:px-36">
        <div className="mb-4">
          <h1 className="font-bold text-navbar text-start text-2xl">
            <span className="underline decoration-manadong">Abo</span>ut Us
          </h1>
        </div>
        <div class="bg-white text-black shadow-md rounded-lg mx-auto flex flex-col md:flex-row">
          <div class="md:w-1/2 flex items-center justify-center">
            <img src={BannerImage} alt="Blog Logo" className="mx-auto" />
          </div>
          <div class="md:w-1/2 mt-6 md:mt-0 md:pl-6 flex flex-col text-start">
            <h2 class="text-3xl font-bold mb-4">About Our Company</h2>
            <p class="text-gray-700 text-base">
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
      <div className="bg-navbar px-8 md:px-14 lg:px-36">
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
