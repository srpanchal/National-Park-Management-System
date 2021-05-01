import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export default function Login() {
  return (
    <Container className="mt-5 p-5">
      <Row className="mb-5">
        <Col md={{ span: 4, offset: 4 }}>
          <h2>Login</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form>
            <Form.Group controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Row>
              <Col>
                <Button className="align-self-start" variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
              <Col className="text-end">
                <Link className="align-self-end" to="/">Create Account</Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}