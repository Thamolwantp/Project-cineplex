"use client"; // ระบุให้เป็น Client Component เพื่อให้รองรับ Event Handlers

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [hover, setHover] = useState<string | null>(null); // ใช้ค่าหลายตัวแทนที่ไม่ใช่ boolean
  const [selectedLang, setSelectedLang] = useState<string>("TH");

  const styles = {
    footer: {
      background: "linear-gradient(to top, #D6BB56, #70622D)",
      color: "#fff",
      padding: "80px 20px", // เพิ่มค่า padding เพื่อเพิ่มความสูง
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  return (
    <div>
      {/* Footer */}
      <div style={styles.footer}>
        {/* ลบโลโก้และไอคอนโซเชียลออก */}
      </div>
    </div>
  );
};

export default Navbar;
