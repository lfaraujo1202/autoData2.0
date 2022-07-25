import styled from "styled-components";

interface bgHome {
    bghome?: string;
}

export const Container = styled.main<bgHome>`
    width: 100%;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    background: url(${props => props.bghome}) center center fixed;

    .mainContainer{     
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 55%;
    }

    .skeleton{
        background-color: var(--purple);
        margin-left: 12px;
        margin-right: 25px;
        padding-bottom: 52px;
        border-radius: 8px;
        margin-top: 12px;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .skeletonButton {
        cursor: pointer;
        width: 200px;
        height: 40px;
        margin-top: 3.55rem;
        border: none;
        border-radius: 10px;
        background: var(--lightpurple);
        color: var(--white);
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        transition: 0.2s;
        transform: translate;
    }

    .card1{
        margin-bottom: 25px;
        width: auto;
    }

    .card2{
        width: auto;
    }

    .infoBox{
        margin-right: 10px;
    }

    @media (max-width: 1500px) {
        .mainContainer{     
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        width: 55%;

        .asside{
            display: flex;
            flex-direction: row;
        }

        .card1{
            margin-bottom: 25px;
            width: 50%;
        }

        .card2{
            width: auto;
            width: 50%;
        }
    }
    }

    @media (max-width: 1000px) {
        .mainContainer{     
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        width: 85%;

        .asside{
            display: flex;
            flex-direction: row;
        }

        .card1{
            margin-bottom: 25px;
            width: 50%;
        }

        .card2{
            width: auto;
            width: 50%;
        }
    }
    }

    @media (max-width: 750px) {
         .mainContainer{     
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            width: 80%;

            .asside{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .card1{
                margin-bottom: 25px;
                width: 100%;
            }

            .card2{
                width: auto;
                width: 100%;
            }
    }}
`;