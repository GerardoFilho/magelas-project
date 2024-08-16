import React from "react";
import "../Input/input.css"

const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.htmlForm}>{props.label}</label>
            <input className={props.className} type={props.type} id={props.id} onChange={props.handleEmailChange || props.handlePasswordChange} value={props.email || props.password} placeholder={props.placeholder} name={props.name} {...props.register}/>
        </div>
    );
}

export default Input;