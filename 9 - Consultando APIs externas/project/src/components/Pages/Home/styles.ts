import styled from 'styled-components'

export const Home = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 138px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 37px;

    width: 100%;
    max-width: 900px;

    @media (min-width: 768px) {
        align-items: stretch;
    }
`

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
        p {
            width: 65%;
        }
    }
`
