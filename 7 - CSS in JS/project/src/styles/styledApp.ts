import styled from 'styled-components';

const App = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 38px 35px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    position: relative;
    transition: background-color 0.3s;

    .login-msg {
        font-size: 14px;
        font-weight: 400;
        border-radius: 4px;
        margin-top: 20px;
        display: flex;
        background-color: #3eb843;
        color: #ffffff;
        padding: 8px 16px;
        gap: 26px;
        max-width: 90%;
        opacity: 1;
        box-shadow: 0px 4.3px 7.9px 0px #0e2a0e54;
        transition: 0.3s all;
    }

    .hidden {
        visibility: hidden;
        opacity: 0;
    }

    .error {
        background-color: #e9453a;
    }
`;

export default App;
