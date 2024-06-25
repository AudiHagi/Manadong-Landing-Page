import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PlatformCard from "../Components/PlatformCard";
import Logo from "../assets/Images/image 22.svg";

function OrderNow() {
  const platformItems = [
    { image: Logo, link: "GrabFoodOutlet" },
    { image: Logo, link: "/" },
    { image: Logo, link: "/" },
  ];
  return (
    <div className="min-h-screen">
      <div className="bg-navbar px-8 md:px-14 lg:px-36">
        <Header />
      </div>
      {platformItems.map((platformItem) => (
        <PlatformCard key={platformItem.name} {...platformItem} />
      ))}
      <div className="bg-navbar px-8 md:px-14 lg:px-36">
        <Footer />
      </div>
    </div>
  );
}

export default OrderNow;
