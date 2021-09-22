import styled from 'styled-components'

export const DashBoard = styled.div`
    width: 100%;
    max-width: 1168px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 44px;
    margin-top: 90px;
    font-size: 24px;
    font-weight: 700;

    .user-info {
        display: flex;
        flex-direction: column;
        gap: 42px;
    }

    @media (min-width: 768px) {
        font-size: 36px;

        .user-info {
            flex-direction: row;
        }
    }

    @media (min-width: 1024px) {
        width: 70%;
    }
`

export const Data = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.bgComponent};
    padding: 24px 36px;
    border-radius: 10px;
    gap: 20px;
    transition: background-color 0.3s ease;

    p:first-of-type {
        font-weight: 400;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.25em;
    }

    p:nth-of-type(2) {
        font-size: 24px;
        font-weight: 700;
    }

    @media (min-width: 769px) {
        p:first-of-type {
            font-size: 16px;
        }

        p:nth-of-type(2) {
            font-size: 36px;
        }
    }
`

export const Gallery = styled.div`
    font-size: 16px;
    font-weight: 600;

    div {
        margin-top: 24px;
        flex-grow: 1;
        min-height: 430px;
        background-color: ${(props) => props.theme.colors.bgComponent};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 400;
        gap: 44px;
        transition: background-color 0.3s ease;
    }

    div p {
        color: #b2b3bf;
        width: 250px;
        text-align: center;
    }

    div button {
        font-family: inherit;
        font-size: 16px;
        cursor: pointer;
        border-radius: 8px;
        color: #ffffff;
        background-color: #0147fa;
        width: 200px;
        height: 56px;
        font-weight: 700;
    }

    div button:hover {
        color: #0147fa;
        background-color: #a6bffd;
    }

    @media (min-width: 768px) {
        font-size: 24px;
    }

    @media (min-width: 1024px) {
        div button {
            width: 320px;
        }
    }
`
