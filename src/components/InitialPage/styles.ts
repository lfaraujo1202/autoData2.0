import styled from "styled-components";

interface bannerImg {
    banner?: any;
}

export const Container = styled.main<bannerImg>`
    background: var(--dark-purple);

    .bannerTop {
        background: url(${props => props.banner}) center top fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 500px; 
    }

    .contentBanner {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    h1 {
        color: var(--white);
    }

    button {
        background: var(--blue);
        font-family: 'Baloo 2', sans-serif;
        text-transform: uppercase;
        font-size: 1rem;
        border-radius: 8px;
        height: 46px;
        width: 160px;
    }

    .contentInfo {
        display: flex;
        flex-direction: column;
        align-content: center;
        max-width: 1000px;
        margin: 0 auto;
        padding: 2.2rem 2rem;

        h3 {
            color: var(--green-neon);
            font-weight: bold;
            font-size: 1.7rem;
        }

        p {
            line-height: 1.4;
            font-weight: 300;
        }
    }

    .textDescription {
        padding: 0 2rem;
    }

    .textDescription img {
        width: 100%;
        margin: 2rem 0;
    }

    .iconsContent {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        img {
            width: 15%;
        }
    }

    /* Responsive */
    @media only screen and (max-width: 425px) {
        .iconsContent {
            display: flex;
            flex-direction: column;
        }
    }
`;