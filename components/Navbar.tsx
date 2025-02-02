"use client";

import React, { useState } from "react";
import "./navbar.css";  // Import the CSS file

const Navbar: React.FC = () => {
  const [hover, setHover] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState<string>("TH");
  const [selectedLink, setSelectedLink] = useState<string>("");

  return (
    <nav className="navbar">
      {/* Top bar */}
      <div className="topBar">
        <span className="brand">Vestra Cineplex</span>
        <div className="languageSwitch">
          <a
            href="#"
            className={selectedLang === "TH" ? "selected" : ""}
            onClick={() => setSelectedLang("TH")}
          >
            Thai
          </a>{" "}
          |{" "}
          <a
            href="#"
            className={selectedLang === "EN" ? "selected" : ""}
            onClick={() => setSelectedLang("EN")}
          >
            Eng
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="navLinksContainer">
        <ul className="navLinks">
          {["home", "movies", "cinemas", "promotions", "privacy"].map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setSelectedLink(link)}
                onMouseEnter={() => setHover(link)}
                onMouseLeave={() => setHover(null)}
                className={`navLink ${selectedLink === link || hover === link ? "active" : ""}`}
              >
                {link === "home"
                  ? "หน้าหลัก"
                  : link === "movies"
                  ? "ภาพยนตร์"
                  : link === "cinemas"
                  ? "โรงภาพยนตร์"
                  : link === "promotions"
                  ? "โปรโมชั่น"
                  : "นโยบายข้อมูลส่วนบุคคล"}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1 className="heroTitle">BUY TICKET</h1>
        <div className="verticalLine"></div>
        <div className="ticketSection">
          <select className="input">
            <option value="">ค้นหาภาพยนต์</option>
            <option value="movie1">ภาพยนตร์ 1</option>
            <option value="movie2">ภาพยนตร์ 2</option>
            <option value="movie3">ภาพยนตร์ 3</option>
          </select>
          <span className="atText">AT</span>
          <select className="input">
            <option value="">ค้นหาโรงภาพยนต์</option>
            <option value="cinema1">โรง 1</option>
            <option value="cinema2">โรง 2</option>
            <option value="cinema3">โรง 3</option>
          </select>
          <button
            type="button"
            className={`button ${hover === "showtimes" ? "hovered" : ""}`}
            onMouseOver={() => setHover("showtimes")}
            onMouseOut={() => setHover(null)}
          >
            รอบฉาย
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <img
        src="https://i.imgur.com/WBQ4BUQ_d.png?maxwidth=520&shape=thumb&fidelity=high"
        alt="Cineplex"
        className="heroImage"
      />
    </nav>
  );
};

export default Navbar;
