import styled, { css } from 'styled-components'

const HEADING_VARIANTS = {
    normal: css`
        font-size: 24px;

        @media (min-width: 975px) {
            font-size: 64px;
        }
    `,
    big: css`
        font-size: 48px;

        @media (min-width: 975px) {
            font-size: 72px;
        }
    `
}

interface IHeadingProps {
    variant?: keyof typeof HEADING_VARIANTS
}

const Heading = styled.h1<IHeadingProps>`
    font-weight: 900;

    ${({ variant = 'normal' }) => HEADING_VARIANTS[variant]}

    color: hsla(192, 95%, 52%, 1);
`

export default Heading
