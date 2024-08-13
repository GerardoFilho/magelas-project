import React from "react";
import "../EnterButton/enterButton.css"

const EnterButton = (props) => {
    return (
        <div>
            <button className="enter-button" disabled={props.disabled}><strong>{props.children}</strong></button>
        </div>
    )
}

export default EnterButton;