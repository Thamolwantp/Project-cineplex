import React from "react";

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
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://via.placeholder.com/200x300?text=No+Image";
  };

  return (
    <div style={styles.movieCard}>
      <img
        src={movie.posterUrl}
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
    display: "flex",  // ใช้ flexbox
    flexDirection: "column",  // จัดข้อมูลในแนวตั้ง
    justifyContent: "flex-start",  // จัดให้อยู่ทางซ้าย
    alignItems: "flex-start",  // จัดให้อยู่ทางซ้าย
    textAlign: "left",  // ข้อความทั้งหมดจะจัดให้อยู่ทางซ้าย
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

export default MovieCard;
