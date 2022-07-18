import styled from 'styled-components';

export const Container = styled.header`
    background: var(--purple);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem 0,5rem;
    display: flex;

    align-items: center;
    justify-content: space-between;

    .nav-item button {
        background: var(--purple);
    }

    .linkref {
    color: var(--white);
    text-decoration: none;
    font-size: 1.1rem;
    transform: scaleX(0);
    transition: all .3s ease-in-out;
    }

    .linkref:hover {
        color: var(--lightpurple);
        font-weight: 900;
    }

    li {
    list-style: none;
    }

    ul {
    margin-left: 90px;
    }

    img{
    padding: 0 0.2rem;
    }

    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 60px;
    }
    
    .profileArea img{
        width: 15%;
        float: right;
        margin-right: 40px;
    }
`;
