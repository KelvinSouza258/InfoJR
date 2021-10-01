import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
    }

    body {
        font-family: 'Raleway', sans-serif;
    }

    .App {
        min-height: 100vh;

        padding: 24px 39px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 138px;

        position: relative;
    }
`
