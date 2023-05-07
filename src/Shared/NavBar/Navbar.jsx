import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Img/jhonsky_logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div data-theme="luxury">
            <div className="container-fluid bg-background">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} width={150} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Our Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Our Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>

        </div>
    );
}

export default Navbar;
