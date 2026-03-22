import React from "react";
import { MdStarBorderPurple500 } from "react-icons/md";
import "./brands.css";

const brands = () => {
  return (
    <div className="brand-container">
      <div className="strip-top">
        <ul>
          <li>
            <MdStarBorderPurple500 />
            Hot Fashion
          </li>
          <li>
            <MdStarBorderPurple500 />
            Unique Designs
          </li>
          <li>
            <MdStarBorderPurple500 />
            Hot Fashion
          </li>
          <li>
            <MdStarBorderPurple500 />
            Unique Designs
          </li>
          <li>
            <MdStarBorderPurple500 />
            Hot Fashion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default brands;
