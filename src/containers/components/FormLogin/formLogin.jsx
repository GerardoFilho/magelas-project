import React from "react";
import "../FormLogin/formLogin.css"

function FormLogin() {
    return (
        <div className="form">
            <div>
                <label htmlFor="username">Email:</label>
                <input type="text" id="username" name="username"/>
            </div>

            <div>
                <label htmlFor="">Senha:</label>
                <input type="password" />
            <a href="#"><strong>Esqueceu sua senha?</strong></a>
            </div>
        </div>
    )
}

export default FormLogin;