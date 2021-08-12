import { useContext } from 'react';
import check from '../../assets/modal-check.png';
import ModalContext from '../../ModalContext';

interface IModalProps {
    firstName: String;
    secondName: String;
    email: String;
    cpf: String;
}

const Modal = ({ firstName, secondName, email, cpf }: IModalProps) => {
    const [modalOpen, setModal] = useContext(ModalContext);

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <img src={check} alt="check-symbol" className="check-img" />
                    <div>
                        <h3 className="modal-title">Cadastro bem sucedido</h3>
                        <p>Seus dados foram salvos com sucesso!</p>
                    </div>
                </div>
                <div className="modal-text">
                    <p>
                        Parabéns,{' '}
                        <strong>{`${firstName} ${secondName}`}</strong> Você deu
                        o primeiro passo da maior decisão de sua vida! Agora
                        possuímos todos os seus dados e iremos atrás de sua
                        família!
                    </p>
                    <p>
                        Seu e-mail, <strong>{email}</strong>, será bombardeado
                        diariamente com dezenas e dezenas de mensagens de spam.
                        Não adianta mudar, nós vamos te achar.
                    </p>
                    <p>
                        Seu CPF, <strong>{cpf}</strong>, será vítima de diversas
                        fraudes e compras ilegais, causando uma invasão da
                        Polícia Federal na sua residência!
                    </p>
                </div>
                <button
                    className="btn-modal"
                    onClick={() => setModal(!modalOpen)}
                >
                    Concluir
                </button>
            </div>
        </div>
    );
};
export default Modal;
