import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BannerImage from "../assets/Images/image 14.png";
import OutletCard from "../Components/OutletCard";

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
          <div class="md:w-1/2">
            {locationItems.map((location) => (
              <OutletCard
                locationName={location.locationName}
                locationLink={location.locationLink}
              />
            ))}
          </div>
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
