/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React, { useEffect, useState } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { API_URL } from '../Utils/constants';
import AddInventoryForm from './Forms/AddInventory';

export default function Inventory() {
  const [fetchInventoryTrigger, setFetchInventoryTrigger] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/inventory`)
      .then(res => res.json())
      .then(json => {
        setInventory(json);
      });
  }, [fetchInventoryTrigger]);

  const onSubmit = (data) => {
    fetch(`${API_URL}/inventory`, {
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
        if (json !== null) {
          if (json === true) {
            setFetchInventoryTrigger(fetchInventoryTrigger + 1);
          }
          setShowAddForm(false);
        } else {
          alert('Inventroy Addition Failed!!');
        }
      });
  }

  const renderAddInventoryForm = () => (
    <Row className="justify-content-end">
      <Col md="4">
        <AddInventoryForm onSubmit={onSubmit} />
      </Col>
    </Row>
  );

  const renderInventory = () => (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Cost/Item</th>
          <th>Added By</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map(a => (
          <tr key={a.inv_id}>
            <td>{a.inv_id}</td>
            <td>{a.name}</td>
            <td>{a.category}</td>
            <td>{a.quantity}</td>
            <td>{a.cost_per_item}</td>
            <td>{a.emp_name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  const renderNoInventory = () => (
    <Row className="justify-content-center mt-5">
      <Col md="6" className="text-center mt-5">
        <p>Sorry!! No Inventory</p>
      </Col>
    </Row>
  );

  return (
    <Container>
      <Row className="justify-content-between mt-5">
        <Col>
          <h1>Inventory</h1>
        </Col>
        <Col md="auto">
          <Button
            disabled={showAddForm}
            onClick={() => setShowAddForm(true)}
          >
            Add Inventory
          </Button>
        </Col>
      </Row>
      {showAddForm && renderAddInventoryForm()}
      {inventory.length
        ? renderInventory()
        : renderNoInventory()
      }
    </Container>
  );
}