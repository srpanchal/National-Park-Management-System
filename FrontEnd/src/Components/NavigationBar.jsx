import React from "react";
import { Link } from "react-router-dom";
import { Navbar} from "react-bootstrap";
import { Nav} from "react-bootstrap";
import { getUser, isTouristOrTicketIssuer } from '../Utils/helper';


class NavigationBar extends React.Component {
  render() {
    const user = getUser();

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">National Park</Navbar.Brand>
    
      <Navbar.Collapse className="justify-content-end">    
        <Nav>
        <Nav> <span style={{paddingRight: '10px'}}><Link to="/">Home</Link></span></Nav>
        <Nav><span style={{paddingRight: '10px'}}><Link to="/about">About</Link></span></Nav>
        {isTouristOrTicketIssuer() && (
          <Nav>
            <span style={{paddingRight: '10px'}}>
              <Link to="/bookings">
                My Bookings
              </Link>
            </span>
          </Nav>
        )}
        <Nav>
          <span style={{paddingRight: '10px'}}>
            <Link to={user ? '/sign-out' : '/login'}>{user ? 'Sign Out' : 'Login/Create Account'}</Link>
          </span>
        </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavigationBar;
