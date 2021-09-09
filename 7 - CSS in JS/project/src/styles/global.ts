import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
