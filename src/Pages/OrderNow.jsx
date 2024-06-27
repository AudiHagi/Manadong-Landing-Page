import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PlatformCard from "../Components/PlatformCard";
import images from "../assets/Images/images";

function OrderNow() {
  const platformItems = [
    { image: images.grabFood, link: "GrabFoodOutlet" },
    { image: images.goFood, link: "/" },
    { image: images.shopeeFood, link: "/" },
  ];
  return (
    <div className="">
      <div className="bg-navbar sm:px-36 px-4 ">
        <Header />
      </div>
      <div className="items-center mt-16">
        <h1 className="font-bold text-navbar text-center sm:text-[24px] text-2xl">
          <span className="border-b-4 border-b-manadong">Ord</span>er Now On :
        </h1>
      </div>
      <div className="mt-16 grid sm:grid-cols-3 sm:gap-0 grid-cols-1 gap-4 items-center justify-center justify-items-center">
        {platformItems.map((platform) => (
          <PlatformCard
            key={platform.image}
            image={platform.image}
            link={platform.link}
          />
        ))}
      </div>
      <div className="bg-navbar footerOrder">
        <Footer />
      </div>
    </div>
  );
}

export default OrderNow;
