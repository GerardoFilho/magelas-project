import React from "react";
import "../RegisterUser/registerNewUser.css"
import FormRegister from "../../components/FormRegister/FormRegister";

const RegisterNewUSer = () => {
    return (
        <>
            <div className="container-newUser">
                <div className="modal-area">
                    <div className="content-modal" > {/* Posso criar varios nomes de classes para a mesma classe pra fins de organizacao */}
                        <h1>Novo por aqui? Crie sua conta.</h1>
                        <p className="description">Preencha o formulário abaixo e torne-se parte dessa história!</p>
                        <FormRegister />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterNewUSer;