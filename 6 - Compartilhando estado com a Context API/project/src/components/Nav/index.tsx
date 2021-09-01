import { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { ThemeContext, UserContext } from '../../Contexts';
import avatar from '../../assets/Avatar.svg';
import users from '../../users';
import './styles.css';
import { useState } from 'react';

function NavBar({
    showLoginMsg,
    password,
    email,
}: {
    showLoginMsg: (
        show: 'show' | 'hide',
        success?: 'success' | 'error'
    ) => void;
    password: string;
    email: string;
}) {
    const [navOpen, setNavOpen] = useState(false);

    const [darkMode, setDarkMode] = useContext(ThemeContext);
    const user = useContext(UserContext);
    const [cookies, setCookies, removeCookie] = useCookies([
        'token',
        'last-login-email',
    ]);

    const timer = (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const handleLogin = async () => {
        window.scrollTo(0, document.body.scrollHeight);
        const user = users.find((user) => user.email === email.toLowerCase());

        if (user) {
            if (user.password === password) {
                showLoginMsg('show', 'success');
                await timer(3500);
                setCookies('token', window.btoa(user.id), {
                    expires: new Date(9999, 0, 1),
                });
                setCookies('last-login-email', window.btoa(user.email), {
                    expires: new Date(9999, 0, 1),
                });
                showLoginMsg('hide');
                window.location.reload();
            } else {
                showLoginMsg('show', 'error');
                await timer(3500);
                showLoginMsg('hide');
            }
        } else {
            showLoginMsg('show', 'error');
            await timer(3500);
            showLoginMsg('hide');
        }
    };

    const handleLogout = async () => {
        removeCookie('token');
        window.location.reload();
    };

    return (
        <div className={`transition navbar ${darkMode ? 'dark-navbar' : ''}`}>
            <div
                className={`${navOpen ? '' : 'display-none'} ${
                    darkMode ? 'dark-nav-content' : ''
                } nav-content`}
            >
                <div>
                    <label className="dark-mode-input">
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => {
                                setDarkMode(!darkMode);
                                localStorage.setItem(
                                    'theme',
                                    darkMode ? 'light' : 'dark'
                                );
                            }}
                        />
                        <div className="switch-container">
                            <span className="switch-button"></span>
                        </div>
                        <span>Dark Mode</span>
                    </label>
                </div>
                {cookies.token ? (
                    <div className="nav-user">
                        <div className="nav-user-info">
                            <img className="avatar" src={avatar} alt="" />
                            <div>
                                <p>{user?.name}</p>
                                <p className="user-email">{user?.email}</p>
                            </div>
                        </div>
                        <button
                            className={`btn-nav ${
                                darkMode ? 'dark-btn-nav' : ''
                            }`}
                            onClick={handleLogout}
                        >
                            Fazer logout
                        </button>
                    </div>
                ) : (
                    <>
                        <button
                            className={`btn-nav ${
                                darkMode ? 'dark-btn-nav' : ''
                            }`}
                            onClick={handleLogin}
                        >
                            Fazer login
                        </button>
                    </>
                )}
            </div>
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
                            stroke={`${darkMode ? 'white' : 'black'}`}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M25 25L7 7"
                            stroke={`${darkMode ? 'white' : 'black'}`}
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
                            stroke={`${darkMode ? 'white' : 'black'}`}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M5 8H27"
                            stroke={`${darkMode ? 'white' : 'black'}`}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M5 24H27"
                            stroke={`${darkMode ? 'white' : 'black'}`}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}

export default NavBar;
