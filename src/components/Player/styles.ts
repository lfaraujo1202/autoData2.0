import styled from "styled-components";

export const Container = styled.main`
    margin: 50px 0 0 0;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    @media (max-width: 468px) {
        img {
            width: 100%;
            height: auto;
        }
    }
`;