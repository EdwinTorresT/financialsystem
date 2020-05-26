import React, { useState } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Logo from "assets/images/ecci-logo.png";
import "assets/styles/index.scss";

function HeaderComponent() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar bg="light" expand="lg" expanded={expanded}>
            <Navbar.Brand href="/">
                <img
                    alt="Universidad ECCI"
                    src={Logo}
                    width="150"
                    height="45"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item className="item-menu">
                        <NavLink exact to="/" onClick={() => setExpanded(false)} activeClassName="active">
                            Inicio
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item className="item-menu">
                        <NavLink exact to="/api" onClick={() => setExpanded(false)} activeClassName="active">
                            API
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item className="item-menu">
                        <NavLink exact to="/credits" onClick={() => setExpanded(false)} activeClassName="active">
                            Creditos
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item className="item-menu">
                        <NavLink exact to="/contact" onClick={() => setExpanded(false)} activeClassName="active">
                            Contacto
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(HeaderComponent);