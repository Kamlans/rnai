import React from 'react'
import { Nav, NavDropdown, Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from "react-router-dom";
import './navbar.css';


function NavBarComponent() {
    return (
        <div >


            <Navbar collapseOnSelect expand="lg" bg="#fff" variant="light" fixed="top">
               
                    <Navbar.Brand>
                        <Nav.Link to="/home" activeClassName="active" id="logo"  >
                            LOGO
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                           
                        <Nav.Link to="/home" activeClassName="active" id="logo "  >
                            dfd
                            </Nav.Link>

                            <Nav.Link to="/home" activeClassName="active" id="logo " >
                                LOGO2
                            </Nav.Link>

                            <Nav.Link to="/home" activeClassName="active" id="logo " >
                                LOGO2
                            </Nav.Link>

                            <Nav.Link to="/home" activeClassName="active" id="logo " >
                                LOGO2
                            </Nav.Link>

                            <Nav.Link to="/home" activeClassName="active" id="logo " >
                                LOGO2
                            </Nav.Link>

                            
                            <Nav.Link to="/home" activeClassName="active" id="logo">
                                LOGO3
                            </Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item >

                                    <Nav.Link to="/home" activeClassName="active" id="logo"   >
                                        LOGO
                                    </Nav.Link>
                                </NavDropdown.Item>
                                
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
               
            </Navbar>



        </div>
    )
}

export default NavBarComponent
