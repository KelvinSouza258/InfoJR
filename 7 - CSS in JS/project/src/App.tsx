import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import usePersistentTheme from './usePersistentTheme';
import DashBoard from './components/Dashboard';
import Login from './components/Login';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import StyledApp from './styles/appStyles';
import GlobalStyle from './styles/global';
import UserContext from './UserContexts';
import checkIcon from './assets/Icon.svg';
import xCircle from './assets/XCircle.svg';
import NavBar from './components/Nav';
import users from './users';

const App = () => {
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
    const [theme, setTheme] = usePersistentTheme();

    useEffect(() => {
        if (cookies.token) {
            const id = window.atob(cookies.token);
            setUser(users.find((user) => user.id === id));
        }
        // eslint-disable-next-line
    }, []);

    return (
        <ThemeProvider theme={theme === 'dark' ? dark : light}>
            <UserContext.Provider value={user}>
                <GlobalStyle />
                <StyledApp>
                    <NavBar
                        showLoginMsg={showLoginMsg}
                        email={email}
                        password={password}
                        themeState={[theme, setTheme]}
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
                </StyledApp>
            </UserContext.Provider>
        </ThemeProvider>
    );
};

export default App;
