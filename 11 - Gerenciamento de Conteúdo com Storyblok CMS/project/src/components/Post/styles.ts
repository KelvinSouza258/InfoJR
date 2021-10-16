/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components'

export const Posts = styled.main`
    margin-top: 150px;

    header {
        width: 100%;
        max-width: 854px;
        margin: auto;
    }

    header > h1,
    header > p {
        margin: auto;
        padding: 0 20px;
        margin-bottom: 32px;
    }

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-container img {
        object-position: center;
    }

    header > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        text-align: center;
        font-size: 36px;
    }

    header > p {
        text-align: center;
    }

    @media (min-width: 975px) {
        header > h1,
        header > p {
            margin-bottom: 80px;
        }

        header > h1 {
            font-size: 54px;
        }

        header > p {
            font-size: 20px;
        }
    }
`

export const PostInfo = styled.div`
    width: 100%;
    max-width: 854px;
    margin: auto;
    margin-top: 40px;

    display: flex;
    flex-direction: column;

    padding: 0 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

export const Author = styled.div`
    display: flex;

    gap: 16px;

    padding: 20px;

    img {
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    div p {
        text-align: left;
        color: #949494;
        margin: 0;
    }

    div p:first-of-type {
        color: #000000;
        font-weight: 700;
        text-transform: uppercase;
    }
`

export const Social = styled.div`
    display: flex;

    gap: 1px;

    background-color: #eaeaea;
    border: 1px solid #eaeaea;

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;

        background: #ffffff;
        padding: 12px 25px;
        flex-basis: calc(100% / 3);
    }
`

export const PostContent = styled.div`
    max-width: 680px;
    padding: 0 20px;
    margin: 70px auto 132px auto;

    p {
        margin: 0;
        text-align: left;
    }

    @media (min-width: 975px) {
        margin-bottom: 324px;
    }
`
