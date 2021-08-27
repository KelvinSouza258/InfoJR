import './styles.css';
import ThemeContext from '../../ThemeContext';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';

function DashBoard() {
    const darkMode = useContext(ThemeContext);
    const [cookies, setCookies] = useCookies(['auth','email']);

    const handleClick = () => {
        setCookies('auth', 'false', { expires: new Date(9999, 0, 1) });
        window.location.reload();
    };

    return (
        <div className={`transition dashboard ${darkMode ? 'dark-dashboard' : ''}`}>
            <p className={`user-info ${darkMode ? 'dark-user-info' : ''}`}>
                O usuário {cookies.email.slice(0, cookies.email.indexOf('@'))} está logado
            </p>
            <button onClick={handleClick} className="btn-logout">
                Fazer logout
            </button>
        </div>
    );
}

export default DashBoard;
