import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    background: var(--dark-purple);
    border-top: 1px solid var(--green);

    padding-top: 3rem;

    .containerIcons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .copyrightText {
        width: 100%;
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
        color: var(--text-color);
        font-size: 0.7rem;
        font-weight: 400;
        text-align: center;
        padding-bottom: 3rem;
    }

    .socialMedia img {
        padding-left: 0.4rem;
    }

    @media (max-width: 768px) {
        .containerIcons {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    }
`;
