import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;900&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        border: none;
    }
    
    body {
        font-family: 'Raleway', 'sans-serif';
    }
`
