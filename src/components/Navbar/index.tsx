import { Container, Content } from './styles';
import logoImg from '../../assets/logo_text_white_1.png';
import icoLogout from '../../assets/ico-logout.png';
import user from '../../assets/avatar.png';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Navbar () {
    const [active, setActive] = useState(false);
    const [activeProfile, setActiveProfile] = useState(false);
    const navigate = useNavigate();

    const toggleMode = () => {
        setActive(!active)

        if(activeProfile) {
            setActiveProfile(!activeProfile)
        }
    };

    const toggleModeProfile = () => {
        setActiveProfile(!activeProfile)

        if(active) {
            setActive(!active)
        }
    }

    const logout = () => {
        sessionStorage.removeItem("userToken");
        navigate("/login")
    }

    return (
        <Container>
            <Content>
            <div className={active ? 'hamburger iconActive' : 'hamburger'} onClick={toggleMode}>
                <span className="barOne"></span>
                <span className="barTwo"></span>
                <span className="barThree"></span>    
            </div>

            <div className="logo">
                <a href="home">
                    <img src={logoImg} alt="Autodata Dev"/>
                </a>
            </div>
            
            <div className="containerMenu">
                <ul className={active ? 'nav-menu menuOpen': 'nav-menu menuClosed'}>
                    <li className="nav-item">
                        <Link to={`/home`}><button><span className="linkref">Início</span></button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/dashboard`}><button><span className="linkref">Quests</span></button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/watch`}><button><span className="linkref">Aventura</span></button></Link>
                    </li>

                </ul>
            </div>
            
            <div className="containerProfile">
                <div className={activeProfile ? 'profileArea ativoA' : 'profileArea'} onClick={toggleModeProfile} >
                    <img src={user} alt="Imagem de usuario"/>
                </div>

                <div className={activeProfile ? 'menuProfile profileOpen'  : 'closed profileClosed'}>
                    <ul>
                        <button onClick={logout}><img src={icoLogout} alt="Icone de deslogar"/>Sair</button>
                    </ul>
                </div>

            </div>

            </Content>
        </Container>
    )
}
