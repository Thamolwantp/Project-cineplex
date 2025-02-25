"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  type: string;
  duration: string;
  posterUrl: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter(); // ใช้ useRouter สำหรับการนำทาง

  const handleRedirect = () => {
    router.push(`/buyticket?id=${movie.id}`);
  };

  return (
    <div style={styles.movieCard}>
      <img
        src={movie.posterUrl}
        alt={`โปสเตอร์ของ ${movie.title}`}
        style={styles.moviePoster}
      />
      <div style={styles.movieInfo}>
        <p style={styles.releaseDate}>{movie.releaseDate}</p>
        <h3 style={styles.movieTitle}>{movie.title}</h3>
        <p style={styles.movieType}>{movie.type}</p>
        <p style={styles.movieDuration}>{movie.duration}</p>

        {/* ปุ่มสำหรับไปที่หน้า buyticket */}
        <button
          className="registerButton"
          type="button"
          onClick={handleRedirect} 
          style={styles.button}
        >
          ซื้อตั๋ว
        </button>
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
    textAlign: "center",
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
    alignItems: "center",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#D6BB56",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default MovieCard;
