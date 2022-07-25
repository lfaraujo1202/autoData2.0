import bannerImg from '../../assets/banner2.jpg';
import videoStartImg from '../../assets/video-start.png';
import ico1Img from '../../assets/ico1.svg';
import ico2Img from '../../assets/ico2.svg';
import { Container } from "./styles";
import { StartButton } from "./styles";
import { ButtonContainer } from "./styles";
import { ButtonWrapper } from "./styles";
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion'
import { transform } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';

export function InitialPage() {

    const { ref, inView } = useInView({
        rootMargin: '-100px',
    });

    useEffect(() => {
        console.log(inView);
    }, [inView]);

    
    return (
        <>
        <Container banner={bannerImg}>
            
        <motion.div
            // exit={{height: '1000px'}}
            // initial={{height: "50%"}}
            // animate={{height: "100%"}}
        >
       
        <div className="bannerTop">
            <div className="contentBanner">
                <h1>Hello World!</h1>
                <ButtonContainer ref={ref}>
                    <ButtonWrapper>
                        <StartButton className={inView ? '' : 'corner'}>
                            <Link to='/login'>
                                {inView ? (
									<> COMECE JÁ </>
								) : (
									<> START </>
								)}
                            </Link>
                        </StartButton>
                    </ButtonWrapper>
                </ButtonContainer>
            </div>
        </div>

        </motion.div>

        <div className="contentInfo">
            <div className="textDescription">
                <h3>Comece a programar do zero</h3>
                <p>Plataforma para aprendizado de programação através de vídeos rápidos e dinâmicos. Aprenda com uma metodologia gamificada desenvolvida por experts do mercado.</p>
                <img src={videoStartImg} alt="" />
            </div>

            <div className="iconsContent">
                <div className="iconsInfoLeft">
                    <img src={ico1Img} alt="Icone" />
                    <h3>Aprenda React</h3>
                    <p>Framework moderno e utilizado por grandes empresas.</p>
                </div>

                <div className="iconsInfoRight">
                    <img src={ico2Img} alt="Icone" />
                    <h3>Aprenda Back-End</h3>
                    <p>Descubra o poder do Node para criar API's modernas.</p>
                </div>
            </div>

        </div>
        <footer></footer>
    
    </Container>
    </>
    )
}