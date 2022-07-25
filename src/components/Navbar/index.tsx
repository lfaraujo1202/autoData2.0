import { Container, Content } from './styles';
import logoImg from '../../assets/logo_text_white_1.png';
import icoLogout from '../../assets/ico-logout.png';
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Navbar () {
    const [active, setActive] = useState(false);
    const [activeProfile, setActiveProfile] = useState(false);
    const [avatar, setAvatar] = useState("profile0");

    const navigate = useNavigate();

    const getUserAvatar = async () => {
        var userId = sessionStorage.getItem("userId");
        const res = await axios.get(`user/checkId/${userId}`);
        setAvatar(res.data.user.Img)
    }

    useEffect (() => {
        getUserAvatar()
    })

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
                        <NavLink to={`/home`} className={({ isActive }) => (isActive ? "lactive-class" : "not-active-class")}>Nave</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/dashboard`} className={({ isActive }) => (isActive ? "lactive-class" : "not-active-class")}>Quests</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/watch`} className={({ isActive }) => (isActive ? "lactive-class" : "not-active-class")}>Treinamento</NavLink>
                    </li>

                </ul>
            </div>
            
            <div className="containerProfile">
                <div className={activeProfile ? 'profileArea ativoA' : 'profileArea'} onClick={toggleModeProfile} >
                    <img src={require(`../../assets/${avatar}.png`)} alt="Imagem de usuario"/>
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
