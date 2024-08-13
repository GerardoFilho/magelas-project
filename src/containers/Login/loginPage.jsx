import React, { useState } from "react";
import "../Login/loginPage.css"
import logo from "../../assets/logo.png"
import FormLogin from "../components/FormLogin/FormLogin";
import EnterButton from "../components/EnterButton/EnterButton";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (event) => { //Essa funcao acompanha em tempo real os valores passados no campo input email
        const novoValor = event?.target?.value; //Aqui é onde o conteudo é capturado. Esse event com '?' indica que ele deve ignorar valores undefined quando for o caso
        setEmail(novoValor); //Aqui o hook altera o valor da variavel
        console.log('Valor atual do input:', novoValor);
    };

    const handlePasswordChange = (event) => { //Essa funcao faz o mesmo do e-mail, porem com o campo senh
        const novoValor = event?.target?.value;
        setPassword(novoValor);
    }

    return (
        <>
        <div className="container">
            <div className="left-side">
                <p>
                    <strong>
                    <h1 className="title-left">Não possui cadastro?</h1>
                    </strong>
                    <p className="p-left">
                        Entre em contato com o Núcleo de atendimento <br></br>Social da sua unidade e solicite o acesso.
                    </p>
                </p>
            </div>

            <div className="right-side">
                <div className="header-login">
                    <img src={logo} alt="Logo Casulo" />
                    <h2>Seja bem-vindo ao <span className="title-color">Cas<span className="title-color-u">u</span>lo</span></h2>
                    <p className="p-right">
                        <strong>Faça login</strong> para acessar sua conta.
                    </p>
                <FormLogin handleEmailChange={(e) => handleEmailChange(e)} email={email} handlePasswordChange={(e) => handlePasswordChange(e)} password={password}/>
                <EnterButton disabled={email.length === 0 || password.length === 0}>Entrar</EnterButton>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;