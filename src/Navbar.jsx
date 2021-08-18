import React from 'react'
import { Nav, NavDropdown, Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink  , Link} from "react-router-dom";
import './navbar.css';


function NavBarComponent() {
    return (
        <div >


            <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="#fff" variant="light"  >

                <Navbar.Brand>
                    <NavLink to="/home" activeClassName="active" id="logo" className="navbarLink" >
                        Vivek 
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink to="/aboutus" activeClassName="active" className="navbarLink"  >
                            About us
                        </NavLink>

                        


                        <Nav.Link to="/home" activeClassName="active" id="logo">
                            LOGO3
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item >

                                <Nav.Link to="/home" activeClassName="active" id="logo"   >
                                  dfksfsf
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
