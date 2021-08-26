import { useEffect, useState } from 'react';
import DashBoard from './components/Dashboard';
import Login from './components/Login';
import { useCookies } from 'react-cookie';
import ThemeContext from './ThemeContext';
import './global.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [cookies] = useCookies(['auth', 'email']);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            if (theme === 'dark') {
                setDarkMode(true);
            } else {
                setDarkMode(false);
            }
        } else {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    return (
        <ThemeContext.Provider value={darkMode}>
            <div className={`App ${darkMode ? 'App-dark' : ''}`}>
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
                {cookies.auth ? (
                    <>
                        <DashBoard email={cookies.email} />
                        <div></div>
                    </>
                ) : (
                    <Login />
                )}
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
