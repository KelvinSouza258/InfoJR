import { useContext } from 'react';
import { useState, useEffect } from 'react';
import arrow from '../../assets/arrow.png';
import disabledArrow from '../../assets/disableArrow.png';
import ModalContext from '../../ModalContext';
import Modal from '../Modal';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [agree, setAgree] = useState(false);
    const [modalOpen, setModal] = useContext(ModalContext);

    const clearInputs = () => {
        setFirstName('');
        setSecondName('');
        setEmail('');
        setBirthDate('');
        setCpf('');
        setAgree(false);
    };

    const [userPlaceHolder, setUserPlaceholder] = useState({
        firstName: '',
        secondName: '',
        email: '',
    });

    useEffect(() => {
        const getUserPlaceholder = async () => {
            const res = await fetch('https://randomuser.me/api/');
            const json = await res.json();

            const {
                results: [
                    {
                        name: { first: firstName = '', last: secondName = '' },
                        email = '',
                    },
                ],
            } = json || {};

            setUserPlaceholder({
                firstName,
                secondName,
                email,
            });
        };

        getUserPlaceholder();
    }, []);

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
                        checked={agree}
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
                    <div className="info-header">
                        <h2 className="info-title">Dados Pessoais</h2>
                        <p className="info-paragraph">
                            Prometemos não vender seus dados para agências de
                            marketing ;)
                        </p>
                    </div>

                    <label className="input-info">
                        Nome
                        <input
                            type="text"
                            value={firstName}
                            placeholder={`Ex: ${userPlaceHolder.firstName}`}
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
                            placeholder={`Ex: ${userPlaceHolder.secondName}`}
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
                            placeholder={`Ex: ${userPlaceHolder.email}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            tabIndex={modalOpen ? -1 : 1}
                            required={true}
                        />
                    </label>

                    <div className="numbers-info">
                        <label className="input-info">
                            Data de nascimento (DD/MM/AAAA)
                            <input
                                type="text"
                                placeholder="00/00/0000"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                tabIndex={modalOpen ? -1 : 1}
                                required={true}
                            />
                        </label>

                        <label className="input-info">
                            CPF
                            <input
                                type="text"
                                placeholder="000.000.000-00"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                tabIndex={modalOpen ? -1 : 1}
                                required={true}
                            />
                        </label>
                    </div>
                </div>
                <button
                    tabIndex={modalOpen ? -1 : 1}
                    disabled={agree ? false : true}
                    className="btn-form"
                >
                    Prosseguir{' '}
                    <img src={agree ? arrow : disabledArrow} alt="" />
                </button>
            </form>

            {modalOpen ? (
                <Modal
                    firstName={firstName}
                    secondName={secondName}
                    email={email}
                    cpf={cpf}
                    clearInputs={clearInputs}
                />
            ) : null}
        </>
    );
};

export default Form;
