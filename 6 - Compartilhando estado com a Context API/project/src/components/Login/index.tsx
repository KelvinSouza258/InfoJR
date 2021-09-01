import './styles.css';
import { useState, FormEvent, useContext, Dispatch } from 'react';
import { useCookies } from 'react-cookie';
import { ThemeContext } from '../../Contexts';
import users from '../../users';
import eye from '../../assets/Eye.svg';
import eyeWhite from '../../assets/EyeWhite.svg';
import eyeSlash from '../../assets/EyeSlash.svg';
import eyeSlashWhite from '../../assets/EyeSlashWhite.svg';

function Login({
    showLoginMsg,
    email,
    setEmail,
    password,
    setPassword,
}: {
    showLoginMsg: (show: 'show' | 'hide', error?: 'success' | 'error') => void;
    email: string;
    setEmail: Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<React.SetStateAction<string>>;
}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleEyeClick = () => {
        setPasswordVisible(!passwordVisible);
    };

    const [, setCookies] = useCookies(['token', 'last-login-email']);

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
                setCookies('last-login-email', window.btoa(user.email), {
                    expires: new Date(9999, 0, 1),
                });
                window.location.reload();
            } else {
                showLoginMsg('show', 'error');
                await timer(3500);
                showLoginMsg('hide');
            }
        } else {
            showLoginMsg('show', 'error');
            await timer(3500);
            showLoginMsg('hide');
        }
    };

    const [darkMode] = useContext(ThemeContext);

    return (
        <>
            <form
                className={`transition login-form ${
                    darkMode ? 'dark-login-form' : ''
                }`}
                onSubmit={handleSubmit}
            >
                <div>
                    <h2 className="login-title">Fazer Login</h2>
                    <p className="login-paragraph">
                        Bem-vind@ de volta! Sentimos sua falta!
                    </p>
                </div>

                <div className="inputs">
                    <label className="login-label">
                        <span
                            className={`login-span ${
                                darkMode ? 'dark-login-span' : ''
                            }`}
                        >
                            Email
                        </span>
                        <input
                            className={`transition login-input ${
                                darkMode ? 'dark-login-input' : ''
                            }`}
                            type="email"
                            placeholder="Seu email"
                            value={email}
                            required={true}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </label>
                    <label className="login-label">
                        <span
                            className={`login-span ${
                                darkMode ? 'dark-login-span' : ''
                            }`}
                        >
                            Senha
                        </span>
                        <input
                            className={`transition login-input ${
                                darkMode ? 'dark-login-input' : ''
                            }`}
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Sua senha"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <button
                            type="button"
                            className="btn-eye"
                            onClick={handleEyeClick}
                        >
                            <img
                                src={
                                    passwordVisible
                                        ? darkMode
                                            ? eyeSlashWhite
                                            : eyeSlash
                                        : darkMode
                                        ? eyeWhite
                                        : eye
                                }
                                alt="an eye"
                            />
                        </button>
                    </label>
                </div>

                <button className="btn-login">Fazer Login</button>
            </form>
        </>
    );
}

export default Login;
