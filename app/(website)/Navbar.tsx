// app/website/Navbar.tsx
"use client"; // ระบุให้เป็น Client Component

import React, { useState } from "react";
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'; // ใช้ไอคอนจาก react-icons

const Navbar: React.FC = () => {
  const [hover, setHover] = useState<string | null>(null);
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
      color: selectedLink === link || hover === link ? "#FFD700" : "#000",
      fontSize: "20px",
      fontWeight: "bold",
      borderBottom: selectedLink === link || hover === link ? "2px solid #FFD700" : "none",
      position: "relative",
      paddingBottom: "5px",
    }),
  };

  return (
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
  );
};

export default Navbar;
