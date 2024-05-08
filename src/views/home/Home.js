import { render } from "@testing-library/react";
import React, { Component } from "react";
import '../../css/App.css';
import '../../css/Texts.css';

class Home extends Component {
    render() {
        return(
            <div className="box_container box_shadow text_centered">
                <div className="profile_pic"></div>
                <h1 className="text_teal_color">Olá, eu sou Thiago</h1>
                <span className="full_width">
                    <p>Desenvolvedor <i className="text_light text_cutted">front-end</i> mobile</p>
                </span>
            </div>
        );
    };
}

export default Home;