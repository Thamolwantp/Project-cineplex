"use client";


import Navbar from "./navber";  // ใช้เส้นทาง ./Navbar เพราะไฟล์อยู่ในโฟลเดอร์เดียวกัน


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
          posterUrl: "https://thethaiger.com/th/wp-content/uploads/2023/10/%E0%B8%98%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%A2%E0%B8%94-%E0%B8%93%E0%B9%80%E0%B8%94%E0%B8%8A%E0%B8%99%E0%B9%8C.jpg",
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
        {
          id: 6,
          title: "Scream VI",
          releaseDate: "01 FEB 2024",
          type: "Horror",
          duration: "120 นาที",
          posterUrl: "https://th.bing.com/th/id/OIP.qTn8A62_ys9-orZ1tZK85QAAAA?rs=1&pid=ImgDetMain",
        },
      ],
    },
    {
      title: "กำลังฉาย",
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
          posterUrl: "https://thethaiger.com/th/wp-content/uploads/2023/10/%E0%B8%98%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%A2%E0%B8%94-%E0%B8%93%E0%B9%80%E0%B8%94%E0%B8%8A%E0%B8%99%E0%B9%8C.jpg",
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
        {
          id: 6,
          title: "Scream VI",
          releaseDate: "01 FEB 2024",
          type: "Horror",
          duration: "120 นาที",
          posterUrl: "https://th.bing.com/th/id/OIP.qTn8A62_ys9-orZ1tZK85QAAAA?rs=1&pid=ImgDetMain",
        },
      ],
    },
    {
      title: "โปรแกรมหน้า",
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
          posterUrl: "https://thethaiger.com/th/wp-content/uploads/2023/10/%E0%B8%98%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%A2%E0%B8%94-%E0%B8%93%E0%B9%80%E0%B8%94%E0%B8%8A%E0%B8%99%E0%B9%8C.jpg",
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
        {
          id: 6,
          title: "Scream VI",
          releaseDate: "01 FEB 2024",
          type: "Horror",
          duration: "120 นาที",
          posterUrl: "https://th.bing.com/th/id/OIP.qTn8A62_ys9-orZ1tZK85QAAAA?rs=1&pid=ImgDetMain",
        },
      ],
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://via.placeholder.com/200x300?text=No+Image";
  };

  return (
    <div style={styles.page}>
      {categories.map((category, index) => (
        <div key={index}>
          <header style={styles.header}>
            <h2 style={styles.categoryTitle}>{category.title}</h2>
          </header>
          <div style={styles.movieList}>
            {category.movies.map((movie) => (
              <div key={movie.id} style={styles.movieCard}>
                <img
                  src={movie.posterUrl}
                  alt={`Poster of ${movie.title}`}
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
    },
    header: {
      textAlign: "left",
      marginBottom: "10px",
    },
    categoryTitle: {
      fontSize: "1.8rem",
      color: "white",  // Changed from "gold" to "white"
      margin: "20px 0 10px",
    },
    movieList: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    movieCard: {
      backgroundColor: "#2c2c2c",
      borderRadius: "10px",
      overflow: "hidden",
      textAlign: "center",
      width: "200px",
    },
    moviePoster: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
    },
    movieInfo: {
      padding: "10px",
    },
    releaseDate: {
      margin: "5px 0",
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
  

export default MoviePage;
