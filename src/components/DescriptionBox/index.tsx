import { Container } from "./styles";
import { CourseContext } from '../../contexts/CourseContext'
import { useContext } from 'react';

export function DescriptionBox() {
    const course = useContext(CourseContext)

    return (
        <Container>
            <h1>{course.course}</h1>
            <h2>Bem vindo ao módulo de treinamento. Adquira experiência para seguir na sua missão!</h2>
        </Container>
    )
}