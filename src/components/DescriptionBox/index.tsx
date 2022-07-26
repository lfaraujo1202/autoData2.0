import { Container } from "./styles";
import { CourseContext } from '../Card';
import { useContext } from 'react';

export function DescriptionBox() {
    const courseCycle = useContext(CourseContext)

    return (
        <Container>
            <h1>{courseCycle.courseCycle}</h1>
            <h2>Bem vindo ao módulo de treinamento. Adquira experiência para seguir na sua missão!</h2>
        </Container>
    )
}