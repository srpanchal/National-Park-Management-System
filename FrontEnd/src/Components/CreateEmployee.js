import React from 'react';
import AddEmployeeForm from './Forms/AddEmployee';
import { API_URL } from '../Utils/constants';
import { Container, Row, Col } from 'react-bootstrap';

const CreateEmployee = () => {
  const onSubmit = (data) => {
    fetch(`${API_URL}/employees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => console.log('---ADDED EMPLOYEE---', json));
  }

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md="auto">
          <h3>Create Employee</h3>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md="6">
          <AddEmployeeForm onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
}

export default CreateEmployee;
