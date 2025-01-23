"use client";

import React from "react";
import "./footter.css";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      {/* Footer Logo */}
      <img
        src="https://i.imgur.com/Vfm7Jyr.png"
        alt="Vestra Cineplex"
        className="footerLogo"
      />
      {/* Social Icons */}
      <div className="socialIcons">
        <FaFacebook className="socialIcon" />
        <FaYoutube className="socialIcon" />
        <FaTwitter className="socialIcon" />
      </div>
    </div>
  );
};

export default Footer;
