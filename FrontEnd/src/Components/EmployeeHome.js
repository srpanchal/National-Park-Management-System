import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { isAdmin } from '../Utils/helper';

import Accounting from './Accounting';
import Inventory from './Inventory';
import AddEmployee from './Forms/AddEmployee';

export default function Login() {
  let { path, url } = useRouteMatch();

  return (
    <Container>
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Nation Park</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href={`${url}/inventory`}>Inventory</Nav.Link>
        <Nav.Link href={`${url}/account`}>Account</Nav.Link>
        {isAdmin() && (<Nav.Link href={`${url}/add-employee`}>Add Employee</Nav.Link>)}
      </Nav>
      </Navbar>
      <Switch>
        <Route path={`${path}/inventory`}>
          <Inventory />
        </Route>
        <Route path={`${path}/account`}>
          <Accounting />
        </Route>
        {isAdmin() && (
          <Route path={`${path}/add-employee`}>
            <AddEmployee />
          </Route>
        )}
      </Switch>
    </Container>
  );
}