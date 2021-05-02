import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';

import Accounting from './Accounting';
import Inventory from './Inventory';

export default function Login() {
  let { path, url } = useRouteMatch();

  return (
    <Container>
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/employee-home">Nation Park</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href={`${url}/inventory`}>Inventory</Nav.Link>
        <Nav.Link href={`${url}/account`}>Account</Nav.Link>
      </Nav>
      </Navbar>
      <Switch>
        <Route path={`${path}/inventory`}>
          <Inventory />
        </Route>
        <Route path={`${path}/account`}>
          <Accounting />
        </Route>
      </Switch>
    </Container>
  );
}