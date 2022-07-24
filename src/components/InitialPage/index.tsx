import bannerImg from '../../assets/banner2.jpg';
import videoStartImg from '../../assets/video-start.png';
import ico1Img from '../../assets/ico1.svg';
import ico2Img from '../../assets/ico2.svg';
import { Container } from "./styles";
import {Link} from 'react-router-dom';

export function InitialPage() {

    return (
    <Container banner={bannerImg}>
        <div className="bannerTop">
            <div className="contentBanner">
                <h1>Lorem Ipsum Dolor</h1>
                <button><Link to='/login'>Comece já</Link></button>
            </div>
        </div>

        <div className="contentInfo">
            <div className="textDescription">
                <h3>Lorem Ipsum</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi impedit dolores facere nihil culpa praesentium! Praesentium, vel veniam. Eius debitis itaque ducimus exercitationem dolore iusto laborum et neque! Corporis.</p>
                <img src={videoStartImg} alt="" />
            </div>

            <div className="iconsContent">
                <div className="iconsInfoLeft">
                    <img src={ico1Img} alt="Icone" />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="iconsInfoRight">
                    <img src={ico2Img} alt="Icone" />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

        </div>

        

        <footer></footer>
    </Container>
    )
}