import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse, NavItem } from 'reactstrap';


class Navigation extends Component {
    state = {
        isNavOpen: false
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar dark color="dark" expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.navToggle} />

                        <NavbarBrand >
                            <Link to="/" className='text-white'><span><i className="fa fa-home"></i></span></Link>
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <Link to='/About' className="nav-link active " > About </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/Skill' className="nav-link ">Skill </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/Education' className="nav-link ">Education</Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        NEUB Corner
                                    </DropdownToggle>
                                    < DropdownMenu right> 
                                        <DropdownItem>
                                            <Link className='nav-link text-dark' to="/NEUB">NEUB Fee Calculator</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <Link to='/Blog' className="nav-link ">Blog</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/contact' className="nav-link ">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>
            </div>
        );
    }
}

export default Navigation;












// <div className=" bg-dark" >
//                 <nav className="navbar navbar-expand-md navbar-dark bg-dark text-uppercase container ">
//                     <Link className="navbar-brand" to="/"><span><i className="fa fa-home"></i></span></Link>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/About">About </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/Skill">Skill</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/Education">Education</Link>
//                             </li>

//                             <li className="nav-item dropdown">
//                                 <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                     Tools
//                                 </Link>
//                                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <Link className="dropdown-item" to="/Calculator">Calculator</Link>
//                                     <Link className="dropdown-item" to="/BMI">BMI Calculator</Link>
//                                     <Link className="dropdown-item" to="/CurrencyC">Currency Converter</Link>
//                                     <Link className="dropdown-item" to="/Temperature">Temperature Converter</Link>
//                                 </div>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                     NEUB Corner
//                                 </Link>
//                                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <Link className="dropdown-item" to="/NEUB">NEUB Fee Calculator</Link>
//                                 </div>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/Blog">Blog</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/Contact">Contact</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </div>