import React from "react";
import { Link } from "react-router-dom";

function Button({ link }) {
  return (
    <Link to={link}>
      <button class="bg-white text-black py-2 px-4 border border-blue-500 rounded-lg">
        Order Now
      </button>
    </Link>
  );
}

export default Button;
