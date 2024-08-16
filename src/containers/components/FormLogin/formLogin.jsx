import React from "react";
import "../FormLogin/formLogin.css"
import Input from "../Utils/Input/Input";

function FormLogin(props) {
    return (
        <div className="form">
            <Input
                htmlForm="username"
                label="Email:"
                type="text"
                id="username"
                handleEmailChange={props.handleEmailChange}
                email={props.email}
            />

            <Input
                htmlForm="password"
                label="Senha:"
                type="password"
                id="password"
                handlePasswordChange={props.handlePasswordChange}
                password={props.password}
            />
            <div className="forgot-password">
                <a href="#">Esqueceu sua senha?</a>
            </div>
        </div>
    )
}

export default FormLogin;