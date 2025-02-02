"use client"; // บอกให้ Next.js รู้ว่านี่คือ Client Component

import React from "react";

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  type: string;
  duration: string;
  posterUrl?: string; // ทำให้ optional
}

interface MovieCardNowProps {
  movie?: Movie; // ทำให้เป็น optional เผื่อว่า prop อาจเป็น undefined
}

const MovieCardNow: React.FC<MovieCardNowProps> = ({ movie }) => {
  if (!movie) {
    // แสดงข้อความเมื่อไม่มีข้อมูล movie
    return <div>ไม่พบข้อมูลภาพยนตร์</div>;
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://via.placeholder.com/200x300?text=No+Image";
  };

  return (
    <div style={styles.movieCard}>
      <img
        src={movie.posterUrl || "https://via.placeholder.com/200x300?text=No+Image"} // ใช้ fallback image
        alt={`โปสเตอร์ของ ${movie.title}`}
        style={styles.moviePoster}
        onError={handleImageError}
      />
      <div style={styles.movieInfo}>
        <p style={styles.releaseDate}>{movie.releaseDate}</p>
        <h3 style={styles.movieTitle}>{movie.title}</h3>
        <p style={styles.movieType}>{movie.type}</p>
        <p style={styles.movieDuration}>{movie.duration}</p>
      </div>
    </div>
  );
};

const styles = {
  movieCard: {
    backgroundColor: "#2c2c2c",
    borderRadius: "10px",
    overflow: "hidden",
    width: "200px",
    margin: "10px",
  },
  moviePoster: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
  movieInfo: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
  },
  releaseDate: {
    margin: "0",
    fontSize: "0.9rem",
    color: "#ccc",
  },
  movieTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "5px 0",
    color: "white",
  },
  movieType: {
    margin: "5px 0",
    fontSize: "0.9rem",
    color: "#ccc",
  },
  movieDuration: {
    margin: "5px 0",
    fontSize: "0.9rem",
    color: "#ccc",
  },
};

export default MovieCardNow;
