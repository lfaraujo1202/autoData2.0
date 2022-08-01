import arrowIco from '../../assets/arrow-ico.svg';

import { Container } from "./styles";

interface ProdProps {
    img: string;
    name: string;
}

export function ProdCard({ img, name }: ProdProps) {
    return (
        <Container>
            <div className="Prod">
                <div className="InfoProd">
                    <div className="HeaderProd">
                        <span>{name}</span>
                        <img className="arrow" src={arrowIco} />
                    </div>
                    <img className="pic" src={img} />
                </div>
            </div>
        </Container>
    )
}