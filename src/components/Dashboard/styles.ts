import styled from "styled-components";

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.2rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;

    h2{
        color: black;
    }

    @media(max-width: 700px) {
        padding-top: 5rem;
    }

`;

