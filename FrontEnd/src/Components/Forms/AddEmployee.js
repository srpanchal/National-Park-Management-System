import React, { useState } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';

const AddEmployee = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  // const [dept, setDept] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (form.checkValidity()) {
      onSubmit({
        emp_name: name,
        role,
        emp_dept: "",
        age,
        gender,
        salary,
        phone
      });
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          required
          className="mb-2 mr-sm-2"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Role</Form.Label>
        <Form.Control
          required
          className="mb-2 mr-sm-2"
          placeholder="Role"
          value={role}
          onChange={e => setRole(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          required
          className="mb-2 mr-sm-2"
          custom
          value={gender}
          onChange={e => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Age</Form.Label>
        <Form.Control
          required
          className="mb-2 mr-sm-2"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Salary</Form.Label>
        <Form.Control
          required
          className="mb-2 mr-sm-2"
          placeholder="Salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          required
          className="mb-2 mr-sm-2"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </Form.Group>
      <Container className="mb-2 mr-sm-2">
        <Row className="justify-content-end">
          <Col md="4">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  )
}

export default AddEmployee;
