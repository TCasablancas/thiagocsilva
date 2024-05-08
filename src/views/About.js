import React, { Component } from "react";
import AlertBox from "../components/boxes/AlertBox";
import '../css/App.css';
import '../css/Texts.css';

class About extends Component {
    render() {
        return(    
            <div className="box_container box_shadow text_centered">
                <AlertBox 
                    title="Hey, recrutador..." 
                    description="Se você estiver procurando pelo meu currículo, é só baixar clicando ali do lado."
                    color="alert_box_message"
                    buttonColor="teal_dark_button"
                    state={ true }
                />
            </div>
        );
    };
}

export default About;