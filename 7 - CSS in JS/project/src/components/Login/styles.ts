import styled from 'styled-components';

export const Form = styled.form`
    border-radius: 30px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 504px;
    padding: 64px 32px;
    gap: 64px;
    background-color: ${(props) => props.theme.colors.bgComponent};
    color: ${(props) => props.theme.colors.primary};
    transition: background-color 0.3s ease;

    .login-title {
        font-size: 24px;
        text-align: center;
        margin-bottom: 4px;
    }

    .login-paragraph {
        font-size: 14px;
        color: #b2b3bf;
        font-weight: 400;
        text-align: center;
    }

    button {
        font-family: inherit;
        font-size: 14px;
        cursor: pointer;
        height: 54px;
        color: #ffffff;
        background-color: #0147fa;
        border-radius: 8px;
    }

    button:hover {
        background-color: #a6bffd;
        color: #0147fa;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media (min-width: 768px) {
        padding: 72px 90px;

        .login-title {
            font-size: 32px;
        }

        .login-paragraph {
            font-size: 16px;
        }

        button {
            font-size: 14px;
        }
    }
`;

export const LoginLabel = styled.label`
    display: flex;
    flex-direction: column;

    input {
        font-size: 14px;
        border: 1px solid #b2b3bf;
        border-radius: 4px;
        padding: 16px;
        background-color: ${(props) => props.theme.colors.bgComponent};
        color: ${(props) => props.theme.colors.primary};
        transition: background-color 0.3s ease;
    }

    input::placeholder {
        color: #b2b3bf;
        font-size: 14px;
    }

    span {
        font-size: 12px;
        margin-left: 12px;
        padding: 0 4px;
        background-color: ${(props) => props.theme.colors.bgComponent};
        position: relative;
        align-self: flex-start;
        top: 8px;
        transition: background-color 0.3s;
    }

    button {
        height: auto;
        align-self: flex-end;
        cursor: pointer;
        background-color: inherit;
        position: relative;
        margin-right: 16px;
        border: none;
        bottom: 32px;
    }

    button:hover {
        background-color: transparent;
    }
`;
