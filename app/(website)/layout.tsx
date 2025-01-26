
import MoviePage from "./Movie/MoviePage";
import Navbar from "@/components/Navbar";
import Footter from "@/components/Footter"
import AdminM from "@/app/(admin)/AdminM"
import FootterAM from "@/components/ForAdmin/FootterAM"
import NavbarAM from "@/components/ForAdmin/NavbarAM"
import AdminP from "@/app/(admin)/AdminP"
import MovieNow from "@/app/(website)/Movie/Mnow/MovieNow"
import NavbarMN from "@/components/ForAdmin/NavbarMN"
import Login from "./login/page";
import Buyticket from "@/app/(website)/buyticket/page"
import Register from "@/app/(website)/register/page"

export default function Home() {
  return (
    <>
   <Navbar></Navbar>
    <Buyticket />
     <Footter></Footter>
    </>
  );
}
