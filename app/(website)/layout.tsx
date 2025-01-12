
import MoviePage from "./MoviePage";
import Navbar from "@/components/Navbar";
import Footter from "@/components/Footter"

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
      <MoviePage />
      <Footter></Footter>
    </>
  );
}
