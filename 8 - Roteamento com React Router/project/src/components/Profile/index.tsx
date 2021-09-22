import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../assets/Avatar.svg'
import lock from '../../assets/Lock.svg'
import UserContext from '../../hooks/UserContext'
import * as S from './styles'

const Profile = () => {
    const user = useContext(UserContext)

    return (
        <S.Profile>
            <Link to="/dashboard" className="back">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                </svg>
            </Link>
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
    )
}

export default Profile
