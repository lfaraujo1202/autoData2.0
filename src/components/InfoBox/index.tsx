import { Container } from "./styles";
import type { CardProps } from "../CardProfile/CardProfile";

export function InfoBox({classname = "... "} : CardProps) {
    return (
    <Container>
         <h1> Olá, {classname}!</h1>
         <h2> Bem-vindo a nave </h2>
         <span>Prepara-se para uma sequência árdua de missões, pegue o seu dispositivo para elaboração de códigos, sente-se em um lugar confortável e aliste-se na sua próxima missão.</span>
         <div className="bar"> </div>
         <h2> Atualização! </h2>
         <span>As quests de React e Java Script foram atualizadas para o módulo de "aula 5", realize o treinamento para adquirir o conhecimento da sua missão principal.</span>
         
    </Container>
    )
}