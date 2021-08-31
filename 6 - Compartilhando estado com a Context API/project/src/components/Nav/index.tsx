import { useContext } from 'react';
import ThemeContext from '../../ThemeContext';
import './styles.css';

function NavBar({ auth }: { auth: boolean }) {
    const [darkMode, setDarkMode] = useContext(ThemeContext);

    
    return (
        <div className={`transition navbar ${darkMode ? 'dark-navbar' : ''}`}>
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
            {auth ? null : <button className={`btn-nav ${darkMode ? 'dark-btn-nav' : ''}`}>Fazer login</button>}
        </div>
    );
}

export default NavBar;
