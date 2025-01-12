// app/website/Footer.tsx
import React from "react";
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
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
      height: "100px",
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
    <div style={styles.footer}>
      <img src="https://i.imgur.com/Vfm7Jyr.png" alt="Vestra Cineplex" style={styles.footerLogo} />
      <div style={styles.socialIcons}>
        <FaFacebook style={styles.socialIcon} />
        <FaYoutube style={styles.socialIcon} />
        <FaTwitter style={styles.socialIcon} />
      </div>
    </div>
  );
};

export default Footer;
