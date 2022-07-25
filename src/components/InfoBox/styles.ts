import styled from "styled-components";

export const Container = styled.main`
    margin:12px 0 0 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: var(--purple);
    height: 88vh;
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

    @media (max-width: 1500px) {
        height: 52vh;
    }

    @media (max-width: 468px) {
        width: 93%;
        height: auto;
        padding: 2rem 2rem;
        margin-left: 32px;
        margin: 12px;

        h1 {
        font-size: 160%;
         }

        h2 {
        font-size: 120%;
        }

        span {
            font-size: 100%;
        }

        .bar {
            margin: 30px 0;
        }
    }
`;