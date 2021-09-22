import styled from 'styled-components'

export const Popup = styled.div`
    div {
        font-size: 14px;
        font-weight: 400;
        border-radius: 4px;
        margin-top: 20px;
        display: flex;
        background-color: #3eb843;
        color: #ffffff;
        padding: 8px 16px;
        gap: 26px;
        max-width: 100%;
        visibility: hidden;
        opacity: 0;
        box-shadow: 0px 4.3px 7.9px 0px #0e2a0e54;
        transition: opacity 0.3s;
    }

    .show {
        visibility: visible;
        opacity: 1;
    }

    .error {
        background-color: #e9453a;
    }
`
