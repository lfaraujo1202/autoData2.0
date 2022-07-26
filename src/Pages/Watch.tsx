import { GlobalStytle } from "../styles/global";
import { Navbar } from "../components/Navbar";
import { Watch } from "../components/Watch";
import { Player } from "../components/Player";
import { DescriptionBox } from "../components/DescriptionBox";

export function PageWatch() {
  return (
    <>
      <Navbar />
      <DescriptionBox />
      <Watch />
      <Player />
      <GlobalStytle />
    </>
  )
}