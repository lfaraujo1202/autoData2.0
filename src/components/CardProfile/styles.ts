import styled from "styled-components";
import type { CardProps } from "./CardProfile";


export const Container = styled.div<CardProps>`
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: var(--purple);
        background-image: linear-gradient(#1D192D, #342B5A, #642D7E);
        border: 1px solid var(--violet-neon);
        padding: 1rem 3.5rem;
        border-radius: 8px;
        height: 420px;
        width: 90%;
        margin-left: 32px;
        margin: 12px;
    }

    .badges{
        width: 20px;
    }

    .icon {
        width: 120px;
        height: 120px;
    }

    .progress {
        font-weight: 200;
        max-width: 240px;
        font-size: 1rem;
        margin-top: 2rem;
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
        margin-top: 1.4rem;
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 0rem;

    }

    .currentClassXp {
        font-weight: 600;
        font-size: 0.9rem;
        margin-top: 2.4rem;
    }

    .card .currentClassXp strong {
        font-weight: bold;
        font-size: 1rem;
        color: var(--green-neon);
    }

    .card:hover .currentclass {
        margin-top: 1rem;
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
        margin-bottom: 100px;
    }

    h3 {
        font-size: 1.6rem;
        margin: 16px 0;
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
        font-weight: bold;
        position: absolute;
        margin: 7.6rem 0;
    }

    .card:hover h3{
        transition: 0.2s;
        margin-top: 40px;
        position: absolute;
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
        margin-bottom: -15px;
    }

    .card:hover img{
        width: 100px;
        height: 110px; 
        transform-style: preserve-3d;
        transform: translate3d(0px,-60%,0px);
        transition: 0.2s;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    .card:before{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-top: 30px solid transparent;
        border-left: 20px solid transparent;
        margin-left: -115px;
        margin-top: -15px;
    }

    .card:hover::before
    {
        width: 0;
        height: 0;
        border-top: 30px solid var(--background);
        border-left: 20px solid transparent;
        margin-left: -114px;
        margin-top: -18px;
        transition: all 0.2s ease;
    }

    .card:after{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-top: 30px solid transparent;
        border-right: 20px solid transparent;
        margin-right: -115px;
        margin-top: -15px;
    }

    .card:hover::after
    {
        width: 0;
        height: 0;
        border-top: 30px solid var(--background);
        border-right: 20px solid transparent;
        margin-right: -114px;
        margin-top: -18px;
        transition: all 0.2s ease;
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

    #badges {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    #badges img {
        width: 37px;
        height: 37px; 
    }

    .card:hover #myProgress {
        margin: 1.3rem;
    }

    .card:hover .progress {
        margin: 0.1rem;
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