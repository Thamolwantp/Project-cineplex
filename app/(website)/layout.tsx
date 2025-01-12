
import MoviePage from "./MoviePage";
import Navbar from "@/components/Navbar";
import Footter from "@/components/Footter"
import AdminM from "@/app/(website)/AdminM"
import FootterAM from "@/components/FootterAM"
import NavbarAM from "@/components/NavbarAM"
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
      <MoviePage/>
      <Footter></Footter>
    </>
  );
}
