import React from "react";
import { Link, useLocation } from "react-router-dom";
import Images from "../assets/Images/images.jsx";

function Header() {
  const menuList = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Eatery",
    },
    {
      id: 3,
      title: "News",
    },
    {
      id: 4,
      title: "About Us",
      link: "/AboutUs",
    },
  ];

  const location = useLocation();

  return (
    <div className="py-2 px-8 flex flex-wrap items-center bg-slate-600 justify-between">
      <div>
        <Link to="/">
          <img src={Images.logo} alt="Manadong Logo" />
        </Link>
      </div>
      <div className="flex gap-4 items-end">
        {menuList.map((menu) => (
          <Link
            key={menu.id}
            to={menu.link}
            className={`px-3 py-2 rounded font-medium hover:text-manadong ${
              location.pathname === menu.link ? "text-manadong" : ""
            }`}
          >
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
