import React from "react";
import logo from "../../../assets/logo.png"
import profileIcon from "../../../assets/profile-icon.png"
import "../Header/headerIndividualRegistration.css"

const HeaderRegister = ({ children }) => {
    return (
        <>
        <div className="header-content-default">
            <img src={logo} alt="Logo Casulo" className="logo-casulo"/>
            <span><strong>Cas<span className="title-color-u">u</span>lo</strong></span>

            {children}

            <a href="#"><strong>Usuário</strong></a><img src={profileIcon} alt="Icone de perfil" className="profile-icon"/>
        </div>
        </>
    )
}

export default HeaderRegister;