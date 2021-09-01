import { useEffect, useState } from 'react';
import DashBoard from './components/Dashboard';
import Login from './components/Login';
import { useCookies } from 'react-cookie';
import { ThemeContext, UserContext } from './Contexts';
import checkIcon from './assets/Icon.svg';
import xCircle from './assets/XCircle.svg';
import './App.css';
import NavBar from './components/Nav';
import users from './users';

function App() {
    const [loginMsg, setLoginMsg] = useState(false);
    const [successLogin, setSuccessLogin] = useState(false);

    const showLoginMsg = (
        show: 'show' | 'hide',
        success: 'success' | 'error' = 'error'
    ) => {
        setLoginMsg(show === 'show');
        setSuccessLogin(success === 'success');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState<
        | {
              id: string;
              name: string;
              email: string;
              password: string;
          }
        | undefined
    >({
        id: '',
        name: '',
        email: '',
        password: '',
    });
    const [cookies] = useCookies(['token', 'last-login-email']);

    const theme = localStorage.getItem('theme');
    const darkModeHook = useState(theme === 'dark' ? true : false);
    const [darkMode] = darkModeHook;

    useEffect(() => {
        if (!theme) {
            localStorage.setItem('theme', 'light');
        }

        if (cookies.token) {
            const id = window.atob(cookies.token);
            setUser(users.find((user) => user.id === id));
        }
        if (cookies['last-login-email']) {
            setEmail(window.atob(cookies['last-login-email']));
        }

        window.scrollTo(0, 0);

        // eslint-disable-next-line
    }, []);

    return (
        <ThemeContext.Provider value={darkModeHook}>
            <UserContext.Provider value={user}>
                <div className={`transition App ${darkMode ? 'App-dark' : ''}`}>
                    <NavBar
                        showLoginMsg={showLoginMsg}
                        email={email}
                        password={password}
                    />

                    {cookies.token ? (
                        <DashBoard />
                    ) : (
                        <Login
                            showLoginMsg={showLoginMsg}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                        />
                    )}

                    <div
                        className={`login-msg ${loginMsg ? '' : 'hidden'} ${
                            successLogin ? '' : 'error'
                        }`}
                    >
                        {successLogin ? (
                            <>
                                <img src={checkIcon} alt="" />
                                <p>
                                    Login efetuado com sucesso! Aguarde um
                                    momento enquanto atualizamos a página
                                </p>
                            </>
                        ) : (
                            <>
                                <img src={xCircle} alt="" />
                                <p>
                                    Erro ao realizar login. Verifique suas
                                    credenciais e tente novamente.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
