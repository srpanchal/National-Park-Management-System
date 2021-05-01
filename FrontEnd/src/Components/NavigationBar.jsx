import React from "react";
import { Link } from "react-router-dom";
import { Navbar} from "react-bootstrap";
import { Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";


class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">National Park</Navbar.Brand>
    
      <Navbar.Collapse className="justify-content-end">    
        <Nav>
        <Nav> <span style={{paddingRight: '10px'}}><Link to="/">Home</Link></span></Nav>
          <Nav><span style={{paddingRight: '10px'}}><Link to="/about">About</Link></span></Nav>
          <Nav>
            <span style={{paddingRight: '10px'}}>
          <Link to="/login">Login</Link>
          </span>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavigationBar;
