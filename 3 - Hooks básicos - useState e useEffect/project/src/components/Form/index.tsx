const Form = () => (
    <form>
        <div className="form-info">
            <h1 className="form-title">Informações do Perfil</h1>
            <p className="instruction">
                Preencha o formulário com seus dados pessoais.
            </p>
        </div>
        <label className="checkbox-input">
            <input type="checkbox" className="checkbox" />
            <div>
                Eu concordo com os{' '}
                <a className="terms-anchor" href="http://google.com" target='_blank'>
                    Termos de Uso
                </a>
            </div>
        </label>
        <div className="personal-info">
            <h2 className="info-title">Dados Pessoais</h2>
            <p className="info-paragraph">
                Prometemos não vender seus dados para agências de marketing ;)
            </p>
            <label className="input-info">
                Nome
                <input type="text" />
            </label>
            <label className="input-info">
                Sobrenome
                <input type="text" />
            </label>
            <label className="input-info">
                Email
                <input type="email" />
            </label>
            <label className="input-info">
                Data de nascimento (DD/MM/AAAA)
                <input type="text" placeholder="00/00/0000" />
            </label>
            <label className="input-info">
                CPF
                <input type="text" placeholder="000.000.000-00" />
            </label>
        </div>
        <button>Prosseguir →</button>
    </form>
);

export default Form;
