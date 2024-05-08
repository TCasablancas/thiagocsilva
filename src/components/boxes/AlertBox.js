import React, { Component } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import MainButton from "../buttons/MainButton";
import '../../css/Button.css';

class AlertBox extends Component {
    constructor(props) {
        super(props);
        this.title;
        this.description;
        this.color;
        this.buttonColor;
        this.state = { hasButton: false };
    }

    render() {
        const hasButton = this.state.hasButton;
        let button;

        if (hasButton) {
            button = <MainButton title="Baixar" />
        }

        return(
            <div className={ `main_alert_box box_shadow ${ this.props.color }` }>
                <div className="alert_data_container">
                    <div className="left_icon"><GrDocumentPdf /></div>
                    <dl>
                        <dt>{ this.props.title }</dt>
                        <dd>{ this.props.description }</dd>
                    </dl>
                </div>
                <MainButton title="Download" color={ `${ this.props.buttonColor } right_button` } />
                { button }
            </div>
        );
    }
}

export default AlertBox;