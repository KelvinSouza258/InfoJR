import { useState, useEffect, useContext, useReducer, useRef } from 'react';
import arrow from '../../assets/arrow.png';
import disabledArrow from '../../assets/disableArrow.png';
import ModalContext from '../../ModalContext';
import Modal from '../Modal';

const formInput = {
    agree: false,
    firstName: '',
    secondName: '',
    email: '',
    birthDate: '',
    cpf: '',
};

type ACTIONTYPES =
    | {
          type: 'agree';
          value: boolean;
      }
    | {
          type: 'firstName';
          value: string;
      }
    | {
          type: 'secondName';
          value: string;
      }
    | {
          type: 'email';
          value: string;
      }
    | {
          type: 'birthDate';
          value: string;
      }
    | {
          type: 'cpf';
          value: string;
      };

function reducer(state: typeof formInput, action: ACTIONTYPES) {
    switch (action.type) {
        case 'agree':
            return {
                ...state,
                agree: action.value,
            };
        case 'firstName':
            return {
                ...state,
                firstName: action.value,
            };
        case 'secondName':
            return {
                ...state,
                secondName: action.value,
            };
        case 'email':
            return {
                ...state,
                email: action.value,
            };
        case 'birthDate':
            return {
                ...state,
                birthDate: action.value,
            };
        case 'cpf':
            return {
                ...state,
                cpf: action.value,
            };

        default:
            return formInput;
    }
}

const Form = () => {
    const [userInfo, dispatch] = useReducer(reducer, formInput);

    const [modalOpen, setModal] = useContext(ModalContext);

    const firstNameError = useRef<HTMLSpanElement | null>(null);
    const secondNameError = useRef<HTMLSpanElement | null>(null);

    const validateForm = () => {
        if (userInfo.secondName.length < 2) {
            secondNameError.current?.classList.remove('hidden');
            secondNameError.current?.focus();
        }
        if (userInfo.firstName.length < 2) {
            firstNameError.current?.classList.remove('hidden');
            firstNameError.current?.focus();
        }
        if (
            userInfo.secondName.length >= 2 &&
            userInfo.firstName.length >= 2
        ) {
            setModal(!modalOpen);
        }
    }

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
                    validateForm();
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
                        checked={userInfo.agree}
                        onChange={(e) =>
                            dispatch({ type: 'agree', value: !userInfo.agree })
                        }
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
                            value={userInfo.firstName}
                            placeholder={`Ex: ${userPlaceHolder.firstName}`}
                            onChange={(e) =>
                                dispatch({
                                    type: 'firstName',
                                    value: e.target.value,
                                })
                            }
                            onFocus={() =>
                                firstNameError.current?.classList.add('hidden')
                            }
                            tabIndex={modalOpen ? -1 : 1}
                            required={true}
                            autoFocus
                        />
                        <span
                            className="hidden input-error"
                            ref={firstNameError}
                        >
                            * Seu nome deve conter pelo menos 2 caracteres
                        </span>
                    </label>

                    <label className="input-info">
                        Sobrenome
                        <input
                            type="text"
                            placeholder={`Ex: ${userPlaceHolder.secondName}`}
                            value={userInfo.secondName}
                            onChange={(e) =>
                                dispatch({
                                    type: 'secondName',
                                    value: e.target.value,
                                })
                            }
                            onFocus={() =>
                                secondNameError.current?.classList.add('hidden')
                            }
                            tabIndex={modalOpen ? -1 : 1}
                            required={true}
                        />
                        <span
                            className="hidden input-error"
                            ref={secondNameError}
                        >
                            * Seu sobrenome deve conter pelo menos 2 caracteres
                        </span>
                    </label>

                    <label className="input-info">
                        Email
                        <input
                            type="email"
                            placeholder={`Ex: ${userPlaceHolder.email}`}
                            value={userInfo.email}
                            onChange={(e) =>
                                dispatch({
                                    type: 'email',
                                    value: e.target.value,
                                })
                            }
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
                                value={userInfo.birthDate}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'birthDate',
                                        value: e.target.value,
                                    })
                                }
                                tabIndex={modalOpen ? -1 : 1}
                                required={true}
                            />
                        </label>

                        <label className="input-info">
                            CPF
                            <input
                                type="text"
                                placeholder="000.000.000-00"
                                value={userInfo.cpf}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'cpf',
                                        value: e.target.value,
                                    })
                                }
                                tabIndex={modalOpen ? -1 : 1}
                                required={true}
                            />
                        </label>
                    </div>
                </div>
                <button
                    tabIndex={modalOpen ? -1 : 1}
                    disabled={userInfo.agree ? false : true}
                    className="btn-form"
                >
                    Prosseguir{' '}
                    <img src={userInfo.agree ? arrow : disabledArrow} alt="" />
                </button>
            </form>

            {modalOpen ? (
                <Modal
                    firstName={userInfo.firstName}
                    secondName={userInfo.secondName}
                    email={userInfo.email}
                    cpf={userInfo.cpf}
                    clearInputs={dispatch}
                />
            ) : null}
        </>
    );
};

export default Form;
