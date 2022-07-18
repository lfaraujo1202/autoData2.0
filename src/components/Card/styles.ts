import styled from "styled-components";
import type { CardProps } from "./Card";


export const Container = styled.div<CardProps>`
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: var(--purple);
        padding: 1rem 3.5rem;
        border-radius: 8px;
        height: 420px;
        width: 90%;
        margin-left: 32px;
        margin: 12px;
    }

    .icon {
        width: 120px;
        height: 120px; 
    }

    .progress {
        font-weight: 200;
        max-width: 240px;
        font-size: 1rem;
        margin-top: 4rem;
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: -2rem;

    }

    .card:hover .progress {
        margin-top: 1.95rem;
    }


    .currentclass {
        font-weight: 200;
        max-width: 240px;
        font-size: 1rem;
        margin-top: 2rem;
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 0rem;

    }

    .card:hover .currentclass {
        margin-top: 2rem;
    }

    button {
        cursor: pointer;
        width: 200px;
        height: 40px;
        margin-top: 2.5rem;
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

    button:hover {
        background: var(--green);
    }

    .icon img{
        height: 120px; 
        border-radius: 50%;
        border: 10px solid var(--purple);
        margin-bottom: 100px;
    }

    h3 {
        font-size: 1.3rem;
        margin: 16px 0;
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
        font-weight: 500;
        position: absolute;
        margin-top: 130px;
    }

    .card:hover h3{
        transition: 0.2s;
        margin-top: 40px;
        position: absolute;
    }

    /* Show card name in background */

    .card:hover .icon::after {
        content: '${props => props.classname}';
        position: absolute;
        width: 30px;
        height: 30px;
        font-size: 5rem;
        opacity: 0.03;
        margin-left: -8%;
        margin-top: 20px;
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
    }

    h4 {
        display: none;
    }
    
    .card:hover h4{
        display: block;
        transition: 0.2s;
        font-weight: 400;
        font-size: 0.9rem;
        color: var(--white);
        opacity: 0.89;
        margin-bottom: -3px;
    }

    .card:hover img{
        width: 100px;
        height: 100px; 
        transform-style: preserve-3d;
        transform: translate3d(0px,-60%,0px);
        transition: 0.2s;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-shadow:0px 0px 0px 10px var(--background) inset;
        border: 10px solid var(--background);
    }

    .card:before{
        content: '';
        position: absolute;
        width: 50px;
        height: 50px;
        margin-right: 148px;
        margin-top: -17px;
        background: transparent;
        border-top-right-radius: 22px;
        box-shadow: 0px -22px 0 0 transparent;
        display: block;
        
    }

    .card:hover::before
    {
        display: block;
        transition: all 0.2s ease;
        box-shadow: 0px -22px 0 0 var(--background);
        background: transparent;
    }

    .card:after{
        content: '';
        position: absolute;
        width: 50px;
        height: 50px;
        margin-right: -148px;
        margin-top: -17px;
        background: transparent;
        border-top-left-radius: 22px;
        box-shadow: 0px -22px 0 0 transparent;
        display: block;
    }

    .card:hover::after
    {
        display: block;
        transition: all 0.2s ease;
        box-shadow: 0px -22px 0 0 var(--background);
        background: transparent;
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
        width: 100%;
        background-color: var(--white);
        border-radius: 20px;
        margin-top:50px;
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
`