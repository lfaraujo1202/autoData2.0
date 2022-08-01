import { Container } from "./styles";
import { useState, useEffect } from "react";
import { VerticalLinearStepper } from "../VerticalLinearStepper";
import { HorizontalLinearStepper } from "../HorizontalLinearStepper";

export function Watch() {

  const [isMobile, setMobile] = useState(window.innerWidth < 1020);

  const updateMedia = () => { setMobile(window.innerWidth < 1020) };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  return (
    <Container>
      {isMobile ? (
        <VerticalLinearStepper />
      ) : (
        <HorizontalLinearStepper />
      )}
    </Container>
  )
}