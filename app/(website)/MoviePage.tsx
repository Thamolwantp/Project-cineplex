"use client";

import React from "react";
import MovieCard from "./MovieCard";

const MoviePage: React.FC = () => {
  const categories = [
    {
      title: "ภาพยนตร์แนะนำ",
      movies: [
        {
          id: 1,
          title: "หลานม่า",
          releaseDate: "01 FEB 2024",
          type: "Drama",
          duration: "120 นาที",
          posterUrl: "https://storage-wp.thaipost.net/2024/02/S__25862218_0.jpg",
        },
        {
          id: 2,
          title: "ธี่หยด",
          releaseDate: "01 FEB 2024",
          type: "Horror",
          duration: "120 นาที",
          posterUrl: "https://thethaiger.com/th/wp-content/uploads/2023/10/%E0%B8%98%E0%B8%B5%E0%B8%AB%E0%B8%A2%E0%B8%94-%E0%B8%93%E0%B9%80%E0%B8%94%E0%B8%8A%E0%B8%99%E0%B8%8D%E0%B8%87.jpg",
        },
        {
          id: 3,
          title: "เดอะสเนค",
          releaseDate: "01 FEB 2024",
          type: "Thriller",
          duration: "120 นาที",
          posterUrl: "https://www.tnnthailand.com/static/inline-images/news/1893711045f33bb2716f3a.jpeg",
        },
      ],
    },
    {
      title: "กำลังฉาย",
      movies: [
        {
          id: 4,
          title: "Never Let Go",
          releaseDate: "01 FEB 2024",
          type: "Action",
          duration: "120 นาที",
          posterUrl: "https://th.bing.com/th/id/OIP.UO0Uwm4pQLQxdiyDccCSyAHaKe?rs=1&pid=ImgDetMain",
        },
        {
          id: 5,
          title: "Avengers: Endgame",
          releaseDate: "01 FEB 2024",
          type: "Sci-Fi",
          duration: "120 นาที",
          posterUrl: "https://cdn.cdon.com/media-dynamic/images/product/movie/dvd/image4/avengers_endgame_dkno-47935816-.jpg",
        },
      ],
    },
    {
      title: "โปรแกรมหน้า",
      movies: [
        {
          id: 6,
          title: "The Flash",
          releaseDate: "15 FEB 2024",
          type: "Adventure",
          duration: "120 นาที",
          posterUrl: "https://m.media-amazon.com/images/I/71oXaw7wizL._AC_UF894,1000_QL80_.jpg",
        },
        {
          id: 7,
          title: "Aquaman 2",
          releaseDate: "20 FEB 2024",
          type: "Fantasy",
          duration: "120 นาที",
          posterUrl: "https://th.bing.com/th/id/OIP.Wi8nO-V55oYued9ScomgVwHaKf?rs=1&pid=ImgDetMain",
        },
      ],
    },
  ];

  return (
    <div style={styles.page}>
      {categories.map((category, index) => (
        <div key={index}>
          <header style={styles.header}>
            <h2 style={styles.categoryTitle}>{category.title}</h2>
            <div style={styles.borderLine}></div> {/* เพิ่มเส้นที่นี่ */}
          </header>
          <div style={styles.movieList}>
            {category.movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  page: {
    background: "linear-gradient(to bottom, #7b0000, #1a1a1a)",
    color: "white",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column", // ใช้การจัดในรูปแบบคอลัมน์
  },
  header: {
    display: "flex",  // ใช้ flexbox เพื่อจัดแนวหัวข้อและเส้นในบรรทัดเดียวกัน
    alignItems: "center",  // จัดให้ทั้งสองอยู่ตรงกลาง
    marginBottom: "10px",
  },
  categoryTitle: {
    fontSize: "1.8rem",
    color: "white",
    margin: "0", // ลบ margin ด้านบนและล่างออก
    paddingRight: "10px", // เว้นระยะห่างระหว่างชื่อหัวข้อกับเส้น
  },
  borderLine: {
    flex: 1, // ให้เส้นยืดเต็มความกว้างที่เหลือ
    borderBottom: "2px solid #D6BB56", // เส้นสีทอง
  },
  movieList: {
    display: "flex",
    flexDirection: "row", // ให้หนังอยู่ในแถว
    flexWrap: "wrap", // เมื่อหนังเยอะให้พับไปที่แถวถัดไป
    gap: "20px",
    justifyContent: "flex-start", // จัดให้หนังอยู่ทางซ้าย
  },
};

export default MoviePage;
