import styled from "styled-components";

export const Container = styled.main`
    .containerForm {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
        background: var(--dark-purple); 
    }
    
    a{
        text-decoration: none;
        color: var(--violet-neon);
    }

    
    button {
        background: transparent;
        color: var(--violet-neon);
        font-weight: bold;
        font-size: 1.1rem;
        font-family: 'Baloo 2', sans-serif;
    }

    .contentInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 3rem 5rem;
        background: var(--dark-purple);
    }

    .contentInfo img {
        width: 10%;
        cursor: pointer;
        padding-top: 0.5rem;
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
        width: 360px;
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

    .contentTextForm {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 2rem;
    }

    .contentTextForm h3 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--green-neon);
    }

    form label {
        font-weight: bold;
        font-size: 1.1rem;
        font-family: 'Baloo 2', sans-serif;
        padding: 0.5rem 0;

        display: flex;
        flex-direction: column;
    }

    form input {
        background: var(--input-bg);
        padding: 0 0.5rem;
        margin-top: 1rem;
        outline: none;
        width: 100%;
        height: 50px;
        color: var(--gray);
        font-size: 1rem;
        border-radius: 8px;
    }

    input:focus{
        box-shadow: 0px 0px 7px 0px var(--green-neon);
        border: 1px solid var(--green-neon);
    }

    .formContent form {
        display: flex;
        flex-direction: column;
        transform-style: preserve-3d;
        padding: 1rem 3rem 2rem;;
    }

    .SubmitButton {
        display: flex;
        flex-direction: column;
    }

    a{
        text-decoration: none;
        color: var(--violet-neon);
    }
    
    .SubmitButton input[type="submit"] {
        background: var(--green);
        color: var(--white);
        font-weight: bold;
        font-size: 1rem;
        font-family: 'Baloo 2', sans-serif;
        cursor:pointer;
        text-decoration: none;
    }

    .SubmitButton input[type="submit"]:hover {
        box-shadow: 0px 0px 12px 0px var(--violet-neon);
        border: 1px solid var(--green-neon);
    }

    .SubmitButton button {
        background: transparent;
        color: var(--violet-neon);
        font-weight: bold;
        font-size: 1rem;
        font-family: 'Baloo 2', sans-serif;
        padding: 1rem 0;
    }


    /* Responsive */
    @media only screen and (max-width: 425px) {
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
            margin: 2rem 0;         
        } 
        
        .formContent form {
            padding: 1rem 2rem;
        }

        .temp {
            display: flex;
            flex-direction: column;
        }

        .tempTwo {
            display: flex;
            flex-direction: column;
        }

        .sideFormContainer {
            margin: 0 2rem;
        }

        .emailArea input {
            width: 250px;
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
            flex-direction: column;
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
        }

        .contentInfo{
            height: 50%;
        }

        .formContent {
            display: flex;
            margin: 3rem 0;
            justify-content: center;
            width: 100%;
            height: 50%;
        }

        .formContent form {
            display: flex;
            align-items: center;
            padding: 1rem 2rem;
        }
        .contentTextForm {
            display: flex;
            align-items: center;
        }
        .sideFormContainer  {
            width: 300px;
        }
    }

`;