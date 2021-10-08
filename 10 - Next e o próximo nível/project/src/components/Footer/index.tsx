import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

const Footer: React.FC = () => {
    return (
        <S.Footer>
            <S.Logo>
                <Image
                    src="/logo.svg"
                    alt="logo da infojr"
                    width="90"
                    height="100"
                />
                <p>Criando experiências incríveis para todos.</p>
            </S.Logo>

            <S.FooterLinks>
                <Link href="/">
                    <a>Twitter</a>
                </Link>
                <Link href="/">
                    <a>Linkedin</a>
                </Link>
                <Link href="/">
                    <a>RSS</a>
                </Link>
            </S.FooterLinks>

            <div style={{ textAlign: 'center', fontSize: '12px' }}>
                <p>© 2012–2021 InfoJr</p>
                <p>Todos os direitos reservados</p>
            </div>
        </S.Footer>
    )
}

export default Footer
