import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function NavbarMenu(props) {
    return (
        <React.Fragment >
            <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">N A R I N</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Features">Features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Pricing">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Team">Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ContactUs">Contact</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-danger waves-effect" type="submit">Try it Free</button>
                            </form>
                        </div>
                    </div>
                </nav>
           
        </React.Fragment>
    );
}

export default NavbarMenu;