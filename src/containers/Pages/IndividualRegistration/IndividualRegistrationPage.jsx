import React from "react";
import HeaderRegister from "../../components/Header/HeaderIndividualRegistration";
import Input from "../../components/Utils/Input/Input";

const RegisterPage = () => {
    return (
        <>
        <div className="container">
            <HeaderRegister>
                <Input type="text" id="search" placeholder="Digite aqui sua pesquisa..."/>
                <i class="fa fa-search"></i>
            </HeaderRegister>
        </div>
        </>
    )
}

export default RegisterPage;