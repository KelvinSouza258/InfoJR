import styled from 'styled-components'

export const Footer = styled.footer`
    font-weight: 500;
    font-size: 13px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;

    width: 100%;

    padding: 80px 40px 32px 40px;

    color: #ffffff;
    background-color: #000000;

    @media (min-width: 975px) {
        font-size: 16px;
    }
`

export const Logo = styled.div`
    text-align: center;

    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        margin-top: 46px;
    }
`

export const FooterLinks = styled.div`
    display: flex;
    gap: 30px;

    a {
        color: inherit;
        transition: 0.2s;
    }

    a:hover {
        opacity: 0.7;
    }
`
