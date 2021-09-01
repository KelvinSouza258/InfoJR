import './styles.css';
import { ThemeContext, UserContext } from '../../Contexts';
import { useContext } from 'react';

function DashBoard() {
    const [darkMode] = useContext(ThemeContext);
    
    const user = useContext(UserContext)

    return (
        <div
            className={`transition dashboard ${
                darkMode ? 'dark-dashboard' : ''
            }`}
        >
            <div className="welcome-msg">
                <p>Bem vind@ de volta,</p>
                <p>{user?.name}</p>
            </div>

            <div className="user-info">
                <div className="user-data">
                    <p className="data-title">Faturamento</p>
                    <p className="data-value">R$ 12.030,00</p>
                </div>
                <div className="user-data">
                    <p className="data-title">Projetos feitos</p>
                    <p className="data-value">23</p>
                </div>
            </div>

            <div className="gallery">
                <p>Galeria</p>
                <div className="gallery-content">
                    <p>Você ainda não possui fotos. Que tal adicionar uma?</p>
                    <button>Adicionar nova foto</button>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
