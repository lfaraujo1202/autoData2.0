import styled from "styled-components";
import type { CardProps } from "../Card/Card";

export const Container = styled.div<CardProps>`

.progress {
        font-weight: 200;
        max-width: 240px;
        font-size: 1rem;
        margin-top: 2rem;
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 0rem;
        display: flex;
        align-items: center;
        justify-content: center;
}

.card:hover #myBar{
        border-radius: 
        20px 
        ${props => props.progress === "100%" ? '20px' : '0px'} 
        ${props => props.progress === "100%" ? '20px' : '0px'} 
        20px;
        animation: myBar 1.5s ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode:both;
    }
    
    #myProgress {
        width: 180px;
        background-color: var(--white);
        border-radius: 20px;
        margin-top:20px;
    }

    #myBar {
        width: ${props => props.progress}; 
        height: 20px;
        background-color: var(--green);
        text-align: center;
        line-height: 30px;
        color: var(--white);
        border-radius: 
        20px 
        ${props => props.progress === "100%" ? '20px' : '0px'} 
        ${props => props.progress === "100%" ? '20px' : '0px'} 
        20px;
        animation: myBar 1.5s ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode:both;
    }

    @keyframes myBar {
    0% { left:0;width: 0; }
    50% { left:0;width: 90%; }
    }
`;  