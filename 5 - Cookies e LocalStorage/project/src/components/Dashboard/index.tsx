import './styles.css';
import ThemeContext from '../../ThemeContext';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';

function DashBoard({ email }: { email: string }) {
    const darkMode = useContext(ThemeContext);
    const [, setCookies] = useCookies();

    const handleClick = () => {
        setCookies('auth', false);
        window.location.reload();
    };

    return (
        <div className={`dashboard ${darkMode ? 'dark-dashboard' : ''}`}>
            <p className={`user-info ${darkMode ? 'dark-user-info' : ''}`}>
                O usuário {email} está logado
            </p>
            <button onClick={handleClick} className="btn-logout">
                Fazer logout
            </button>
        </div>
    );
}

export default DashBoard;
