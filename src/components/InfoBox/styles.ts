import styled from "styled-components";

export const Container = styled.main`
    margin:12px 0 0 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: var(--purple);
    width: 752px;
    height: 86vh;
    padding: 60px;

    h1 {
        font-size: 3rem;
    }

    h2{
        font-size: 2.5rem;
        color: var(--lightpurple);
        font-weight: 700;
        font-family: 'Baloo 2';
        font-size: 2rem;
    }

    span {
        font-size: 1rem;
        font-weight: 300;
        font-size: 1rem;
    }

    .bar{
        margin-top: 50px;
        margin-bottom: 50px;
        width: 100%;
        height: 1px;
        border-bottom: 0.5px solid white;
        display: flex;
        justify-content: center;
        opacity: 60%;
    }
`;