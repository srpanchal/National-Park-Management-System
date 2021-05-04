/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React, { useState } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { getUser } from '../../Utils/helper';

const AddInventory = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (form.checkValidity()) {
      onSubmit({
        name,
        category,
        quantity,
        cost_per_item: cost,
        emp_id: getUser().emp_id
      });
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Control
        required
        className="mb-2 mr-sm-2"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Form.Control
        required
        className="mb-2 mr-sm-2"
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <Form.Control
        required
        className="mb-2 mr-sm-2"
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
      <Form.Control
        as="textarea"
        required
        placeholder="Cost Per Item"
        className="mb-2 mr-sm-2"
        value={cost}
        onChange={e => setCost(e.target.value)}
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

export default AddInventory;
