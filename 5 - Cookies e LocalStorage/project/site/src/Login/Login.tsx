import React from 'react'
import './Login.css'

export default function Login() {
  const [ativo, setAtivo] = React.useState(false)

  return (
    <section id="login" className={!ativo ? "login light" : "login dark"}>
      <header className="loginHeader">
        <button onClick={() => setAtivo(!ativo)} className={!ativo ? "btnSwitch light" : "btnSwitch dark"}>
          {!ativo ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <form action="" className={!ativo ? "formLogin light" : "formLogin dark"}>

        <div className="title">
          <h1 className={!ativo ? "formTitle light" : "formTitle dark"}>
            Fazer login
          </h1>
          <p className={!ativo ? "descriptionForm light" : "descriptionForm dark"}>
            Bem-vind@ de volta! Sentimos sua falta!
          </p>
        </div>


        <div className="inputs">
          <div className="inputGroup">
            <label htmlFor="email" className={!ativo ? "labelLogin light" : "labelLogin dark"}>
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Ex. abner.luis@infojr.com.br"
              className={!ativo ? "inputLogin light" : "inputLogin dark"}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password" className={!ativo ? "labelLogin light" : "labelLogin dark"}>
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Sua senha"
              className={!ativo ? "inputLogin light" : "inputLogin dark"}
            />
          </div>
        </div>

        <button className="btnSubmitForm" type="submit">
          Fazer login
        </button>
      </form>

    </section>
  )
}
