import React from "react";
import '../../css/Button.css';

function MainButton(props) {
    return(
        <button className={ `main_button ${ props.color }`}>
            <p>{ props.title }</p>
        </button>
    );
}

export default MainButton;