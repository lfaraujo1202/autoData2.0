import styled from "styled-components";

export const Container = styled.main`

    .boxCardsProd {
        display: flex;
        flex-direction: column;
        align-content: center;
        max-width: 1000px;
        margin: 0 auto;
        padding: 3rem 2rem;
        
    }

    .boxCardsProd h3 {
        font-family: 'Baloo 2', sans-serif;
        color: var(--green);
        font-weight: bold;
        font-size: 1.6rem;
        text-transform: uppercase;
        text-align: center;
    }

    .cardProd {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .Prod {
        padding: 1rem;
    }

    .Prod span {
        font-size: 1rem;
        font-weight: 300;
    }

    .HeaderProd {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        align-content: center;
        justify-content: space-between;
        max-width: 100%;
    }

    .Prod .infoProd img {
        width: 15px;
    }
    
    .pic{
        margin-top: 1rem;
        width: 100%;
        border-radius: 10px;
    }

    .InfoProd .arrow{
        transition: transform .3s ease-in-out;
    }
    .InfoProd:hover .arrow{
        transform: rotate(180deg);
    }

    .InfoProd:hover .pic{
        
    }
    
    /* Responsive */
    @media only screen and (max-width: 425px) {
        .iconsContent {
            display: flex;
            flex-direction: column;
        }
        .Prod{
            width: auto;
        }

        .Prod .infoProd {
            max-width: 245px;
        }

        .cardProd {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
    }
`;
