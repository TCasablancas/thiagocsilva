import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./navigation.css";

const NavBar = () => {
    return(
        <header>
            <nav>
                <NavLink to="/" className="nav_logo">
                    <dl>
                        <dt>_thiago<p>silva</p></dt>
                        <dd>mobile developer</dd>
                    </dl>
                </NavLink>

                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <NavLink to="/" className="nav_link">INÍCIO</NavLink>
                            <NavLink to="/projects" className="nav_link">PROJETOS</NavLink>
                            <NavLink to="/about" className="nav_link">SOBRE</NavLink>
                            <NavLink to="/contact" className="nav_link">CONTATO</NavLink>
                        </li>
                    </ul>
                </div>

                <ul className="nav_media">
                    <li className="nav_icon">
                        <NavLink to="https://www.linkedin.com/in/thyagoacsilva/" target="_blank" className="nav_icon_link">
                            <FaLinkedin />
                        </NavLink>
                    </li>
                    <li className="nav_icon">
                        <NavLink to="https://www.instagram.com/thiagomobiledev" target="_blank" className="nav_icon_link">
                            <FaInstagram />
                        </NavLink>
                    </li>
                    <li className="nav_icon">
                        <NavLink to="https://github.com/TCasablancas/" target="_blank" className="nav_icon_link">
                            <FaGithub />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;