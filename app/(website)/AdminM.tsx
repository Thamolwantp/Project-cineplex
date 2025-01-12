"use client";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";  // ใช้ไอคอนลบจาก react-icons
import MovieCard from "./MovieCard";

const MoviePage: React.FC = () => {
  const [categories, setCategories] = useState([
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
          posterUrl: "https://thethaiger.com/th/wp-content/uploads/2023/10/%E0%B8%98%E0%B8%B5%E0%B8%AB%E0%B8%A2%E0%B8%94-%E0%B8%93%E0%B8%A7%E0%B8%94%E0%B8%87.jpg",
        },
        {
          id: 3,
          title: "เดอะสเนค",
          releaseDate: "01 FEB 2024",
          type: "Thriller",
          duration: "120 นาที",
          posterUrl: "https://www.tnnthailand.com/static/inline-images/news/1893711045f33bb2716f3a.jpeg",
        },
        {
          id: 4,
          title: "หอแต๋วแตก 2",
          releaseDate: "10 FEB 2024",
          type: "Comedy",
          duration: "100 นาที",
          posterUrl: "https://www.example.com/your-poster-image-url.jpg",
        },
        {
          id: 5,
          title: "คุมเกม",
          releaseDate: "15 FEB 2024",
          type: "Action",
          duration: "110 นาที",
          posterUrl: "https://www.example.com/your-poster-image-url.jpg",
        },
      ],
    },
    {
      title: "กำลังฉาย",
      movies: [
        {
          id: 6,
          title: "Never Let Go",
          releaseDate: "01 FEB 2024",
          type: "Action",
          duration: "120 นาที",
          posterUrl: "https://th.bing.com/th/id/OIP.UO0Uwm4pQLQxdiyDccCSyAHaKe?rs=1&pid=ImgDetMain",
        },
        {
          id: 7,
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
          id: 8,
          title: "The Flash",
          releaseDate: "15 FEB 2024",
          type: "Adventure",
          duration: "120 นาที",
          posterUrl: "https://m.media-amazon.com/images/I/71oXaw7wizL._AC_UF894,1000_QL80_.jpg",
        },
        {
          id: 9,
          title: "Aquaman 2",
          releaseDate: "20 FEB 2024",
          type: "Fantasy",
          duration: "120 นาที",
          posterUrl: "https://th.bing.com/th/id/OIP.Wi8nO-V55oYued9ScomgVwHaKf?rs=1&pid=ImgDetMain",
        },
      ],
    },
  ]);

  const handleDeleteMovie = (categoryTitle: string, movieId: number) => {
    setCategories(prevCategories => {
      return prevCategories.map(category => {
        if (category.title === categoryTitle) {
          return {
            ...category,
            movies: category.movies.filter(movie => movie.id !== movieId),
          };
        }
        return category;
      });
    });
  };

  return (
    <div style={styles.page}>
      {categories.map((category, index) => (
        <div key={index}>
          <header style={styles.header}>
            <h2 style={styles.categoryTitle}>{category.title}</h2>
            <div style={styles.deleteSection}>
              {category.title === "ภาพยนตร์แนะนำ" && (
                <>
                  <div style={styles.border}></div>
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDeleteMovie(category.title, category.movies[0].id)}
                  >
                    <FaTrash size={20} />
                    <span style={styles.deleteText}>เลือกลบภาพยนตร์</span>
                  </button>
                </>
              )}
              {category.title === "กำลังฉาย" && (
                <div style={styles.border}></div>
              )}
              {category.title === "โปรแกรมหน้า" && (
                <div style={styles.border}></div>
              )}
            </div>
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
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  categoryTitle: {
    fontSize: "1.8rem",
    color: "white",
    margin: "0",
    paddingRight: "20px",  // เพิ่มระยะห่างระหว่างข้อความและเส้น
    textAlign: "left",
  },
  deleteSection: {
    display: "flex",
    alignItems: "center",  // ให้ตัวหนังสือและปุ่มลบอยู่ในบรรทัดเดียวกัน
    gap: "10px",  // ระยะห่างระหว่างเส้นและปุ่ม
    justifyContent: "flex-start",  // ให้คอนเทนเนอร์อยู่ทางซ้าย
    flexGrow: 1,  // ขยายพื้นที่ให้เต็มที่
  },
  deleteButton: {
    background: "transparent",
    border: "none",
    color: "#D6BB56",
    cursor: "pointer",
    padding: "5px",
    display: "flex",
    alignItems: "center",
  },
  deleteText: {
    marginLeft: "8px",
    fontSize: "1rem",
  },
  border: {
    flexGrow: 1,  // ให้เส้นขยายเต็มพื้นที่ที่เหลือ
    height: "2px",
    backgroundColor: "#D6BB56",
    margin: "0 10px",  // ขยับเส้นให้ใกล้ข้อความมากขึ้น
  },
  movieList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "20px",
    justifyContent: "flex-start",
    overflowX: "auto",
    paddingBottom: "20px",
  },
};

export default MoviePage;
