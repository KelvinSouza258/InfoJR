import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

import * as S from './styles'

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    return (
        <S.Navbar>
            <Image
                src="/logo_info.svg"
                alt="logo infojr"
                width="186"
                height="90"
            />

            <S.MenuIcon
                className={`${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </S.MenuIcon>
            <S.Navlinks
                ref={menuRef}
                className={`${menuOpen ? 'menu-active' : ''}`}
            >
                <Link href="/">
                    <a>Blog</a>
                </Link>
                <Link href="/">
                    <a>Sobre</a>
                </Link>
                <Link href="/">
                    <a>Links</a>
                </Link>
                <Link href="/">
                    <a>Portfólio</a>
                </Link>
            </S.Navlinks>
        </S.Navbar>
    )
}

export default Navbar
