import bannerImg from '../../assets/banner2.jpg';
import videoStartImg from '../../assets/video-start.png';
import ico1Img from '../../assets/ico1.svg';
import ico2Img from '../../assets/ico2.svg';
import { Container } from "./styles";
import { StartButton } from "./styles";
import { ButtonContainer } from "./styles";
import { ButtonWrapper } from "./styles";
import { Bubbles } from "./styles";
import { Bubbles2 } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';

export function InitialPage() {

    const [transitionAnim, setTranitionAnim] = useState(false);
    const navigate = useNavigate();
    const { ref, inView } = useInView({
        rootMargin: '-100px',
    });

    useEffect(() => {
        console.log(inView);
    }, [inView]);

    const transition = () => {
        setTranitionAnim(true)
        setTimeout(function () {
            navigate("/login");
        }, 750);
    };

    return (
        <>
            <Container banner={bannerImg}>
                <div className={transitionAnim ? 'bannerTopAnim' : 'bannerTop'}>
                    <div className="contentBanner">
                        <h1>Hello World!</h1>
                        <ButtonContainer ref={ref}>
                            <ButtonWrapper>
                                <StartButton className={inView ? '' : 'corner'} onClick={transition}>
                                    {inView ? (
                                        <> COMECE JÁ </>
                                    ) : (
                                        <> START </>
                                    )}
                                </StartButton>
                            </ButtonWrapper>
                        </ButtonContainer>
                    </div>
                </div>

                <div className="Bubbles">
                    <Bubbles2 speed={30} left={2} color1={"#4fc3dc"} color2={"#4fc3dc44"}/>
                    <Bubbles2 speed={45} left={4} color1={"#ff2d75"} color2={"#ff2d7544"}/>
                    <Bubbles2 speed={25} left={6} color1={"#4fc3dc"} color2={"#4fc3dc44"}/>
                    <Bubbles2 speed={48} left={8} color1={"#ff2d75"} color2={"#ff2d7544"}/>
                    <Bubbles2 speed={78} left={10} color1={"#4fc3dc"} color2={"#4fc3dc44"}/>
                    <Bubbles2 speed={65} left={12} color1={"#ff2d75"} color2={"#ff2d7544"}/>
                    <Bubbles2 speed={48} left={14} color1={"#4fc3dc"} color2={"#4fc3dc44"}/>
                    <Bubbles2 speed={35} left={16} color1={"#ff2d75"} color2={"#ff2d7544"}/>
                    <Bubbles2 speed={48} left={18} color1={"#4fc3dc"} color2={"#4fc3dc44"}/>
                    <Bubbles2 speed={36} left={20} color1={"#ff2d75"} color2={"#ff2d7544"}/>

                    <Bubbles speed={36} left={80} color1={"#4fc3dc"} color2={"#4fc3dc44"}/>
                    <Bubbles speed={48} left={82} color1={"#ff2d75"} color2={"#ff2d7544"}/>
                    <Bubbles speed={35} left={84} color1={"#4fc3dc"} color2={"#4fc3dc44"}/>
                    <Bubbles speed={48} left={86} color1={"#ff2d75"} color2={"#ff2d7544"}/>
                    <Bubbles speed={65} left={88} color1={"#4fc3dc"} color2={"#4fc3dc44"}/>
                    <Bubbles speed={78} left={90} color1={"#ff2d75"} color2={"#ff2d7544"}/>
                    <Bubbles speed={48} left={92} color1={"#4fc3dc"} color2={"#4fc3dc44"}/>
                    <Bubbles speed={25} left={94} color1={"#ff2d75"} color2={"#ff2d7544"}/>
                    <Bubbles speed={45} left={96} color1={"#4fc3dc"} color2={"#4fc3dc44"}/>
                    <Bubbles speed={30} left={98} color1={"#ff2d75"} color2={"#ff2d7544"}/>
                </div>

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