/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React, { useState } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { getUser } from '../../Utils/helper';

const AddAccount = ({ onSubmit }) => {
  const [transNum, setTransNum] = useState("");
  const [purpose, setPurpose] = useState("");
  const [type, setType] = useState("Debit");
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (form.checkValidity()) {
      onSubmit({
        transaction_id: transNum,
        pupose: purpose,
        type,
        amount,
        details,
        emp_id: getUser().emp_id
      });
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Control
        required
        className="mb-2 mr-sm-2"
        placeholder="Transaction Number"
        value={transNum}
        onChange={e => setTransNum(e.target.value)}
      />
      <Form.Control
        required
        className="mb-2 mr-sm-2"
        placeholder="Purpose"
        value={purpose}
        onChange={e => setPurpose(e.target.value)}
      />
      <Form.Control
        as="select"
        required
        className="mb-2 mr-sm-2"
        custom
        value={type}
        onChange={e => setType(e.target.value)}
      >
        <option value="Debit">Debit</option>
        <option value="Credit">Credit</option>
      </Form.Control>
      <Form.Control
        required
        className="mb-2 mr-sm-2"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <Form.Control
        as="textarea"
        required
        placeholder="Details"
        className="mb-2 mr-sm-2"
        value={details}
        onChange={e => setDetails(e.target.value)}
      />
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

export default AddAccount;
