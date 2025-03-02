"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState<string>("TH");

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
      cursor: "pointer",
    }),
    navLinksContainer: {
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingLeft: "calc(15%)",
      paddingRight: "calc(15%)",
      paddingTop: "20px", // เพิ่มระยะห่างด้านบน
      paddingBottom: "20px", // เพิ่มระยะห่างด้านล่าง
      height: "60px", // เพิ่มความสูงให้พื้นหลังใหญ่ขึ้น
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "30px",
    },
    navLink: {
      textDecoration: "none",
      color: "#000",
      fontSize: "20px",
      fontWeight: "bold",
      padding: "10px 20px",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    hero: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "20px calc(15%)",
      gap: "20px",
      backgroundColor: "#D6BB56",
      position: "relative",
    },
  };

  return (
    <div>
      <header style={styles.navbar}>
        <div>
          <span style={{ color: "#fff", fontSize: "24px" }}>Vestra Cineplex</span>
        </div>
        <nav>
          <a
            href="#"
            aria-label="Switch to Thai language"
            style={styles.languageSwitch(selectedLang === "TH")}
            onClick={() => setSelectedLang("TH")}
          >
            Thai
          </a>{" "}
          |{" "}
          <a
            href="#"
            aria-label="Switch to English language"
            style={styles.languageSwitch(selectedLang === "EN")}
            onClick={() => setSelectedLang("EN")}
          >
            Eng
          </a>
        </nav>
      </header>

      <div style={styles.navLinksContainer}>
        <ul style={styles.navLinks}>
          <li>
            <span style={{ ...styles.navLink, cursor: "default" }}>
              Administrator Management
            </span>
          </li>
        </ul>
      </div>

      <div style={styles.hero}>
        <span style={styles.navLink} onClick={() => router.push("/admin")}>
          จัดการภาพยนตร์
        </span>
        <span style={styles.navLink} onClick={() => router.push("/adminp")}>
          เพิ่มภาพยนตร์
        </span>
      </div>
    </div>
  );
};

export default Navbar;
