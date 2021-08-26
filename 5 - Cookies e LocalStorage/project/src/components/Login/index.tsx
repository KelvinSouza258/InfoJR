import './styles.css';
import { useState, FormEvent, useContext, Dispatch } from 'react';
import { useCookies } from 'react-cookie';
import eye from '../../assets/Eye.svg';
import eyeWhite from '../../assets/EyeWhite.svg';
import eyeSlash from '../../assets/EyeSlash.svg';
import eyeSlashWhite from '../../assets/EyeSlashWhite.svg';
import checkIcon from '../../assets/Icon.svg';
import ThemeContext from '../../ThemeContext';

function Login() {
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
        setCookies('auth', true);
        setLoginMsg(false);

        window.location.reload();
    };

    const [loginMsg, setLoginMsg] = useState(false);
    const [cookies, setCookies] = useCookies();
    const [email, setEmail] = useState(cookies.email);
    const darkMode = useContext(ThemeContext);

    return (
        <>
            <form
                className={`login-form ${darkMode ? 'dark-login-form' : ''}`}
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
                            className={`login-input ${
                                darkMode ? 'dark-login-input' : ''
                            }`}
                            type="email"
                            placeholder="kelvinsouza@infojr.com.br"
                            value={email}
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
                            Password
                        </span>
                        <input
                            className={`login-input ${
                                darkMode ? 'dark-login-input' : ''
                            }`}
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Sua Senha"
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
                                            ? eyeWhite
                                            : eye
                                        : darkMode
                                        ? eyeSlashWhite
                                        : eyeSlash
                                }
                                alt="an eye"
                            />
                        </button>
                    </label>
                </div>

                <button className="btn-login">Fazer Login</button>
            </form>

            <div className={loginMsg ? 'login-msg' : 'hidden login-msg'}>
                <img src={checkIcon} alt="" />
                <p>
                    Login efetuado com sucesso! Aguarde um momento enquanto
                    atualizamos a página
                </p>
            </div>
        </>
    );
}

export default Login;
