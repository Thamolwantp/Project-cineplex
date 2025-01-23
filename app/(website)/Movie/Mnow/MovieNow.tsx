"use client"; // บอก Next.js ว่าไฟล์นี้เป็น Client Component

import React, { useState } from "react";
import MovieCardNow from "../Mcard/MovieCardNow";

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  type: string;
  duration: string;
  posterUrl?: string; // ทำให้ optional
}

const MovieNow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"nowShowing" | "upcoming">("nowShowing");

  const nowShowingMovies: Movie[] = [
    {
      id: 1,
      title: "Inception",
      releaseDate: "2010-07-16",
      type: "Action",
      duration: "148 mins",
      posterUrl: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
    },
    {
      id: 2,
      title: "The Matrix",
      releaseDate: "1999-03-31",
      type: "Sci-Fi",
      duration: "136 mins",
      posterUrl: "https://image.tmdb.org/t/p/w500/a4ZDsyN6hAoA55dY3r5H91UR7lD.jpg",
    },
  ];

  const upcomingMovies: Movie[] = [
    {
      id: 3,
      title: "Avatar",
      releaseDate: "2009-12-18",
      type: "Fantasy",
      duration: "162 mins",
      posterUrl: "", // ไม่มีรูปภาพ
    },
    {
      id: 4,
      title: "Interstellar",
      releaseDate: "2014-11-07",
      type: "Adventure",
      duration: "169 mins",
    },
  ];

  const handleTabClick = (tab: "nowShowing" | "upcoming") => {
    setActiveTab(tab);
  };

  return (
    <div style={styles.page}>
      <div style={styles.tabs}>
        <button
          style={activeTab === "nowShowing" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("nowShowing")}
        >
          กำลังฉาย
        </button>
        <button
          style={activeTab === "upcoming" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("upcoming")}
        >
          โปรแกรมหน้า
        </button>
      </div>

      <div style={styles.movieList}>
        {activeTab === "nowShowing" &&
          nowShowingMovies.map((movie) => <MovieCardNow key={movie.id} movie={movie} />)}
        {activeTab === "upcoming" &&
          upcomingMovies.map((movie) => <MovieCardNow key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "linear-gradient(to bottom, #7b0000, #1a1a1a)", // พื้นหลังแบบ Gradient
    color: "white", // สีข้อความ
    padding: "20px",
    fontFamily: "'Arial', sans-serif", // ฟอนต์
    minHeight: "100vh", // ความสูงของหน้าจอ
    display: "flex",
    flexDirection: "column",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 20px",
    fontSize: "33px", // ปรับขนาดตัวหนังสือเป็น 33px
    backgroundColor: "transparent", // ไม่มีพื้นหลัง
    color: "#ccc", // สีตัวหนังสือ
    border: "2px solid transparent", // ไม่มีกรอบ
    cursor: "pointer",
    borderRadius: "5px",
    transition: "color 0.3s", // การเปลี่ยนสีตัวอักษร
  },
  activeTab: {
    padding: "10px 20px",
    fontSize: "33px", // ปรับขนาดตัวหนังสือเป็น 33px
    backgroundColor: "transparent", // ไม่มีพื้นหลัง
    color: "#FFD700", // สีตัวหนังสือเป็นสีเหลือง
    border: "none", // ไม่มีกรอบ
    cursor: "pointer",
    borderRadius: "5px",
  },
  movieList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
};

export default MovieNow;
