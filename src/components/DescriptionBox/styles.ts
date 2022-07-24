import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-right: 50px;
    flex-direction: column;
    
    h1 {
        display: flex;
        justify-content: center;
    }

    h2 {
        margin: 20px 0 0 0;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 468px) {
        h2 {
            padding: 0 2rem;
        }
    }
`;