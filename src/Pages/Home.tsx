import { GlobalStytle } from "../styles/global";
import { Header } from "../components/Header";
import { ThreeCompGrid } from "../components/ThreeCompGrid";

export function Home() {
    return (
      <>
        <Header />
        <ThreeCompGrid />
        <GlobalStytle />
      </>
    )
  }