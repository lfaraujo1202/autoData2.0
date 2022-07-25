import styled from 'styled-components';

export const Container = styled.div`
    background: var(--purple);
`;

export const Content = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem 0.5rem;
    background: var(--purple);

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding: 0 24px;
    z-index: 99;

    @media(max-width: 700px) {
        position: fixed;
        width: 100%;
        padding: 0 1rem 0.5rem;
    }

    .nav-menu span {
        font-family: 'Baloo 2', sans-serif;
    }

    .nav-menu .logo {
        position: absolute;
        width: 295px;
        top: 8px;
        left: 5%;
        color: var(--white);
    }

    .navbar .logo img {
        padding: 0 0.2rem;
    }


    .nav-item button {
        background: var(--purple);
    }

    .lactive-class {
        color: var(--lightpurple);
        text-decoration: none;
        font-size: 1.1rem;
        transform: scaleX(0);
        transition: all .3s ease-in-out;
        font-weight: 900;
    }

    .lactive-class:hover {
        color: var(--lightpurple);
        font-weight: 900;
    }

    .not-active-class {
        color: var(--white);
        text-decoration: none;
        font-size: 1.1rem;
        transform: scaleX(0);
        transition: all .3s ease-in-out;
    }

    .not-active-class:hover {
        color: var(--lightpurple);
        font-weight: 900;
    }

    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 60px;
    }

    .nav-menu li {
        list-style: none;
        font-family: 'Baloo 2', sans-serif;
    }


    .navBranding {
        font-size: 2rem;
    }

    .navLink {
        transition: 0.7s ease;
    }

    .navLink:hover {
        color: var(--white);
        font-weight: 800;
        transition: all .3s ease-in-out;
    }


    .hamburger {
        display: none;
        cursor: pointer;
    }

    .barOne, .barTwo, .barThree  {
        display: block;
        width: 25px;
        height: 3px;
        margin: 0.40rem auto;
        border-radius: 2px;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    .barOne, .barThree {
        background: var(--blue);
    }

    .barTwo {
        background: var(--green);
        width: 25px;
        margin-left: -0.59rem;
    }

    @media(max-width: 700px) {
        .logo {
            display: none;
        }

        .hamburger {
            display: block;
        }

        .hamburger.iconActive .barTwo:nth-child(2) {
            opacity: 0;
        }

        .hamburger.iconActive .barOne:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.iconActive .barThree:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }

        .nav-menu {
            position: fixed;
            left: -150%;
            top: 46px;
            gap: 0;
            flex-direction: column;
            background: var(--purple);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            padding-right: 0!important;
            height: 100%;
            opacity: 98%;
            z-index: 10;
            border-top: 1px solid var(--green);
        }
 
        .nav-item {
            margin: 16px 0;
        }

        .nav-menu li a {
            font-size: 1.5rem;
        }

        .nav-menu.menuOpen {
            left: 0;
        }

        .navbar .logoMobile{
            display: block;
        }
        .nav-menu {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 1rem 2rem;
        }

        .nav-menu .nav-item span {
            font-size: 2.0rem;
            font-family: 'Baloo 2', sans-serif;
        }
        
    }
        /*Menu End*/

    /*Profile menu*/
    .containerProfile {
        position: relative;
        transition: 0.5s;
    }

    .containerProfile .profileArea {
        width: 37px;
        height: 42px;
        overflow: hidden;
        cursor: pointer;
    }

    .containerProfile .profileArea img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .containerProfile .menuProfile {
        position: absolute;
        top: 120px;
        right: 376px;
        padding: 10px 20px;
        background: var(--purple);
        width: 200px;
        box-sizing: border-box;
        border-radius: 8px;
        box-shadow: 0px 0px 6px 2px #342b5a;
        /* border: 1px solid var(--green-neon); */
        visibility: hidden;
        opacity: 0;
    }

    .containerProfile .menuProfile.profileOpen {
        position: absolute; /* relative */
        top: 60px;
        left: -143px;
        right: 0;
        visibility: visible;
        opacity: 1;
        z-index: 10;
    }

    .containerProfile .closed.profileClosed {
        position: absolute;
        top: 120px;
        right: 376px;
        padding: 10px 20px;
        visibility: hidden;
        opacity: 0;
    }

    .containerProfile .menuProfile::before {
        content: '';
        position: absolute;
        top: -5px;
        right: 28px;
        width: 20px;
        height: 20px;
        background: var(--purple);
        transform: rotate(45deg);
    }

    .containerProfile .menuProfile ul {
        list-style: none;
        padding: 0.5rem 0;
    }

    .containerProfile .menuProfile ul img {
        max-width: 20px;
        margin-right: 10px;
        transition: 0.5s;
    }

    .containerProfile .menuProfile ul button {
        background: transparent;
        display: inline-block;
        text-decoration: none;
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.1rem;
        color: var(--white);
        font-weight: 400;
        
        display: flex;
        align-items: center;
    }

    .containerProfile .menuProfile ul button:hover {
        color: var(--lightpurple);
    }

    @media only screen and (max-width: 900px) {
        .containerProfile .menuProfile ul {
            list-style: none;
            font-family: 'Baloo 2', sans-serif;
            font-size: 1.6rem;
            padding: 0.5rem 0;
        }
    }
`;
