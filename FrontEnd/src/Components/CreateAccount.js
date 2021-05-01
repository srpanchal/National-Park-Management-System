import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export default function CreateAccount() {
  return (
    <Container className="mt-5 p-5">
      <Row className="mb-5">
        <Col md={{ span: 4, offset: 4 }}>
          <h2>Create Account</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter address" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}