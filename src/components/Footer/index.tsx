import imgLogoFooter from "../../assets/logo.png"
import imgGithub from "../../assets/github.png"
import imgLinkedin from "../../assets/linkedin.png"
import imgInsta from "../../assets/instagram.png"
import imgTwitter from "../../assets/twitter.png"

import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <div className="containerIcons">
                <div className="logoFooter">
                    <img src={imgLogoFooter} alt="Symbol" />
                </div>

                <div className="socialMedia">
                    <a href="https://github.com/lfaraujo1202" target="_blank">
                        <img src={imgGithub} alt="Github" />
                    </a>

                    <a href="#" target="_blank">
                        <img src={imgLinkedin} alt="Linkedin" />
                    </a>

                    <a href="#" target="_blank">
                        <img src={imgInsta} alt="Instagram" />
                    </a>

                    <a href="#" target="_blank">
                        <img src={imgTwitter} alt="Twitter" />
                    </a>
                </div>
            </div>

            <div className="copyrightText">
                ©2022 Autodata Dev
            </div>
        </Container>
    )
}