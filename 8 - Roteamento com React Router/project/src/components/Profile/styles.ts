import styled from 'styled-components';

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 87px;
    width: 90%;
    max-width: 490px;
    flex-grow: 1;
    margin-top: 100px;  

    @media (min-width: 768px) {
        gap: 70px;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100px;
        margin-bottom: 13px;
    }

    p:first-of-type {
        font-size: 24px;
        font-weight: 600;
    }
    p:nth-of-type(2) {
        color: #b2b3bf;
    }
`;

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 32px 27px;
    background-color: ${(props) => props.theme.colors.bgComponent};
    width: 100%;
    transition: background-color 0.3s ease;

    > p {
        font-size: 12px;
        letter-spacing: 0.25rem;
        text-transform: uppercase;
    }

    > div p {
        font-size: 12px;
    }

    @media (min-width: 768px) {
        > p {
            font-size: 16px;
        }
    }
`;

interface IGraph {
    progress?: number;
}

export const Graph = styled.div<IGraph>`
    height: 15px;
    background-color: #f8f8f8;
    border-radius: 4px;
    position: relative;
    margin-bottom: 7px;

    ::before {
        content: '';
        position: absolute;
        left: 0;
        height: 15px;
        width: ${(props) => `${props.progress}%`};
        background-color: #0147fa;
        border-radius: 3px;
        z-index: 100;
    }
`;

export const PremiumDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    min-height: 164px;
    padding: 26px 25%;
    gap: 30px;
    border: 1px solid #b2b3bf;
    border-radius: 10px;
    color: #b2b3bf;

    img {
        width: 32px;
    }

    p {
        text-align: center;
    }
`;
