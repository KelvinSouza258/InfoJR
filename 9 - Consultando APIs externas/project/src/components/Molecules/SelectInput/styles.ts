import styled from 'styled-components'

import arrow from '../../../assets/arrow.svg'

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    font-weight: 600;
    font-size: 12px;

    max-width: 430px;

    position: relative;

    .active {
        max-height: 144px;
        opacity: 1;
        overflow: auto;
        visibility: visible;
    }

    .swap-icon::after {
        transform: rotate(-180deg);
    }
`

export const SelectedOption = styled.div`
    font-weight: 400;
    color: hsla(210, 84%, 15%, 1);

    padding: 8px;

    background-color: hsla(0, 0%, 97%, 1);

    position: relative;

    cursor: pointer;

    border: 1px solid hsla(210, 84%, 15%, 1);
    border-radius: 5px;

    ::after {
        content: '';
        position: absolute;

        background-image: url(${arrow});
        width: 16px;
        height: 16px;

        right: 8px;

        transition: all 0.3s ease;
    }
`

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    border: 1px solid hsla(210, 84%, 15%, 1);
    border-radius: 5px;

    padding: 8px;
    max-height: 0;
    opacity: 0;
    width: 100%;

    visibility: hidden;

    background-color: hsla(0, 0%, 97%, 1);

    position: absolute;
    z-index: 99;
    top: calc(100% + 5px);

    overflow: hidden;

    transition: all 0.4s ease;

    .checked {
        background-color: hsla(210, 84%, 15%, 1);
        color: hsla(0, 0%, 100%, 1);
    }
`
