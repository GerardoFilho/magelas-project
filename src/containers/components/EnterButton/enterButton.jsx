import React from "react";
import "../EnterButton/enterButton.css"

const EnterButton = (props) => {
    return (
        <button className={props.className} type={props.type} disabled={props.disabled}><strong>{props.children}</strong></button>
    )
}

export default EnterButton;