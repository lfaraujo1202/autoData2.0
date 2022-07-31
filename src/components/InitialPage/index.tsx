import bannerImg from '../../assets/banner2.jpg';
import videoStartImg from '../../assets/video-start.png';
import ProdImg1 from '../../assets/Prod1.png';
import ProdImg2 from '../../assets/Prod2.png';
import ProdImg3 from '../../assets/Prod3.png';
import ProdImg4 from '../../assets/Prod4.png';
import ico1Img from '../../assets/ico1.svg';
import ico2Img from '../../assets/ico2.svg';
import ico3Img from '../../assets/ico3.svg';
import ico4Img from '../../assets/ico4.svg';
import ico5Img from '../../assets/ico5.svg';
import ico6Img from '../../assets/ico6.svg';
import bgBottomImg from '../../assets/banner-bottom.png';
import AnimatedNumber from '@jhonnold/react-animated-number';
import axios from 'axios';

import { Container } from "./styles";
import { StartButton } from "./styles";
import { ButtonContainer } from "./styles";
import { ButtonWrapper } from "./styles";
import { Bubbles } from "./styles";
import { Bubbles2 } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { ProdCard } from '../ProdCard';
import { motion, useAnimation } from 'framer-motion';


export function InitialPage() {

    const [transitionAnim, setTranitionAnim] = useState(false);
    const [badges, setBadges] = useState(0);
    const [users, setUsers] = useState(0);
    const [classes, setClasses] = useState(0);
    const [platinum, setPlatinum] = useState(0);
    const navigate = useNavigate();
    const animationProd = useAnimation();
    const animationInfo = useAnimation();
    const { ref: buttonRef, inView: buttonView } = useInView({ rootMargin: '-100px' });
    const { ref: prodRef, inView: prodInView } = useInView({ threshold: 0.2 });
    const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: countRef, inView: countView } = useInView({ threshold: 0.2 });

    const getInfo1 = async () => {
        const res1 = await axios.get(`/user/getcourseprogress`)
        if (countView) { setPlatinum(res1.data[0].lvlsum) }
        if (!countView) { setPlatinum(0) }
    }

    const getInfo2 = async () => {
        const res2 = await axios.get(`/user/getinfoclasses`)
        if (countView) { setBadges(res2.data[0].sum_val) }
        if (!countView) { setBadges(0) }
    }

    const getInfo3 = async () => {
        const res3 = await axios.get(`/user/getinfousers`)
        if (countView) { setUsers(res3.data.userCounts) }
        if (!countView) { setUsers(0) }
    }

    const getInfo4 = async () => {
        const res4 = await axios.get(`/user/getinfolevels`)
        if (countView) { setClasses(res4.data[0].sum_val) }
        if (!countView) { setClasses(0) }
    }



    useEffect(() => {
        if (prodInView) { animationProd.start({ scale: 1, opacity: 1 }) }
        if (!prodInView) { animationProd.start({ scale: 0, opacity: 0 }) }

        if (infoInView) { animationInfo.start({ x: 0, transition: { type: 'spring', duration: 1, bounce: 0.2 } }) }
        if (!infoInView) { animationInfo.start({ x: '-100vw' }) }

        getInfo1()
        getInfo2()
        getInfo3()
        getInfo4()

    }, [prodInView, countView]);

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
                        <ButtonContainer ref={buttonRef}>
                            <ButtonWrapper>
                                <StartButton className={buttonView ? '' : 'corner'} onClick={transition}>
                                    {buttonView ? (
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
                    <Bubbles2 speed={30} left={2} color1={"#4fc3dc"} color2={"#4fc3dc44"} />
                    <Bubbles2 speed={45} left={4} color1={"#ff2d75"} color2={"#ff2d7544"} />
                    <Bubbles2 speed={25} left={6} color1={"#4fc3dc"} color2={"#4fc3dc44"} />
                    <Bubbles2 speed={48} left={8} color1={"#ff2d75"} color2={"#ff2d7544"} />
                    <Bubbles2 speed={78} left={10} color1={"#4fc3dc"} color2={"#4fc3dc44"} />
                    <Bubbles2 speed={65} left={12} color1={"#ff2d75"} color2={"#ff2d7544"} />
                    <Bubbles2 speed={48} left={14} color1={"#4fc3dc"} color2={"#4fc3dc44"} />
                    <Bubbles2 speed={35} left={16} color1={"#ff2d75"} color2={"#ff2d7544"} />
                    <Bubbles2 speed={48} left={18} color1={"#4fc3dc"} color2={"#4fc3dc44"} />
                    <Bubbles2 speed={36} left={20} color1={"#ff2d75"} color2={"#ff2d7544"} />

                    <Bubbles speed={36} left={80} color1={"#4fc3dc"} color2={"#4fc3dc44"} />
                    <Bubbles speed={48} left={82} color1={"#ff2d75"} color2={"#ff2d7544"} />
                    <Bubbles speed={35} left={84} color1={"#4fc3dc"} color2={"#4fc3dc44"} />
                    <Bubbles speed={48} left={86} color1={"#ff2d75"} color2={"#ff2d7544"} />
                    <Bubbles speed={65} left={88} color1={"#4fc3dc"} color2={"#4fc3dc44"} />
                    <Bubbles speed={78} left={90} color1={"#ff2d75"} color2={"#ff2d7544"} />
                    <Bubbles speed={48} left={92} color1={"#4fc3dc"} color2={"#4fc3dc44"} />
                    <Bubbles speed={25} left={94} color1={"#ff2d75"} color2={"#ff2d7544"} />
                    <Bubbles speed={45} left={96} color1={"#4fc3dc"} color2={"#4fc3dc44"} />
                    <Bubbles speed={30} left={98} color1={"#ff2d75"} color2={"#ff2d7544"} />
                </div>

                <div className="contentInfo">
                    <div className="textDescription">
                        <h3>Comece a programar do zero</h3>
                        <p>Plataforma para aprendizado de programação através de vídeos rápidos e dinâmicos. Aprenda com uma metodologia gamificada desenvolvida por experts do mercado.</p>
                        <img src={videoStartImg} alt="" />
                    </div>
                    <div ref={infoRef}></div>
                    <motion.div animate={animationInfo} className="iconsContent">
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
                    </motion.div>

                </div>

                <div className="boxCardsProd">
                    <h3>Lorem ipsum dolor</h3>
                    <div className="cardProd" ref={prodRef}>
                        <motion.div animate={animationProd}><ProdCard img={ProdImg1} name={"Produtor 1"} /></motion.div>
                        <motion.div animate={animationProd}><ProdCard img={ProdImg2} name={"Produtor 2"} /></motion.div>
                        <motion.div animate={animationProd}><ProdCard img={ProdImg3} name={"Produtor 3"} /></motion.div>
                        <motion.div animate={animationProd}><ProdCard img={ProdImg4} name={"Produtor 4"} /></motion.div>
                    </div>
                </div>

                <div className="boxInfo"
                    style={{
                        backgroundImage: `url(${bgBottomImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed"
                    }}
                >
                    <div className="contentBoxInfo" ref={countRef}>
                        <div className="contentBox">
                            <img src={ico3Img} alt="" />
                            <h3><AnimatedNumber number={badges} duration={900} fps={30} format={Math.round} /></h3>
                            <span>Medalhas</span>
                        </div>

                        <div className="contentBox">
                            <img src={ico4Img} alt="" />
                            <h3><AnimatedNumber number={users} duration={900} fps={30} format={Math.round} /></h3>
                            <span>Recrutas</span>
                        </div>

                        <div className="contentBox">
                            <img src={ico5Img} alt="" />
                            <h3><AnimatedNumber number={classes} duration={900} fps={30} format={Math.round} /></h3>
                            <span>Aulas Realizadas</span>
                        </div>

                        <div className="contentBox">
                            <img src={ico6Img} alt="" />
                            <h3><AnimatedNumber number={platinum} duration={900} fps={30} format={Math.round} /></h3>
                            <span>Certificados</span>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}