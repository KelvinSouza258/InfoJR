import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import usePersistentTheme from './usePersistentTheme';
import DashBoard from './components/Dashboard';
import Login from './components/Login';
import Popup from './components/PopupLogin';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { GlobalStyle, App as StyledApp } from './styles/global';
import UserContext from './UserContexts';
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
                <Router>
                    <StyledApp>
                        <NavBar
                            showLoginMsg={showLoginMsg}
                            email={email}
                            password={password}
                            themeState={[theme, setTheme]}
                        />
                        {cookies.token ? (
                            <Redirect to="/dashboard" />
                        ) : (
                            <Redirect to="/login" />
                        )}
                        <Switch>
                            <Route path="/login">
                                <Login
                                    showLoginMsg={showLoginMsg}
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                />
                                <Popup
                                    loginMsg={loginMsg}
                                    successLogin={successLogin}
                                />
                            </Route>
                            <Route path="/dashboard">
                                <DashBoard />
                            </Route>
                        </Switch>
                    </StyledApp>
                </Router>
            </UserContext.Provider>
        </ThemeProvider>
    );
};

export default App;
