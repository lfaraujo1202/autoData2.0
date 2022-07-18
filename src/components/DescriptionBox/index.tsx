import { Container } from "./styles";
import { CourseContext } from '../Card';
import { useContext } from 'react';

export function DescriptionBox() {
    const courseCycle = useContext(CourseContext)

    return (
    <Container>
        <h1>{courseCycle.courseCycle}</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis risus, lobortis dapibus ex sollicitudin ac.</h2>
    </Container>
    )
}