"use client"; // ระบุให้เป็น Client Component เพื่อให้รองรับ Event Handlers

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [hover, setHover] = useState<string | null>(null); // ใช้ค่าหลายตัวแทนที่ไม่ใช่ boolean
  const [selectedLang, setSelectedLang] = useState<string>("TH");
  const [selectedLink, setSelectedLink] = useState<string>("");

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#000",
      padding: "10px 20px",
      color: "#fff",
    },
    languageSwitch: (isSelected: boolean) => ({
      textDecoration: "none",
      color: isSelected ? "#FFD700" : "#fff",
      margin: "0 5px",
    }),
    navLinksContainer: {
      backgroundColor: "#fff",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "10px 0",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "30px",
    },
    navLink: (link: string) => ({
      textDecoration: "none",
      color: selectedLink === link || hover === link ? "#FFD700" : "#000", // สีทองเมื่อ selected หรือ hover
      fontSize: "20px",
      fontWeight: "bold",
      borderBottom: selectedLink === link || hover === link ? "2px solid #FFD700" : "none", // ขีดใต้สีทอง
      position: "relative",
      paddingBottom: "5px",
    }),
    hero: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: "20px",
      gap: "70px",
      backgroundColor: "#D6BB56",
    },
    verticalLine: {
      width: "2px",
      height: "60px",
      backgroundColor: "#000",
    },
    ticketSection: {
      display: "flex",
      alignItems: "center",
      gap: "50px",
      backgroundColor: "#D6BB56",
      padding: "10px",
      borderRadius: "5px",
    },
    input: {
      padding: "5px",
      fontSize: "14px",
      color: "black",
      backgroundColor: "#fff",
      width: "150px",
    },
    button: {
      background: hover === "showtimes"
        ? "linear-gradient(to bottom, #b30000, #510C0C)"
        : "linear-gradient(to bottom, #ff0000, #510C0C)",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      padding: "5px 10px",
      fontSize: "14px",
      width: "160px",
      transition: "background 0.3s ease",
    },
    image: {
      width: "100vw",
      height: "auto",
      maxHeight: "500px",
      marginTop: "0",
    },
    footer: {
      background: "linear-gradient(to top, #D6BB56, #70622D)",
      color: "#fff",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    footerLogo: {
      height: "100px", // ปรับขนาดโลโก้ให้ใหญ่ขึ้น
    },
    socialIcons: {
      display: "flex",
      gap: "20px",
    },
    socialIcon: {
      color: "#000",
      fontSize: "30px",
      cursor: "pointer",
    },
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div>
          <span style={{ color: "#fff", fontSize: "24px" }}>Vestra Cineplex</span>
        </div>
        <div>
          <a
            href="#"
            style={styles.languageSwitch(selectedLang === "TH")}
            onClick={() => setSelectedLang("TH")}
          >
            Thai
          </a>{" "}
          |{" "}
          <a
            href="#"
            style={styles.languageSwitch(selectedLang === "EN")}
            onClick={() => setSelectedLang("EN")}
          >
            Eng
          </a>
        </div>
      </nav>

      {/* เมนูหลัก */}
      <div style={styles.navLinksContainer}>
        <ul style={styles.navLinks}>
          <li>
            <a
              href="#"
              onClick={() => setSelectedLink("home")}
              onMouseEnter={() => setHover("home")}
              onMouseLeave={() => setHover(null)} // เมื่อเลิกชี้ ให้ reset hover
              style={styles.navLink("home")}
            >
              หน้าหลัก
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setSelectedLink("movies")}
              onMouseEnter={() => setHover("movies")}
              onMouseLeave={() => setHover(null)} // เมื่อเลิกชี้ ให้ reset hover
              style={styles.navLink("movies")}
            >
              ภาพยนตร์
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setSelectedLink("cinemas")}
              onMouseEnter={() => setHover("cinemas")}
              onMouseLeave={() => setHover(null)} // เมื่อเลิกชี้ ให้ reset hover
              style={styles.navLink("cinemas")}
            >
              โรงภาพยนตร์
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setSelectedLink("promotions")}
              onMouseEnter={() => setHover("promotions")}
              onMouseLeave={() => setHover(null)} // เมื่อเลิกชี้ ให้ reset hover
              style={styles.navLink("promotions")}
            >
              โปรโมชั่น
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setSelectedLink("privacy")}
              onMouseEnter={() => setHover("privacy")}
              onMouseLeave={() => setHover(null)} // เมื่อเลิกชี้ ให้ reset hover
              style={styles.navLink("privacy")}
            >
              นโยบายข้อมูลส่วนบุคคล
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>
        {/* BUY TICKET */}
        <h1 style={{ fontSize: "36px", marginRight: "10px", color: "black" }}>
          BUY TICKET
        </h1>

        {/* เส้นตรงแนวตั้ง */}
        <div style={styles.verticalLine}></div>

        {/* ฟอร์ม */}
        <div style={styles.ticketSection}>
          <select style={styles.input}>
            <option value="">ค้นหาภาพยนต์</option>
            <option value="movie1">ภาพยนตร์ 1</option>
            <option value="movie2">ภาพยนตร์ 2</option>
            <option value="movie3">ภาพยนตร์ 3</option>
          </select>
          <span style={{ color: "#000", fontSize: "24px" }}>AT</span>
          <select style={styles.input}>
            <option value="">ค้นหาโรงภาพยนต์</option>
            <option value="cinema1">โรง 1</option>
            <option value="cinema2">โรง 2</option>
            <option value="cinema3">โรง 3</option>
          </select>
          <button
            type="button"
            style={styles.button}
            onMouseOver={() => setHover("showtimes")}
            onMouseOut={() => setHover(null)} // เมื่อเลิกชี้ ให้ reset hover
          >
            รอบฉาย
          </button>
        </div>
      </div>

      {/* รูปภาพ */}
      <img
        src="https://i.imgur.com/0tHA1Pe.png"
        alt="Cineplex"
        style={styles.image}
      />

      
    </div>
  );
};

export default Navbar;
