import React from "react";

const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.htmlForm}>{props.label}</label>
            <input type={props.type} id={props.id} onChange={props.handleEmailChange || props.handlePasswordChange} value={props.email || props.password}/>
        </div>
    );
}

export default Input;