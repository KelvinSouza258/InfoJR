import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        text-decoration: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Sora', sans-serif;
        font-weight: 400;
    }
`;

export const App = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 38px 35px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    position: relative;
    transition: background-color 0.3s;
`;
