"use client";

import React from "react";
import MovieCard from "../Movie/Mcard/MovieCard"; // Import MovieCard Component

interface CategoryProps {
  title: string;
  movies: {
    id: number;
    title: string;
    releaseDate: string;
    type: string;
    duration: string;
    posterUrl: string;
  }[];
}

const Category: React.FC<CategoryProps> = ({ title, movies }) => {
  return (
    <div>
      <header className="header">
        <h2 className="categoryTitle">{title}</h2>
        <div className="borderLine"></div>
      </header>
      <div className="movieList">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Category;