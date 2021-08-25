import './styles.css';
import { useState } from 'react';
import eye from './Eye.svg';
import eyeSlash from './EyeSlash.svg';

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleEyeClick = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <form className="login-form">
            <div>
                <h2 className="login-title">Fazer Login</h2>
                <p className="login-msg">
                    Bem-vind@ de volta! Sentimos sua falta!
                </p>
            </div>

            <div className="inputs">
                <label className="login-label">
                    <span>Email</span>
                    <input
                        type="email"
                        placeholder="kelvinsouza@infojr.com.br"
                    />
                </label>
                <label className="login-label">
                    <span>Password</span>
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Sua Senha"
                    />
                    <button
                        type="button"
                        className="btn-eye"
                        onClick={handleEyeClick}
                    >
                        <img
                            src={passwordVisible ? eyeSlash : eye}
                            alt="an eye"
                        />
                    </button>
                </label>
            </div>

            <button className="btn-login">Fazer Login</button>
        </form>
    );
}

export default Login;
