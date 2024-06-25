import React from "react";
import { Link } from "react-router-dom";
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
      link: "/",
    },
    {
      id: 3,
      title: "News",
      link: "/",
    },
    {
      id: 4,
      title: "About Us",
      link: "AboutUs",
    },
  ];
  return (
    <div className="flex items-center bg-slate-600 justify-between">
      <div>
        <Link to="/">
          <img src={Images.logo} alt="Blog Logo" />
        </Link>
      </div>
      <div className="flex gap-4 items-end">
        {menuList.map((menu) => (
          <div>
            <Link to={menu.link}>
              <h2 className="text-white hover:text-manadong text-[15px] cursor-pointer">
                {menu.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
