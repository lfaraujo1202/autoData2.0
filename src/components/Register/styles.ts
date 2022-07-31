import { url } from "inspector";
import styled from "styled-components";

type AvatarProps = {
    avatar: string;
}

export const Container = styled.main<AvatarProps>`
    
    .containerForm {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
        background: var(--dark-purple);       
    }

    .contentInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 3rem 5rem;
        background: var(--dark-purple);
    }

    .avatarArea img {
        padding-left: 10px;
        padding-top: 10px;
        width: 60px;
    
        &:nth-child(${props => props.avatar}) {
            /* box-shadow: 0px 10px 50px 0px #0ff; */
            -webkit-filter: drop-shadow(0px 10px 50px 0px #0ff);
            filter: drop-shadow(2px 2px 5px #0ff);
        }
    }

    .contentInfo img {
        width: 10%;
        cursor: pointer;
        padding-top: 0.5rem;
    }

    .contentText {
       width: 80%;
       margin: 4rem 0;
    }

    .contentText h3 {
        font-size: 3rem;
        font-weight: bold;
    }

    .contentText span {
        font-size: 1rem;
        font-weight: 300;
    }

    button {
        background: transparent;
        color: var(--violet-neon);
        font-weight: bold;
        font-size: 1.1rem;
        font-family: 'Baloo 2', sans-serif;
    }

    .formContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 60%;
        align-items: center;
    }

    .sideFormContainer  {
        border-width: 1px;
        border: double 2px transparent;
        border-radius: 10px;
        background-image: linear-gradient(var(--dark-purple), var(--dark-purple)), radial-gradient(circle at top left, var(--green-neon),var(--violet-neon));
        background-origin: border-box;
        background-clip: content-box, border-box;
        margin: 0 5rem; 
        width: 600px;
    }


    .formContent form {
        display: flex;
        flex-direction: column;
        padding: 3rem 2rem;
    }

    .contentTextForm {
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem;
    }

    .contentTextForm h3 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--green-neon);
    }

    a{
        text-decoration: none;
        color: var(--violet-neon);
    }

    .contentTextForm span {
        font-size: 1rem;
        font-weight: 300;
    }


    form input {
        background: var(--input-bg);
        padding: 0 0.5rem;
        margin-top: 1rem;
        outline: none;
        color: var(--gray);
        font-size: 1rem;
        border-radius: 8px;
    }

    .areaImputOne {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .nameArea, .nickArea {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        width: 100%;
    }

    .error{
        color: var(--violet-neon);
        font-size: 1rem !important;
        font-weight: 100 !important;
        position: relative;
        margin-top: 5px;
    }

    .nameArea span, 
    .nickArea span,
    .emailArea span,
    .passwordArea span,
    .repeatArea span {
        font-weight: bold;
        font-size: 1.1rem;
        font-family: 'Baloo 2', sans-serif;
        width: 100%;
    }

    .nameArea input, .nickArea input, .passwordArea input, .repeatArea input {
        width: 100%;
        height: 50px;
    }

    .emailArea {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
    }

    .emailArea input {
        width: 100%;
        height: 50px;
    }

    input:focus{
        box-shadow: 0px 0px 7px 0px var(--green-neon);
        border: 1px solid var(--green-neon);
    }

    .passwordArea, .repeatArea {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        width: 100%;
    }

    .servicesContent {
        font-family: 'Baloo 2', sans-serif;
        text-align: center;
        font-size: 1rem;
        margin-top: 1rem;
    }

    .servicesContent a {
        color: var(--violet-neon);
        text-decoration: none;
    }

    .areaImputTwo {
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        margin: 0 0.8rem;
        justify-content: space-between;
    }

    .avatarArea {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 0;
        margin-top: 1rem;
        cursor: pointer;
    }

    .avatarArea span {
        font-size: 1rem;
        font-weight: bold;
        font-family: 'Baloo 2', sans-serif;
        color: var(--green-neon);
    }

    .buttonArea input {
        background: var(--green);
        cursor: pointer;
        color: var(--white);
        font-size: 1.2rem;
        font-weight: bold;
        font-family: 'Baloo 2', sans-serif;
        width: 100%;
        height: 50px;
        width: 130px;
    }

    .buttonArea input:hover {
        box-shadow: 0px 0px 12px 0px var(--violet-neon);
        border: 1px solid var(--green-neon);
    }

    /* Responsive */
    @media only screen and (max-width: 620px) {

        .containerForm {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            padding-top: 1.5rem;
        }
        
        .sideFormContainer  {
            border-width: 2px;
            border-style: solid;
            width: 100%;
        }


        .contentInfo {
            padding: 1rem 3rem 3rem;
        }

        .contentText {
            margin: 2rem 0;
        }

        .contentText h3 {
            font-size: 2rem;
        }

        .formContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 90%;
            align-items: center;
        }


        .areaImputOne {
            display: flex;
            flex-direction: column;
        }

        .areaImputTwo {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
        }

        .sideFormContainer {
            margin: 0 2rem;
        }

        .emailArea input {
            width: 100%;
            height: 50px;
        }
        .contentTextForm {
            display: flex;
            flex-direction: column;
            padding: 1rem 2rem;
        }

        .contentTextForm h3 {
            text-align: center;
        }

        .contentTextForm span {
            font-size: 1.3rem;
            font-weight: 300;
            text-align: center;
        }

        .nameArea, .nickArea, .emailArea, .passwordArea, .repeatArea {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .avatarArea {
            display: flex;
            flex-direction: row;
        }


        .servicesContent {
            width: 100%;
            height: auto;
            font-size: 1rem;
        }
    }
    
    @media only screen and (max-width: 1050px) {
        .containerForm {
            display: flex;
            flex-direction: column-reverse;
            justify-content: flex-end;
            align-items: center;
            height: 100vh; 
        }

        .formContent form {
            display: flex;
            flex-direction: column;
            padding: 0rem 2rem;
            
        }

        .contentInfo {
            height: 100%;
            width: 100%;
         }

        .formContent {
            display: flex;   
        }
        .servicesContent {
            width: 100%;
            height: auto;
            font-size: 1rem;
        }
    }
`;