/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { getUser, isAdmin, isAccountClerk, isDepartmentManager } from '../Utils/helper';
import { EMPLOYEE_ROLE_BASED_TASKS } from '../Utils/constants';

import Accounting from './Accounting';
import Inventory from './Inventory';
import CreateEmployee from './CreateEmployee';

export default function Login() {
  let { path, url } = useRouteMatch();
  const user = getUser();

  return (
    <Container fluid>
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">National Park</Navbar.Brand>
      <Nav className="mr-auto">
        {(isAdmin() || isDepartmentManager()) && (<Nav.Link href={`${url}/inventory`}>Inventory</Nav.Link>)}
        {(isAdmin() || isAccountClerk()) && (<Nav.Link href={`${url}/account`}>Account</Nav.Link>)}
        {isAdmin() && (<Nav.Link href={`${url}/create-employee`}>Add Employee</Nav.Link>)}
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href={user ? '/sign-out' : '/login'} className="align-self-end">
          {user ? 'Sign Out' : 'Login/Create Account'}
        </Nav.Link>
      </Nav>
      </Navbar>
      <Container>
        <Row className="mt-5 pt-5 justify-content-center">
          <Col md="auto">
            <h3>Welcome to National Park Management Portal</h3>
            <p>Below are tasks that can be performed based on your role</p>
            <p>Role - {user.role}</p>
            <ul>
              {EMPLOYEE_ROLE_BASED_TASKS[user.role].map(t => (
                <li>{t}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      <Switch>
        {(isAdmin() || isDepartmentManager()) && (
          <Route path={`${path}/inventory`}>
            <Inventory />
          </Route>
        )}
        {(isAdmin() || isAccountClerk()) && (
          <Route path={`${path}/account`}>
            <Accounting />
          </Route>
        )}
        {isAdmin() && (
          <Route path={`${path}/create-employee`}>
            <CreateEmployee />
          </Route>
        )}
      </Switch>
    </Container>
  );
}