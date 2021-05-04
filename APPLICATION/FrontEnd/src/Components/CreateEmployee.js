/* SJSU CMPE 138 Spring 2021 TEAM8 */

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
    .then(res => {
      if (res.ok)
        return res.json();

      return null;
    })
    .then(json => {
      if (json)
        alert("Employee Created Successfully!!");
      else
        alert("Employee Creation Failed!!");
    });
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

