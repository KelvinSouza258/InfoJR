import { useEffect, useState } from 'react';
import DashBoard from './components/Dashboard';
import Login from './components/Login';
import { useCookies } from 'react-cookie';
import ThemeContext from './ThemeContext';
import checkIcon from './assets/Icon.svg';
import './App.css';

function App() {
    const theme = localStorage.getItem('theme');
    const [loginMsg, setLoginMsg] = useState(false);
    const [darkMode, setDarkMode] = useState(theme === 'dark' ? true : false);
    const [cookies] = useCookies(['auth', 'email']);

    useEffect(() => {
        if (!theme) {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    return (
        <ThemeContext.Provider value={darkMode}>
            <div className={`transition App ${darkMode ? 'App-dark' : ''}`}>
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
