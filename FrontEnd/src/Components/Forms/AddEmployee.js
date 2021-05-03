import React, { useState } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import {
  EMPLOYEE_ROLES,
  VETERINARY_DOC_TYPES,
  VETERINARY_DOC_SPECIALITIES,
  FOREST_OFFICER_POSTS
} from '../../Utils/constants';

const AddEmployee = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  // const [dept, setDept] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [forestOfficerPost, setForestOfficerPost] = useState("");
  const [vetType, setVetType] = useState("");
  const [vetSpeciality, setVetSpeciality] = useState("");
  const [vetDegree, setVetDegree] = useState("");
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
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          className="mb-2 mr-sm-2"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>
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
          as="select"
          required
          className="mb-2 mr-sm-2"
          custom
          value={role}
          onChange={e => setRole(e.target.value)}
        >
          {Object.values(EMPLOYEE_ROLES).map(r => (
            <option value={r}>{r}</option>
          ))}
          {/* <option value={EMPLOYEE_ROLES.ticketIssuer}>{EMPLOYEE_ROLES.ticketIssuer}</option>
          <option value={EMPLOYEE_ROLES.tourGuide}>{EMPLOYEE_ROLES.tourGuide}</option>
          <option value={EMPLOYEE_ROLES.forestOfficer}>{EMPLOYEE_ROLES.forestOfficer}</option>
          <option value={EMPLOYEE_ROLES.accountClerk}>{EMPLOYEE_ROLES.accountClerk}</option>
          <option value={EMPLOYEE_ROLES.vetDoc}>{EMPLOYEE_ROLES.vetDoc}</option> */}
        </Form.Control>
      </Form.Group>
      {role === EMPLOYEE_ROLES.forestOfficer && (
        <Form.Group>
          <Form.Label>Forest Officer Post</Form.Label>
          <Form.Control
            as="select"
            required
            className="mb-2 mr-sm-2"
            custom
            value={forestOfficerPost}
            onChange={e => setForestOfficerPost(e.target.value)}
          >
            {Object.values(FOREST_OFFICER_POSTS).map(fop => (
              <option value={fop}>{fop}</option>
            ))}
          </Form.Control>
        </Form.Group>
      )}
      {role === EMPLOYEE_ROLES.vetDoc && (
        <>
          <Form.Group>
            <Form.Label>Veterinary Doctor Type</Form.Label>
            <Form.Control
              as="select"
              required
              className="mb-2 mr-sm-2"
              custom
              value={vetType}
              onChange={e => setVetType(e.target.value)}
            >
              {Object.values(VETERINARY_DOC_TYPES).map(vt => (
                <option value={vt}>{vt}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Veterinary Doctor Speciality</Form.Label>
            <Form.Control
              as="select"
              required
              className="mb-2 mr-sm-2"
              custom
              value={vetSpeciality}
              onChange={e => setVetSpeciality(e.target.value)}
            >
              {Object.values(VETERINARY_DOC_SPECIALITIES).map(vs => (
                <option value={vs}>{vs}</option>
              ))}
              {/* <option value="Ticket Issuer">Ticket Issuer</option>
              <option value="Tour Guide">Tour Guide</option>
              <option value="Forest Officer">Forest Officer</option>
              <option value="Accounts Clerk">Accounts Clerk</option>
              <option value="Veterinary Doctor">Veterinary Doctor</option> */}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Veterinary Doctor Degree</Form.Label>
            <Form.Control
              required
              className="mb-2 mr-sm-2"
              placeholder="Veterinary Doctor Degree"
              value={vetDegree}
              onChange={e => setVetDegree(e.target.value)}
            />
          </Form.Group>
        </>
      )}
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
        <Row className="justify-content-center">
          <Col md="auto">
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
