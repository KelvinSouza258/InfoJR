import styled from 'styled-components'

export const Form = styled.form<{ btnCenter?: boolean }>`
    width: 100%;
    max-width: 429px;

    display: flex;
    flex-direction: column;
    align-items: ${({ btnCenter = false }) =>
        `${btnCenter ? 'center' : 'stretch'}`};
    gap: 32px;
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
`

export const FormSkeleton = styled.div<{ btnCenter?: boolean }>`
    width: 100%;
    max-width: 429px;
    margin-top: 30px;

    div,
    span {
        animation: skeleton-loading 1s linear infinite alternate;
        border-radius: 4px;
    }

    div {
        position: relative;
        width: 100%;
        height: 3rem;
        margin-bottom: 25px;
    }

    div:last-child {
        width: 100%;
        height: 2.5rem;
    }

    span {
        position: absolute;
        left: 0;
        top: -1.2rem;
        height: 1rem;
        width: 20%;
    }

    @keyframes skeleton-loading {
        0% {
            background-color: hsla(200, 20%, 70%, 1);
        }
        100% {
            background-color: hsla(200, 20%, 95%, 1);
        }
    }

    @media (min-width: 768px) {
        div:last-child {
            max-width: 249px;
            margin: ${({ btnCenter = false }) => `${btnCenter ? 'auto' : '0'}`};
        }
    }
`
