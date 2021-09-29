import styled from 'styled-components'

const SelectInput = styled.select`
    font-size: 14px;
    font-weight: 400;

    color: hsla(210, 84%, 15%, 1);

    padding: 12px;

    cursor: pointer;

    option:disabled {
        color: hsla(0, 0%, 74%, 1);
    }

    option:hover {
        background-color: hsla(0, 0%, 90%, 1);
    }

    option:checked {
        background-color: hsla(210, 84%, 15%, 1);
        color: hsla(0, 0%, 100%, 1);
    }
`

export default SelectInput
