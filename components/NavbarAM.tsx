"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>("TH");
  const [selectedAction, setSelectedAction] = useState<string>("manage");

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
      paddingLeft: "calc(15%)",
      paddingRight: "calc(15%)",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "30px",
    },
    navLink: (isSelected: boolean) => ({
      textDecoration: "none",
      color: isSelected ? "#fff" : "#000",
      fontSize: "20px",
      fontWeight: "bold",
      borderBottom: "none",
      position: "relative",
      paddingBottom: "5px",
      cursor: "pointer",
      display: "inline-block",
      padding: "10px 20px",
      transition: "color 0.3s ease",
    }),
    hero: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "20px calc(15%)", // Adjust the padding here if needed
      gap: "20px",
      backgroundColor: "#D6BB56", // Golden background
      position: "relative",
      marginBottom: "0", // Ensure no space at the bottom
    },
    imageWrapper: {
      position: "relative",
      width: "100%",
      height: "auto",
    },
    image: {
      width: "100%",
      height: "auto",
      maxHeight: "500px",
    },
    textOverlay: {
      position: "absolute",
      bottom: "10px", // From the bottom of the image
      left: "10px",   // From the left of the image
      color: "#fff",
      fontSize: "36px",
      fontWeight: "bold",
      zIndex: 1,
    },
    imageSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000", // Black background for the image section
      padding: "0", // Remove padding to eliminate extra space
      marginTop: "0", // No margin between sections
    },
    imageTextWrapper: {
      position: "relative",
      width: "100%",
    },
    actionContainer: {
      display: "flex",
      gap: "30px",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#fff",
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
            <span
              style={{
                ...styles.navLink(false),
                color: "#000",
                cursor: "default",
              }}
            >
              Administrator Management
            </span>
          </li>
        </ul>
      </div>

      <div style={styles.hero}>
        <div style={styles.actionContainer}>
          <span
            onClick={() => setSelectedAction("manage")}
            style={styles.navLink(selectedAction === "manage")}
          >
            จัดการภาพยนตร์
          </span>
          <span
            onClick={() => setSelectedAction("add")}
            style={styles.navLink(selectedAction === "add")}
          >
            เพิ่มภาพยนตร์
          </span>
        </div>
      </div>

      {/* รูปภาพแยกออกจาก hero */}
      <div style={styles.imageSection}>
        <div style={styles.imageTextWrapper}>
          <img
            src="https://i.imgur.com/0tHA1Pe.png"
            alt="Cineplex"
            style={styles.image}
          />
          <div style={styles.textOverlay}>VESTRA CINEPLEX</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
