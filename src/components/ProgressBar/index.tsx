import { Container } from "./styles";
import type { CardProps } from "../Card/Card";

export function ProgressBar({ progress = "70%" }: CardProps) {
    return (
    <Container progress={progress}>
        <span className="progress">Progresso {progress}</span>
            <div id="myProgress">
                <div id="myBar">
                </div>
            </div>
    </Container>
    )
}
