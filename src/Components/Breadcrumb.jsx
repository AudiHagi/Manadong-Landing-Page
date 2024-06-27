import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Breadcrumb() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const segments = pathname.split("/");
  let url = "";
  return (
    <div className="flex items-center font-medium text-black border rounded-lg">
      <div
        onClick={() => navigate(-1)}
        className="p-2 flex items-center text-manadong border-r border-black cursor-pointer"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </div>
      <div className="p-2">
        <Link to="/" className="text-navbar">
          Home
        </Link>
        {segments.map((segment, index) => {
          if (!segment) return null;
          url += `/${segment}`;
          const isLast = index === segments.length - 1;
          return (
            <span key={index}>
              &nbsp;/&nbsp;
              <Link to={url} className={isLast ? "text-black" : "text-navbar"}>
                {segment}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumb;
