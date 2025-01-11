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
      display: "flex", // ใช้ flexbox
      flexDirection: "row", // จัดให้เนื้อหาภายในอยู่ในแถวเดียวกัน
      justifyContent: "center", // จัดให้อยู่ตรงกลาง
      alignItems: "center", // จัดให้อยู่กลางในแนวตั้ง
      width: "100%",
      padding: "20px", // เพิ่มช่องว่างภายใน
      gap: "10px", // เพิ่มระยะห่างเล็กน้อยระหว่างแต่ละส่วน
      backgroundColor: "#D6BB56", // กำหนดสีพื้นหลังเป็น #D6BB56
    },
    ticketSection: {
      display: "flex",
      alignItems: "center", // ให้ทุกอย่างอยู่ในแถวเดียวกัน
      gap: "10px", // เพิ่มระยะห่างเล็กน้อยระหว่างองค์ประกอบ
      backgroundColor: "#D6BB56", // กำหนดสีพื้นหลังเป็น #D6BB56
      padding: "10px", // เพิ่มระยะห่างภายใน
      borderRadius: "5px", // เพิ่มมุมโค้งให้สวยงาม
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      color: "#fff", // สีข้อความเป็นสีขาว
      backgroundColor: "#333", // สีพื้นหลังของ select
      margin: "0", // ไม่มีระยะห่างระหว่าง select
    },
    button: {
      backgroundColor: hover ? "#dba900" : "#b88a00",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      padding: "10px",
      fontSize: "16px",
      margin: "0", // ไม่มีระยะห่างระหว่างปุ่ม
    },
    image: {
      width: "100vw", // ให้ภาพยาวเต็มหน้าจอ
      height: "auto", // ให้ความสูงปรับตามอัตราส่วนของภาพ
      maxHeight: "500px", // กำหนดความสูงสูงสุดให้กับรูปภาพ
      marginTop: "20px", // ระยะห่างระหว่างฟอร์มและรูปภาพ
    },
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div>
          {/* โลโก้หรือข้อความแทนรูปภาพ */}
          <span style={{ color: "#fff", fontSize: "24px" }}>Vestra Cineplex</span>
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

      {/* Hero Section (Buy Ticket) */}
      <div style={styles.hero}>
        {/* ส่วนของ BUY TICKET */}
        <h1 style={{ fontSize: "36px", marginRight: "10px", color: "black" }}>BUY TICKET</h1>
        
        {/* ฟอร์มการเลือกภาพยนตร์และโรงภาพยนตร์ */}
        <div style={styles.ticketSection}>
          <select style={styles.input}>
            <option value="">ภาพยนตร์ 2</option>
            <option value="movie1">ภาพยนตร์ 1</option>
            <option value="movie2">ภาพยนตร์ 2</option>
            <option value="movie3">ภาพยนตร์ 3</option>
          </select>
          <select style={styles.input}>
            <option value="">โรง 2</option>
            <option value="cinema1">โรง 1</option>
            <option value="cinema2">โรง 2</option>
            <option value="cinema3">โรง 3</option>
          </select>
          <button
            type="button"
            style={styles.button}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            รอบฉาย
          </button>
        </div>
      </div>

      {/* รูปภาพจาก Imgur */}
      <img
        src="https://i.imgur.com/0tHA1Pe.png" // ใช้ลิงก์ของภาพจาก Imgur
        alt="Cineplex"
        style={styles.image}
      />
    </div>
  );
};

export default Navbar;
