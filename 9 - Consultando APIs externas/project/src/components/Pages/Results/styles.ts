import styled from 'styled-components'

export const Results = styled.div`
    display: flex;
    flex-direction: column;
    gap: 52px;

    width: 90%;
    max-width: 430px;
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: hsla(0, 0%, 90%, 1);
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`

export const SkeletonResults = styled.div`
    div {
        animation: skeleton-loading 1s linear infinite alternate;
        border-radius: 4px;
    }

    div {
        height: 4rem;
        width: 100%;
        max-width: 330px;
        margin: auto;
        margin-bottom: 20px;
    }

    div:last-child {
        height: 3rem;
        width: 90%;
        max-width: 300px;
    }

    @keyframes skeleton-loading {
        0% {
            background-color: hsla(200, 20%, 70%, 1);
        }
        100% {
            background-color: hsla(200, 20%, 95%, 1);
        }
    }
`
