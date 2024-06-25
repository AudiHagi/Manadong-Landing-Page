import React from "react";
import { Link } from "react-router-dom";

function OutletCard({ locationName, locationLink }) {
  return (
    <div class="flex justify-between p-4 border border-b-black">
      <p class="text-left text-black font-semibold">{locationName}</p>
      <div class="text-right text-manadong">
        <Link to={locationLink}>
          <a class="text-blue-500 hover:underline">Purchase here</a>
        </Link>
      </div>
    </div>
  );
}

export default OutletCard;
