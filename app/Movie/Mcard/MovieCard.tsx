"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface MovieProps {
  id: number;
  title: string;
  releaseDate: string;
  type: string;
  duration: string;
  posterUrl: string;
}

interface MovieCardProps {
  movie: MovieProps;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>ประเภท: {movie.type}</p>
      <p>ความยาว: {movie.duration}</p>
      <p>ฉายวันแรก: {movie.releaseDate}</p>
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
