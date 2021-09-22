/* eslint-disable indent */
import React, { Dispatch, SetStateAction, useState, useContext } from 'react'
import { useCookies } from 'react-cookie'
import avatar from '../../assets/Avatar.svg'
import useLogin from '../../hooks/useLogin'
import UserContext from '../../hooks/UserContext'
import { Redirect, Link } from 'react-router-dom'
import * as S from './styles'

interface IProps {
    showLoginMsg: (show: 'show' | 'hide', success?: 'success' | 'error') => void
    password: string
    email: string
    themeState: [string, Dispatch<SetStateAction<string>>]
}

const NavBar = ({ showLoginMsg, password, email, themeState }: IProps) => {
    const [navOpen, setNavOpen] = useState(false)
    const [theme, setTheme] = themeState
    const [cookies, , removeCookie] = useCookies(['token', 'last-login-email'])
    const user = useContext(UserContext)
    // const userRef: LegacyRef<HTMLDivElement> = useRef(null)

    const handleLogin = useLogin(showLoginMsg, email, password)

    return (
        <S.NavBar>
            <S.NavContent className={`${navOpen ? '' : 'display-none'}`}>
                <S.ThemeSwitch>
                    <label>
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={theme === 'dark'}
                            onChange={() => {
                                localStorage.setItem(
                                    'theme',
                                    `${theme === 'dark' ? 'light' : 'dark'}`
                                )
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }}
                        />
                        <div className="switch-container">
                            <span className="switch-button"></span>
                        </div>
                        <span>Dark Mode</span>
                    </label>
                </S.ThemeSwitch>

                {cookies.token ? (
                    <div className="nav-user">
                        <Link to="/profile" className="nav-user-info">
                            <img className="avatar" src={avatar} alt="" />
                            <div>
                                <p>{user?.name}</p>
                                <p className="user-email">{user?.email}</p>
                            </div>
                        </Link>
                        <button
                            className={'btn-nav'}
                            onClick={() => {
                                removeCookie('token')
                                return <Redirect to="/login" />
                            }}
                        >
                            Fazer logout
                        </button>
                    </div>
                ) : (
                    <>
                        <button
                            className={'btn-nav'}
                            onClick={(e) => {
                                handleLogin(e)
                                return <Redirect to="/dashboard" />
                            }}
                        >
                            Fazer login
                        </button>
                    </>
                )}
            </S.NavContent>
            <button className="btn-list" onClick={() => setNavOpen(!navOpen)}>
                {navOpen ? (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 7L7 25"
                            stroke={theme === 'dark' ? 'white' : 'black'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M25 25L7 7"
                            stroke={theme === 'dark' ? 'white' : 'black'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 16H27"
                            stroke={theme === 'dark' ? 'white' : 'black'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5 8H27"
                            stroke={theme === 'dark' ? 'white' : 'black'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5 24H27"
                            stroke={theme === 'dark' ? 'white' : 'black'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
        </S.NavBar>
    )
}

export default NavBar
