import React from 'react';
import {Link} from 'react-router-dom';




const Navbar = () => {
    return (
        <div className=" bg-dark" >
            <nav className="navbar navbar-expand-md navbar-dark bg-dark text-uppercase container ">
                <Link className="navbar-brand" to="/"><span><i className="fa fa-home"></i></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Skill">Skill</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Education">Education</Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tools
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/Calculator">Calculator</Link>
                                <Link className="dropdown-item" to="/BMI">BMI Calculator</Link>
                                <Link className="dropdown-item" to="/CurrencyC">Currency Converter</Link>
                                <Link className="dropdown-item" to="/Temperature">Temperature Converter</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            NEUB Corner
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/NEUB">NEUB Fee Calculator</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;