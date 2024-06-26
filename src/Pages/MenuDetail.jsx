import React from "react";
import DetailMenuCard from "../Components/DetailMenuCard.jsx";
import { useParams } from "react-router-dom";
import Images from "../assets/Images/images.jsx";

function MenuDetail() {
  const menuItems = [
    {
      id: 1,
      image: Images.ayamRica,
      name: "Ayam Rica",
      detail: "Ini Description",
      price: 50000,
      isNew: true,
    },
    {
      id: 2,
      image: Images.cumiHitam,
      name: "Cumi Hitam",
      detail: "Ini Description",
      price: 55000,
      isNew: false,
    },
    {
      id: 3,
      image: Images.cakalangTinorasak,
      name: "Cakalang Tinorasak",
      detail: "Ini Description",
      price: 60000,
      isNew: false,
    },
    {
      id: 4,
      image: Images.perkedelJagung,
      name: "Perkedel Jagung",
      detail: "Ini Description",
      price: 65000,
      isNew: false,
    },
    {
      id: 5,
      image: Images.ayamWoku,
      name: "Ayam Woku",
      detail: "Ini Description",
      price: 70000,
      isNew: false,
    },
    {
      id: 6,
      image: Images.laukFrozen,
      name: "Lauk Frozen",
      detail: "Ini Description",
      price: 75000,
      isNew: false,
    },
    {
      id: 7,
      image: Images.cakalangRabe,
      name: "Cakalang Rabe",
      detail: "Ini Description",
      price: 80000,
      isNew: false,
    },
  ];
  const { id } = useParams();
  const menuId = parseInt(id);
  console.log("sadkjfhwequifhbweuif", menuId);
  const menu = menuItems.find((menu) => menu.id === menuId);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <DetailMenuCard
        image={menu.image}
        menuName={menu.name}
        menuDetail={menu.detail}
        menuPrice={menu.price}
      />
    </div>
  );
}

export default MenuDetail;
