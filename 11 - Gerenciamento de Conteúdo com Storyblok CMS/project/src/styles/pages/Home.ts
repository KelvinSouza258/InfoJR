import styled from 'styled-components'

export const Home = styled.main`
    width: 100%;
    max-width: 854px;

    margin: auto;
    margin-top: 100px;
    margin-bottom: 132px;

    @media (min-width: 975px) {
        margin-top: 170px;
        margin-bottom: 324px;

        .section-title {
            font-size: 44px;
        }
    }

    .section-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 24px;

        text-align: center;
        margin-bottom: 64px;
    }
`

export const FirstPost = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 32px;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 36px;
        text-align: center;
        padding: 0 20px;
    }

    p {
        font-weight: 400;
        padding: 0 20px;
        text-align: center;
    }

    @media (min-width: 975px) {
        gap: 46px;

        h2 {
            font-size: 54px;
        }

        p {
            font-size: 20px;
            width: 75%;
        }
    }
`

export const Divider = styled.div`
    width: 90%;
    height: 2px;

    max-width: 640px;

    margin: 67px auto 89px auto;

    background-color: #000000;
`

export const PostsSection = styled.div`
    display: grid;
    grid-template-columns: 304px;
    justify-content: center;
    gap: 32px;

    @media (min-width: 768px) {
        grid-template-columns: 304px 304px;
    }
`

export const Post = styled.a`
    flex-basis: 304px;

    :nth-of-type(1) img {
        object-position: 0 top;
    }

    :nth-of-type(4) img {
        object-position: 0 -40px;
    }

    :nth-of-type(5) img {
        object-position: 0 -50px;
    }

    h2,
    p {
        padding: 0 21px;
        text-align: center;
        margin-bottom: 20px;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 22px;

        margin-top: 20px;
    }

    p {
        font-size: 14px;
        font-weight: 500;
        color: #949494;
    }
`
