"use client"; // ระบุให้เป็น Client Component เพื่อให้รองรับ Event Handlers

import React, { useState } from "react";
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'; // ใช้ไอคอนจาก react-icons

const Navbar: React.FC = () => {
  const [hover, setHover] = useState<string | null>(null); // ใช้ค่าหลายตัวแทนที่ไม่ใช่ boolean
  const [selectedLang, setSelectedLang] = useState<string>("TH");

  const styles = {
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
      {/* Footer */}
      <div style={styles.footer}>
        {/* โลโก้ใน Footer */}
        <img src="https://i.imgur.com/Vfm7Jyr.png" alt="Vestra Cineplex" style={styles.footerLogo} />

        {/* ไอคอนโซเชียล */}
        <div style={styles.socialIcons}>
          <FaFacebook style={styles.socialIcon} />
          <FaYoutube style={styles.socialIcon} />
          <FaTwitter style={styles.socialIcon} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
