import styled from "styled-components";
import { motion } from 'framer-motion';

interface bannerImg {
    banner?: any;
}

interface bubbles {
    speed?: number;
    left?: number;
}

export const Container = styled.main<bannerImg>`

    background: var(--dark-purple);
    
    .bannerTop {
        background: url(${props => props.banner}) center top fixed;
        display: block;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 500px;
        transition: height 0.75s ease 0s;
    }

    .bannerTopAnim {
        background: url(${props => props.banner}) center top fixed;
        display: block;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        transition: height 0.75s ease 0s;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .contentBanner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 120px;
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
        padding: 3rem 2rem;

        h3 {
            color: var(--lightpurple);
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
        margin-bottom: 2rem;

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

    @media only screen and (max-width: 768px) {
        .textDescription h3 {
            font-size: 2rem;
        }

        .textDescription p {
            font-size: 1.4rem;
        }

        .iconsContent {
            display: flex;
            flex-direction: column;
        }

        .iconsInfoLeft, .iconsInfoRight {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .iconsInfoLeft h3, .iconsInfoRight h3 {
            font-size: 2rem;
        }

        .iconsInfoLeft p, .iconsInfoRight p {
            font-size: 1.4rem;
            text-align: center;
        }
    }
`;

export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	height: 170px;
`;

export const ButtonWrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	left: 0;
	top: 0;
`;

export const StartButton = styled(motion.button)`
	position: absolute;
	width: 250px;
	margin: 0 auto;
	padding: 15px 20px;
	bottom: calc(100vh - 100px);
	right: 50%;
	transform: translate(50%);
	font-weight: 700;
	font-size: 0.688rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	border-radius: 25px;
	border: none;
	background-color: white;
	color: var(--purple-neon);
	cursor: pointer;
	transition: all 0.4s ease-in;

	&.corner {
		position: fixed;
		bottom: 5rem;
		right: 4rem;
		width: 64px;
		height: 64px;
		padding: 6px;
		background-color: var(--green);
		border-radius: 50%;
	}

	&:hover {
		box-shadow: 0 0 9px 9px var(--background);
		transition: box-shadow 0.3s ease-in;
	}

`

export const Bubbles = styled.main<bubbles>`
    position: absolute;
    left: ${props => props.left}vw;
    width: 30px;
    height: 30px;
    background: #4fc3dc;
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #4fc3dc44,
    0 0 50px #4fc3dc,
    0 0 100px #4fc3dc;
    animation: animate 15s linear infinite;   
    animation-duration: calc(85s / (${props => props.speed}));

    @keyframes animate {
        0% { transform: translateX(-5vw) translateY(-50vh) scale(0.5);}
        30% { transform: translateX(-10vw) translateY(-35vh) scale(0.2);}
        100% { transform: translateX(-20vw) translateY(0vh) scale(0.0);}
    }
`

export const Bubbles2 = styled.main<bubbles>`
    position: absolute;
    left: ${props => props.left}vw;
    width: 30px;
    height: 30px;
    background: #ff2d75;
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #ff2d7544,
    0 0 50px #ff2d75,
    0 0 100px #ff2d75;
    animation: animate2 15s linear infinite;   
    animation-duration: calc(85s / (${props => props.speed}));

    @keyframes animate2 {
        0% { transform: translateX(5vw) translateY(-50vh) scale(0.5);}
        30% { transform: translateX(10vw) translateY(-35vh) scale(0.2);}
        100% { transform: translateX(20vw) translateY(0vh) scale(0.0);}
    }
`