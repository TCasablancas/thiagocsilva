import { render } from "@testing-library/react";
import React, { Component } from "react";
import emoji from '../images/thiago_emoji.JPG';
import '../css/App.css';
import '../css/Texts.css';

import { FaSwift, FaReact } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { SiReactivex } from "react-icons/si";

class Home extends Component {
    render() {
        return(
            <div className="box_container box_shadow text_centered">
                <div className="profile_pic box_shadow">
                    <img src={ emoji } alt=""/>
                </div>
                <h1 className="text_teal_color">Olá, eu sou Thiago</h1>
                <span className="full_width">
                    <p>Desenvolvedor Sênior <i className="text_light text_cutted">front-end</i> Mobile</p>
                </span>
                 
                <div className="padding_top_huge">
                    <p>Trabalho com essas tecnologias</p>
                    <ul className="ul_horizontal">
                        <li className="h_margin_small">
                            <dl className="large_list_icon">
                                <dt className="li_icon"><FaSwift /></dt>
                                <dd className="description_small">Swift</dd>
                            </dl>
                        </li>
                        <li className="h_margin_small">
                            <dl className="large_list_icon">
                                <dt><SiReactivex /></dt>
                                <dd className="description_small">RXSwift</dd>
                            </dl>
                        </li>
                        <li className="h_margin_small">
                            <dl className="large_list_icon">
                                <dt><TbBrandKotlin /></dt>
                                <dd className="description_small">Kotlin</dd>
                            </dl>
                        </li>
                        <li className="h_margin_small">
                            <dl className="large_list_icon">
                                <dt><RiFlutterFill /></dt>
                                <dd className="description_small">Flutter</dd>
                            </dl>
                        </li>
                        <li className="h_margin_small">
                            <dl className="large_list_icon">
                                <dt><FaReact /></dt>
                                <dd className="description_small">React</dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
}

export default Home;