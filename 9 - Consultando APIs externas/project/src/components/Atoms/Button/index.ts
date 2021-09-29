import styled from 'styled-components'

const Button = styled.button`
    font-weight: 700;
    font-size: 14px;

    cursor: pointer;

    background-color: hsla(192, 95%, 52%, 1);
    color: hsla(0, 0%, 100%, 1);

    border-radius: 10px;

    min-width: 248px;

    padding: 15px 0;

    :hover {
        background-color: hsla(192, 80%, 70%, 1);
    }

    :active {
        background-color: hsla(192, 100%, 45%, 1);
    }

    @media (min-width: 975px) {
        font-size: 18px;
    }
`

export default Button
