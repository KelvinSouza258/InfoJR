import { useState, FormEvent, Dispatch, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useCookies } from 'react-cookie';
import users from '../../users';
import * as S from './styles';
import eye from '../../assets/Eye.svg';
import eyeWhite from '../../assets/EyeWhite.svg';
import eyeSlash from '../../assets/EyeSlash.svg';
import eyeSlashWhite from '../../assets/EyeSlashWhite.svg';

interface IProps {
    showLoginMsg: (show: 'show' | 'hide', error?: 'success' | 'error') => void;
    email: string;
    setEmail: Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<React.SetStateAction<string>>;
}

const Login = ({
    showLoginMsg,
    email,
    setEmail,
    password,
    setPassword,
}: IProps) => {
    const { title: theme } = useContext(ThemeContext);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleEyeClick = () => {
        setPasswordVisible(!passwordVisible);
    };

    const [, setCookies] = useCookies(['token']);

    const timer = (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        window.scrollTo(0, document.body.scrollHeight);
        const user = users.find((user) => user.email === email.toLowerCase());

        if (user) {
            if (user.password === password) {
                showLoginMsg('show', 'success');
                await timer(3500);
                setCookies('token', window.btoa(user.id), {
                    expires: new Date(9999, 0, 1),
                });

                window.location.reload()
            } else {
                showLoginMsg('show', 'error');
                await timer(3500);
                showLoginMsg('hide');
            }
        } else {
            showLoginMsg('show', 'error');
            await timer(3000);
            showLoginMsg('hide');
        }
    };

    return (
        <S.Form onSubmit={handleSubmit}>
            <div>
                <h2 className="login-title">Fazer Login</h2>
                <p className="login-paragraph">
                    Bem-vind@ de volta! Sentimos sua falta!
                </p>
            </div>

            <div className="inputs">
                <S.LoginLabel>
                    <span>Email</span>
                    <input
                        type="email"
                        placeholder="Seu email"
                        value={email}
                        required={true}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </S.LoginLabel>
                <S.LoginLabel>
                    <span>Senha</span>
                    <input
                        className={`transition login-input`}
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Sua senha"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button type="button" onClick={handleEyeClick}>
                        <img
                            src={
                                passwordVisible
                                    ? theme === 'dark'
                                        ? eyeSlashWhite
                                        : eyeSlash
                                    : theme === 'dark'
                                    ? eyeWhite
                                    : eye
                            }
                            alt="an eye"
                        />
                    </button>
                </S.LoginLabel>
            </div>

            <button className="btn-login">Fazer Login</button>
        </S.Form>
    );
};

export default Login;
