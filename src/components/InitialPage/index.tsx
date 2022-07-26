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
                    <Bubbles speed={45} left={2} />
                    <Bubbles2 speed={64} left={5} />
                    <Bubbles speed={30} left={8} />
                    <Bubbles2 speed={80} left={16} />
                    <Bubbles speed={54} left={25} />
                    <Bubbles2 speed={81} left={35} />
                    <Bubbles speed={54} left={42} />
                    <Bubbles2 speed={23} left={46} />
                    <Bubbles speed={20} left={52} />
                    <Bubbles2 speed={64} left={57} />
                    <Bubbles speed={54} left={64} />
                    <Bubbles2 speed={77} left={73} />
                    <Bubbles speed={86} left={86} />
                    <Bubbles2 speed={45} left={89} />
                    <Bubbles speed={43} left={93} />
                    <Bubbles2 speed={34} left={97} />
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