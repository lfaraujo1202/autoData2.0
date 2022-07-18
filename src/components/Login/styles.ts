import styled from "styled-components";

export const Container = styled.main`
margin-top: 200px;
display: flex;

.SubmitButton{
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

main form input {
    background: #161923;
    width: 300px;
    height: 50px;
    padding: 0 0.5rem;
    margin-top: 1rem;
    outline: none;
    color: #CCCCCC;
    font-size: 1rem;
    border: 1px solid #040B18;
    border-radius: 8px;
}

.labeltitle span{
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

main {
    width: 50vw; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

main h1 {
    color: #ffffff;
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    font-family: 'Baloo 2', cursive;
}

#msgError {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
}

main .social-media {
    display: flex;
    align-content: center;
}

main .social-media a {
    text-decoration: none;
}

main .social-media img {
    width: 36px;
    margin-left: 3rem;
}

main .social-media a:first-child img { 
    margin-left: 0;
}

main .alternative {
    margin-top: 1rem;
}

main .alternative span {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
    color: #ffffff;
    position: relative;
}

/*elementos after e before só funcionam em position absolute*/

main .alternative span::before, main .alternative span::after {
    position: absolute;
    content: '';
    height: 1px;
    width: 100px;
    bottom: 50%; 
    right: 50px;
    background: #00C0A4;
}

main .alternative span::after {
    left: 50px;
}

main form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

main form label {
    display: flex;
    flex-direction: column;
}

main form label span {
    font-size: 1.1rem;
    margin-top: 2rem;
}



main form input[type="submit"] {
    cursor: pointer;
    width: 50%;
    margin-top: 4rem;
    border: none;
    border-radius: 32px;
    background: #B96BC3;
    color: #FFFFFF;
    font-size: 1.1rem;
    transition: all .3s ease-in-out;
}

main form input[type="submit"]:hover {
    background: #00C0A4;
}

section.images {
    width: 50vw;
    display: flex;
    padding: 4rem;
    align-items: flex-end;
    justify-content: flex-end;
}

section.images img {
    width: 90%;
}

section.images .circle {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #eda3f7, #342b5a);
    clip-path: circle(40% at right 80%);
    z-index: -1; 
}

@media only screen and (min-width: 900px) and (max-width: 1200px) {
    section.images img {
        width: 110%;
    }

    section.images .circle {
        clip-path: circle(35% at right 80%);
    }
}

@media only screen and (max-width: 900px) {
    section.images {
        display: none;
        visibility: hidden;
    }

    main {
        width: 100vw;
    }
}

@media only screen and (max-width: 450px) {
    main h1 {
        font-size: 2rem;
    }

    main .alternative span {
        font-size: 0.8rem;
    }

    main form label span, main form input[type="submit"] {
        font-size: 1rem;
    }
}

@media only screen and (max-width: 250px) {
    main h1 {
        font-size: 1rem;
    }

    main .alternative span {
        font-size: 0.5rem;
    }

    main form label span, main form input[type="submit"] {
        font-size: 0.5rem;
    }
}

.container{
    display: inline-block;
    position: relative;
}

#msgError{
    text-align: center;
    color: #ff0000;
    background-color: #ffbbbb;
    padding: 10px;
    border-radius: 4px;
    display: none;
}

.fa-eye{
    position: absolute;
    top: 205px;
    right: 15px;
    cursor: pointer;
    color: #6C63FF80
}


`;