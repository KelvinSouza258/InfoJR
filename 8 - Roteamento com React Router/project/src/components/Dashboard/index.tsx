import UserContext from '../../UserContext';
import * as S from './styles';
import { useContext } from 'react';

const DashBoard = () => {
    const user = useContext(UserContext);

    return (
        <S.DashBoard>
            <div className="welcome-msg">
                <p>Bem vind@ de volta,</p>
                <p>{user?.name}</p>
            </div>

            <div className="user-info">
                <S.Data>
                    <p>Faturamento</p>
                    <p>R$ 12.030,00</p>
                </S.Data>
                <S.Data>
                    <p>Projetos feitos</p>
                    <p>23</p>
                </S.Data>
            </div>

            <S.Gallery>
                <p>Galeria</p>
                <div>
                    <p>Você ainda não possui fotos. Que tal adicionar uma?</p>
                    <button>Adicionar nova foto</button>
                </div>
            </S.Gallery>
        </S.DashBoard>
    );
}

export default DashBoard;
