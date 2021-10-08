import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'DM Sans', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        object-fit: cover;
        object-position: 0 center;
    }
`
