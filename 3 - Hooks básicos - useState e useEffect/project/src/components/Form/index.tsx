import { useContext } from 'react';
import { useState, useEffect } from 'react';
import ModalContext from '../../ModalContext';
import Modal from '../Modal';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('000.000.000-00');
    const [agree, setAgree] = useState(false);
    const [modalOpen, setModal] = useContext(ModalContext);

    useEffect(() => {}, []);

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setModal(!modalOpen);
                }}
            >
                <div className="form-info">
                    <h1 className="form-title">Informações do Perfil</h1>
                    <p className="instruction">
                        Preencha o formulário com seus dados pessoais.
                    </p>
                </div>
                <label className="checkbox-input">
                    <input
                        type="checkbox"
                        className="checkbox"
                        onChange={(e) => setAgree(!agree)}
                        tabIndex={modalOpen ? -1 : 1}
                    />
                    <span>
                        Eu concordo com os{' '}
                        <a
                            className="terms-anchor"
                            href="http://google.com"
                            target="_blank"
                            rel="noreferrer"
                            tabIndex={modalOpen ? -1 : 1}
                        >
                            Termos de Uso
                        </a>
                    </span>
                </label>
                <div className="personal-info">
                    <h2 className="info-title">Dados Pessoais</h2>
                    <p className="info-paragraph">
                        Prometemos não vender seus dados para agências de
                        marketing ;)
                    </p>

                    <label className="input-info">
                        Nome
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            tabIndex={modalOpen ? -1 : 1}
                            required={true}
                            autoFocus
                        />
                    </label>

                    <label className="input-info">
                        Sobrenome
                        <input
                            type="text"
                            value={secondName}
                            onChange={(e) => setSecondName(e.target.value)}
                            tabIndex={modalOpen ? -1 : 1}
                            required={true}
                        />
                    </label>

                    <label className="input-info">
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            tabIndex={modalOpen ? -1 : 1}
                            required={true}
                        />
                    </label>

                    <label className="input-info">
                        Data de nascimento (DD/MM/AAAA)
                        <input
                            type="text"
                            placeholder="00/00/0000"
                            tabIndex={modalOpen ? -1 : 1}
                            required={true}
                        />
                    </label>

                    <label className="input-info">
                        CPF
                        <input
                            type="text"
                            placeholder="000.000.000-00"
                            onChange={(e) => setCpf(e.target.value)}
                            tabIndex={modalOpen ? -1 : 1}
                            required={true}
                        />
                    </label>
                </div>
                <button
                    tabIndex={modalOpen ? -1 : 1}
                    disabled={agree ? false : true}
                >
                    Prosseguir →
                </button>
            </form>
            {modalOpen ? (
                <Modal
                    firstName={firstName}
                    secondName={secondName}
                    email={email}
                    cpf={cpf}
                />
            ) : null}
        </>
    );
};

export default Form;
