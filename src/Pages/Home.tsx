import { ThreeCompGrid } from "../components/ThreeCompGrid";
import { GlobalStytle } from "../styles/global";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <ThreeCompGrid />
      <GlobalStytle />
    </>
  )
}