import { GlobalStytle } from "../styles/global";
import { Navbar } from "../components/Navbar";
import { ThreeCompGrid } from "../components/ThreeCompGrid";

export function Home() {
    return (
      <>
        <Navbar />
        <ThreeCompGrid />
        <GlobalStytle />
      </>
    )
  }