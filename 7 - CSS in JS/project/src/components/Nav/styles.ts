import styled from 'styled-components';

export const NavBar = styled.div`
    width: 100%;
    max-width: 1168px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${(props) => props.theme.colors.bgComponent};
    margin-bottom: 25px;
    border-radius: 20px;
    padding: 16px 24px;
    transition: background-color 0.3s ease;

    .btn-list {
        background-color: transparent;
        cursor: pointer;
    }

    .display-none.display-none {
        display: none;
    }

    @media (min-width: 768px) {
        .btn-list {
            display: none;
        }
        .display-none.display-none {
            display: flex;
        }
    }
`;

export const NavContent = styled.div`
    position: absolute;
    margin: auto;
    border-radius: 20px;
    width: 90%;
    right: 5%;
    background-color: ${(props) => props.theme.colors.bgComponent};
    top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 52px;
    padding: 43px 0;
    transition: background-color 0.3s ease;

    .nav-user-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-weight: 400;
        gap: 13px;
    }

    .nav-user {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }

    .user-email {
        font-size: 12px;
        color: #b2b3bf;
    }

    .avatar {
        height: 57px;
        height: 57px;
    }

    @media (min-width: 768px) {
        position: static;
        opacity: 1;
        flex-direction: row;
        padding: 0;
        background-color: transparent;

        .avatar {
            width: 36px;
            height: 36px;
        }
        .nav-user {
            flex-direction: row;
        }

        .nav-user-info {
            flex-direction: row;
            text-align: start;
        }
    }

    .btn-nav {
        font-family: 'Sora', sans-serif;
        font-weight: 700;
        color: ${(props) => props.theme.colors.buttonNav};
        border: 1px solid ${(props) => props.theme.colors.buttonNav};
        font-size: 14px;
        border-radius: 8px;
        padding: 3px 16px;
        line-height: 32px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color color 0.3s ease;
    }

    .btn-nav:hover {
        background-color: #0147fa;
        color: #ffffff;
    }
`;

export const ThemeSwitch = styled.div`
    label {
        cursor: pointer;
        font-family: 'Sora', sans-serif;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .checkbox {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .switch-container {
        width: 32px;
        height: 16px;
        border-radius: 100px;
        background-color: rgba(29, 33, 67, 0.1);
        margin-right: 16px;
        position: relative;
    }

    .switch-button::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #bababa;
        transition: 0.3s all ease;
    }

    .checkbox:checked + .switch-container {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .checkbox:checked + .switch-container > .switch-button::before {
        transform: translateX(16px);
        background-color: #ffffff;
    }
`;
