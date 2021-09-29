import styled, { css } from 'styled-components'

const OPTION_VARIANTS = {
    default: css`
        color: hsla(210, 84%, 15%, 1);

        :hover {
            background-color: hsla(0, 0%, 90%, 1);
        }
    `,
    selected: css`
        background-color: hsla(210, 84%, 15%, 1);
        color: hsla(0, 0%, 100%, 1);
        font-weight: 700;
    `
}

interface ILabelProps {
    variant: keyof typeof OPTION_VARIANTS
}

const StyledLabel = styled.label<ILabelProps>`
    font-weight: 400;
    font-size: 14px;

    border-radius: 2px;

    cursor: pointer;

    width: 100%;

    padding: 4px;

    [type='radio'] {
        display: none;
    }

    ${({ variant }) => OPTION_VARIANTS[variant]}
`

interface IProps {
    value: string
    variant: keyof typeof OPTION_VARIANTS
}

const Option: React.FC<IProps> = ({ value, variant }) => {
    return (
        <StyledLabel variant={variant}>
            {value}
            <input type="radio" value={value} />
        </StyledLabel>
    )
}

export default Option
