
import MoviePage from "./MoviePage";
import Navbar from "@/components/Navbar";
import Footter from "@/components/Footter"
import AdminM from "@/app/(website)/AdminM"
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
      <AdminM />
      <Footter></Footter>
    </>
  );
}
