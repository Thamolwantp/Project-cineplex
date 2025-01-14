
import MoviePage from "./MoviePage";
import Navbar from "@/components/Navbar";
import Footter from "@/components/Footter"
import AdminM from "@/app/(website)/AdminM"
import FootterAM from "@/components/FootterAM"
import NavbarAM from "@/components/NavbarAM"
import AdminP from "@/app/(website)/AdminP"

export default function Home() {
  return (
    <>
    <NavbarAM></NavbarAM>
      <AdminP/>
      <Footter></Footter>
    </>
  );
}
