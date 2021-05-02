import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { API_URL, USER_ROLES } from '../Utils/constants';
import { storeUser } from '../Utils/helper';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const onSubmit = (data) => {
    fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        delete json.password;
        storeUser(json);
        
        if (history.role === USER_ROLES.toursit) {
          history.replace('/');
        } else {
          history.replace('/employee-home');
        }
      });
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (form.checkValidity()) {
      onSubmit({
        email,
        password
      });
    }
  };

  return (
    <Container className="mt-5 p-5">
      <Row className="mb-5">
        <Col md={{ span: 4, offset: 4 }}>
          <h2>Login</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Button className="align-self-start" variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
              <Col className="text-end">
                <Link className="align-self-end" to="/create-account">Create Account</Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}