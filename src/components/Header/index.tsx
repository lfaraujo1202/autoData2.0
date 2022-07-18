import { Container, Content } from './styles'
import logoImg from '../../assets/logo_text_white_1.png'
import user from '../../assets/user.png'
import { Link } from "react-router-dom";


export function Header () {
    return (
        <Container>
            <Content>
            <div className="logo">
                <a href="home.html">
                    <img src={logoImg} alt="Autodata Dev"/>
                </a>
            </div>

            <div className="containerMenu">
                <ul className="nav-menu">
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
                <div className="profileArea">
                    <img src={user} alt="Imagem de usuario"/>
                </div>

                {/* <div className="menuProfile">
                    <ul>
                        <li><img src={usermini} alt="Icone de usuario"/><a href="">Meu perfil</a></li>
                        <li><img src={icoaulas} alt="Iicone de aulas"/><a href="aulas.html">Aulas</a></li>
                        <li><img src={icologout} alt="Icone de deslogar"/><a href="login.html">Sair</a></li>
                    </ul>
                </div> */}
            </div>
            </Content>
        </Container>
    )
}