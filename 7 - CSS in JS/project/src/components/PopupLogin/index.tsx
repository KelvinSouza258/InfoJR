import * as S from './styles';
import checkIcon from '../../assets/Icon.svg';
import xCircle from '../../assets/XCircle.svg';

interface IProps {
    loginMsg: boolean;
    successLogin: boolean;
}

const Popup = ({ loginMsg, successLogin }: IProps) => {
    return (
        <S.Popup>
            <div
                className={`${loginMsg ? 'show' : ''} ${
                    successLogin ? '' : 'error'
                }`}
            >
                {successLogin ? (
                    <>
                        <img src={checkIcon} alt="" />
                        <p>
                            Login efetuado com sucesso! Aguarde um momento
                            enquanto atualizamos a página
                        </p>
                    </>
                ) : (
                    <>
                        <img src={xCircle} alt="" />
                        <p>
                            Erro ao realizar login. Verifique suas credenciais e
                            tente novamente.
                        </p>
                    </>
                )}
            </div>
        </S.Popup>
    );
};

export default Popup;
