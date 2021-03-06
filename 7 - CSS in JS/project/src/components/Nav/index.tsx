import { Dispatch, SetStateAction, useContext } from 'react';
import { useCookies } from 'react-cookie';
import UserContext from '../../UserContext';
import Avatar from '../../assets/Avatar.svg';
import * as S from './styles';
import { useState } from 'react';
import useLogin from '../../useLogin';

interface IProps {
    showLoginMsg: (
        show: 'show' | 'hide',
        success?: 'success' | 'error'
    ) => void;
    password: string;
    email: string;
    themeState: [string, Dispatch<SetStateAction<string>>];
}

const NavBar = ({ showLoginMsg, password, email, themeState }: IProps) => {
    const [navOpen, setNavOpen] = useState(false);
    const user = useContext(UserContext);
    const [theme, setTheme] = themeState;
    const [cookies, , removeCookie] = useCookies(['token', 'last-login-email']);

    const handleLogin = useLogin(showLoginMsg, email, password);

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
                                );
                                setTheme(theme === 'dark' ? 'light' : 'dark');
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
                        <div className="nav-user-info">
                            <img className="avatar" src={Avatar} alt="" />
                            <div>
                                <p>{user?.name}</p>
                                <p className="user-email">{user?.email}</p>
                            </div>
                        </div>
                        <button
                            className={`btn-nav`}
                            onClick={() => {
                                removeCookie('token');
                                window.location.reload();
                            }}
                        >
                            Fazer logout
                        </button>
                    </div>
                ) : (
                    <>
                        <button className={`btn-nav`} onClick={handleLogin}>
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
                            stroke={`${theme === 'dark' ? 'white' : 'black'}`}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M25 25L7 7"
                            stroke={`${theme === 'dark' ? 'white' : 'black'}`}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                            stroke={`${theme === 'dark' ? 'white' : 'black'}`}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M5 8H27"
                            stroke={`${theme === 'dark' ? 'white' : 'black'}`}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M5 24H27"
                            stroke={`${theme === 'dark' ? 'white' : 'black'}`}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                )}
            </button>
        </S.NavBar>
    );
};

export default NavBar;
