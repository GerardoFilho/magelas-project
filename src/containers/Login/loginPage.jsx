import React from "react";
import "../Login/loginPage.css"
import logo from "../../assets/logo.png"
import FormLogin from "../components/FormLogin/formLogin";
import EnterButton from "../components/EnterButton/enterButton";

function Login() {
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
                <FormLogin />
                <EnterButton />
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;