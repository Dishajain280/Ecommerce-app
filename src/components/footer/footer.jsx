import React from "react";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import "./footer.css";


const footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-name">
            <h2>CLARA FASHIONS</h2>
          </div>
          <div className="footer-socials">
            <FiFacebook className='footer-icon'/>
            <BsInstagram className='footer-icon'/>
            <BsTwitterX className='footer-icon'/>
          </div>
        </div>
        <div className="copy"></div>
      </div>
    </div>
  );
};

export default footer;
