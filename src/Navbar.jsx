import React from 'react'
import { Nav, NavDropdown, Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink  , Link} from "react-router-dom";
import './navbar.css';


function NavBarComponent() {
    return (
        <div >


            <Navbar  collapseOnSelect expand="lg" bg="#fff" variant="dark"  >

                <Navbar.Brand>
                    <NavLink to="/" activeClassName="active" id="logo" className="navbarLink" >
                        Vivek 
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: "white" }}>
                    <span style={{ color: " #1261A0"}} > &#9776;</span>

                    </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto" >
                        <NavDropdown title="PUBLICATIONS" id="collasible-nav-dropdown" className="navbarLink dropdown" style={{  color: "#3895D3" }}>
                            <NavDropdown.Item >

                                <NavLink to="/books" activeClassName="active" className="navbarLink"  >
                                    BOOKS
                                </NavLink>

                            </NavDropdown.Item>


                            <NavDropdown.Item>
                                <NavLink to="/bookchapters" activeClassName="active" className="navbarLink"  >
                                    BOOK CHAPTERS
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink to="/journals" activeClassName="active" className="navbarLink"  >
                                    JOURNALS
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/others" activeClassName="active" className="navbarLink"  >
                                    OTHERS
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="RESEARCH" id="collasible-nav-dropdown2" className="navbarLink dropdown" style={{  color:" #3895D3" }}>
                            <NavDropdown.Item >

                                <NavLink to="/funding" activeClassName="active" className="navbarLink"  >
                                    FUNDING
                                </NavLink>

                            </NavDropdown.Item>


                            <NavDropdown.Item>
                                <NavLink to="/overview" activeClassName="active" className="navbarLink"  >
                                    OVERVIEW
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item>
                                <NavLink to="/resources" activeClassName="active" className="navbarLink"  >
                                    RESOURCES
                                </NavLink>
                            </NavDropdown.Item>


                        </NavDropdown>

                        <NavDropdown title="TEAM" id="collasible-nav-dropdown3" className="navbarLink dropdown" style={{  color: "#3895D3" }}>
                            <NavDropdown.Item >

                                <NavLink to="/gallery" activeClassName="active" className="navbarLink"  >
                                    GALLERY
                                </NavLink>

                            </NavDropdown.Item>


                            <NavDropdown.Item>
                                <NavLink to="/labalumini" activeClassName="active" className="navbarLink"  >
                                    LAB ALUMINI
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink to="/pi" activeClassName="active" className="navbarLink"  >
                                    PRINCIPAL \n INVESTIGATOR
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item>
                                <NavLink to="/whoarewe" activeClassName="active" className="navbarLink"  >
                                    WHO ARE WE
                                </NavLink>
                            </NavDropdown.Item>


                        </NavDropdown>

                       
                    </Nav>
                    <Nav>
                        <NavLink to="/aboutus" activeClassName="active" className="navbarLink"  >
                            ABOUT US
                        </NavLink>

                        <NavLink to="/contactus" activeClassName="active" className="navbarLink"  >
                          CONTACT US
                        </NavLink>

                        <NavLink to="/labnews" activeClassName="active" className="navbarLink"  >
                           LAB NEWS
                        </NavLink>

                        <NavLink to="/profile" activeClassName="active" className="navbarLink"  >
                            PROFILE
                        </NavLink>

                        <NavLink to=" "  className="navbarLink"  >
                           
                        </NavLink>

                       
                    </Nav>
                </Navbar.Collapse>

            </Navbar>



        </div>
    )
}

export default NavBarComponent
