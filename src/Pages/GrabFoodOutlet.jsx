import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BannerImage from "../assets/Images/image 14.jpg";
import OutletCard from "../Components/OutletCard";
import Breadcrumb from "../Components/Breadcrumb";

function GrabFoodOutlet() {
  const locationItems = [
    {
      locationName: "Senopati, Petogongan",
      locationLink:
        "https://gofood.co.id/jakarta/restaurant/manadong-petogogan-1b0338e3-af9e-445a-9f83-df91902f2496",
    },
    {
      locationName: "Kebun Jeruk / Tanjung Duren",
      locationLink:
        "https://gofood.co.id/jakarta/restaurant/manadong-kebon-jeruk-d67252b1-aa92-426d-bf8c-764c5f4a1e7b",
    },
    {
      locationName: "Food Plaza PIK",
      locationLink:
        "https://gofood.co.id/jakarta/restaurant/manadong-pantai-indah-kapuk-0a4f9d18-10a5-49d4-bf63-6a19d9b0b002",
    },
    {
      locationName: "Kuningan - D'Kanteen",
      locationLink: "",
    },
    {
      locationName: "Bintaro, Thelapan Square",
      locationLink:
        "https://gofood.co.id/jakarta/restaurant/manadong-tebet-a17e3f29-bf67-4695-88bf-1bcaef01eafa",
    },
    {
      locationName: "Gading Serpong",
      locationLink: "",
    },
    {
      locationName: "Cipete",
      locationLink:
        "https://gofood.co.id/jakarta/restaurant/manadong-greenlake-city-01e918b5-87d8-4132-8f58-d945f8b04b69",
    },
    {
      locationName: "Meteng",
      locationLink:
        "https://gofood.co.id/jakarta/restaurant/manadong-menteng-cc782983-67f5-4371-a62c-db360c38511d",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="bg-navbar sm:px-36 px-4">
        <Header />
      </div>
      <div className="sm:px-36 py-8 px-4">
        <div className="mb-12">
          <Breadcrumb />
        </div>
        <div className="mb-4">
          <h1 className="font-bold text-navbar text-start text-2xl">
            <span className="border-b-4 border-b-manadong">Gra</span>bFoot
            Outlet
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col items-center gap-8">
          <div className="w-full sm:mb-0 sm:w-1/2 mb-4 ">
            {locationItems.map((location) => (
              <OutletCard
                key={location.locationName}
                locationName={location.locationName}
                locationLink={location.locationLink}
              />
            ))}
          </div>
          <div className="sm:w-1/2 w-full ">
            <img src={BannerImage} alt="Banner" className="sm:h-fit h-auto" />
          </div>
        </div>
      </div>
      <div className="bg-navbar sm:px-36 px-4">
        <Footer />
      </div>
    </div>
  );
}

export default GrabFoodOutlet;
