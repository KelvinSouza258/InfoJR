import { useContext } from 'react';
import avatar from '../../assets/Avatar.svg';
import lock from '../../assets/Lock.svg';
import UserContext from '../../UserContext';
import * as S from './styles';

const Profile = () => {
    const user = useContext(UserContext);

    return (
        <S.Profile>
            <S.UserInfo>
                <img src={avatar} alt="" />
                <p>{user?.name}</p>
                <p>{user?.email}</p>
            </S.UserInfo>
            <S.UserDetails>
                <p>Performance</p>
                <div>
                    <S.Graph progress={user?.projectProgress} />
                    <p>{user?.projectProgress}% dos projetos concluídos</p>
                </div>
                <div>
                    <S.Graph progress={user?.codeQuality} />
                    <p>{user?.codeQuality}% de qualidade do código</p>
                </div>
                <S.PremiumDetails>
                    <img src={lock} alt="" />
                    <p>
                        Para ter acesso à mais métricas, é necessário ser
                        assinante do plano premium
                    </p>
                </S.PremiumDetails>
            </S.UserDetails>
        </S.Profile>
    );
};

export default Profile;
