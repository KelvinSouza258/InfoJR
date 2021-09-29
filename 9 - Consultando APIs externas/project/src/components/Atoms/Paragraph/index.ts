import styled, { css } from 'styled-components'

const PARAGRAPH_VARIANTS = {
    description: css`
        font-weight: 400;
        font-size: 14px;

        @media (min-width: 800px) {
            font-size: 24px;
        }
    `,
    cases: css`
        font-size: 36px;
        font-weight: 700;

        span {
            font-size: 24px;
            color: hsla(0, 0%, 74%, 1);
        }

        @media (min-width: 800px) {
            font-size: 64px;

            span {
                font-size: 36px;
            }
        }
    `
}

interface IParagraphProps {
    variant?: keyof typeof PARAGRAPH_VARIANTS
}

const Paragraph = styled.p<IParagraphProps>`
    color: hsla(210, 84%, 15%, 1);

    ${({ variant = 'description' }) => PARAGRAPH_VARIANTS[variant]}
`

export default Paragraph
