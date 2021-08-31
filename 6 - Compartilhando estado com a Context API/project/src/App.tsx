import { useEffect, useState } from 'react';
import DashBoard from './components/Dashboard';
import Login from './components/Login';
import { useCookies } from 'react-cookie';
import ThemeContext from './ThemeContext';
import checkIcon from './assets/Icon.svg';
import './App.css';
import NavBar from './components/Nav';

function App() {
    const theme = localStorage.getItem('theme');
    const [loginMsg, setLoginMsg] = useState(false);
    const darkModeHook = useState(theme === 'dark' ? true : false);
    const [cookies] = useCookies(['auth', 'email']);
    const [darkMode] = darkModeHook;

    useEffect(() => {
        if (!theme) {
            localStorage.setItem('theme', 'light');
        }
        // eslint-disable-next-line
    }, []);

    return (
        <ThemeContext.Provider value={darkModeHook}>
            <div className={`transition App ${darkMode ? 'App-dark' : ''}`}>
                <NavBar auth={false} />
                {cookies.auth === 'true' ? (
                    <DashBoard />
                ) : (
                    <Login setLoginMsg={setLoginMsg} />
                )}
                <div
                    className={
                        loginMsg
                            ? darkMode
                                ? 'dark-login-msg login-msg'
                                : 'login-msg'
                            : 'hidden login-msg'
                    }
                >
                    <img src={checkIcon} alt="" />
                    <p>
                        Login efetuado com sucesso! Aguarde um momento enquanto
                        atualizamos a página
                    </p>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
