import './styles.css';
import { useState, FormEvent, useContext, Dispatch } from 'react';
import { useCookies } from 'react-cookie';
import ThemeContext from '../../ThemeContext';
import eye from '../../assets/Eye.svg';
import eyeWhite from '../../assets/EyeWhite.svg';
import eyeSlash from '../../assets/EyeSlash.svg';
import eyeSlashWhite from '../../assets/EyeSlashWhite.svg';

function Login({
    setLoginMsg,
}: {
    setLoginMsg: Dispatch<React.SetStateAction<boolean>>;
}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleEyeClick = () => {
        setPasswordVisible(!passwordVisible);
    };

    const fakeTimerForLogin = (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setCookies('email', email);
        setLoginMsg(true);
        await fakeTimerForLogin(3000);
        setCookies('auth', 'true');
        setLoginMsg(false);

        window.location.reload();
    };

    const [cookies, setCookies] = useCookies();
    const [email, setEmail] = useState(cookies.email);
    const darkMode = useContext(ThemeContext);

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
