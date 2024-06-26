import React from "react";
import { Link } from "react-router-dom";

function Button({ link, isLight }) {
  return (
    <Link to={link}>
      <button
        className={`text-[18px] py-1 px-3 rounded-lg border ${
          isLight
            ? "bg-white text-navbar border-navbar hover:bg-hoverLight"
            : "bg-navbar text-white border-navbar hover:bg-hoverDark"
        }`}
      >
        Order Now
      </button>
    </Link>
  );
}

export default Button;
