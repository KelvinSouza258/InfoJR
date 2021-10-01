import styled from 'styled-components'

const ErrorPage = styled.div`
    height: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    position: absolute;

    a {
        font-size: 24px;
        color: hsla(210, 84%, 15%, 1);
    }

    a:hover {
        text-decoration: underline;
    }
`

export default ErrorPage
