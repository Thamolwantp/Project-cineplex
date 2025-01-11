"use client"; // ระบุให้เป็น Client Component เพื่อให้รองรับ Event Handlers

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [hover, setHover] = useState(false);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#000",
      padding: "10px 20px",
      color: "#fff",
    },
    logo: {
      height: "40px",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "20px",
    },
    navLink: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "16px",
    },
    languageSwitch: {
      textDecoration: "none",
      color: "#fff",
      margin: "0 5px",
    },
    hero: {
      position: "relative" as const,
      backgroundImage: "url('/cineplex.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "500px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
    },
    heroContent: {
      textAlign: "center" as const,
      background: "rgba(0, 0, 0, 0.6)",
      padding: "20px",
      borderRadius: "10px",
    },
    ticketSection: {
      h1: {
        fontSize: "36px",
        marginBottom: "20px",
      },
      form: {
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      },
      input: {
        padding: "10px",
        fontSize: "16px",
      },
      button: {
        backgroundColor: hover ? "#dba900" : "#b88a00",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        padding: "10px",
        fontSize: "16px",
      },
    },
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div>
          <img src="/cineplex.png" alt="Vestra Cineplex Logo" style={styles.logo} />
        </div>
        <ul style={styles.navLinks}>
          <li><a href="#" style={styles.navLink}>หน้าหลัก</a></li>
          <li><a href="#" style={styles.navLink}>ภาพยนตร์</a></li>
          <li><a href="#" style={styles.navLink}>โรงภาพยนตร์</a></li>
          <li><a href="#" style={styles.navLink}>โปรโมชั่น</a></li>
          <li><a href="#" style={styles.navLink}>นโยบายข้อมูลส่วนบุคคล</a></li>
        </ul>
        <div>
          <a href="#" style={styles.languageSwitch}>Thai</a> | <a href="#" style={styles.languageSwitch}>Eng</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <div>
            <h1 style={styles.ticketSection.h1}>BUY TICKET</h1>
            <form style={styles.ticketSection.form}>
              <select style={styles.ticketSection.input}>
                <option value="">ค้นหาภาพยนตร์</option>
                <option value="movie1">ภาพยนตร์ 1</option>
                <option value="movie2">ภาพยนตร์ 2</option>
                <option value="movie3">ภาพยนตร์ 3</option>
              </select>
              <select style={styles.ticketSection.input}>
                <option value="">ค้นหาโรงภาพยนตร์</option>
                <option value="cinema1">โรง 1</option>
                <option value="cinema2">โรง 2</option>
                <option value="cinema3">โรง 3</option>
              </select>
              <button
                type="button"
                style={styles.ticketSection.button}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                รอบฉาย
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
