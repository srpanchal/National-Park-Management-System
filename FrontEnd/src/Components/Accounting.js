import React, { useEffect, useState } from 'react';
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { API_URL } from '../Utils/constants';
import AddAccountForm from './Forms/AddAccount';

export default function Accounting() {
  const [fetchAccountTrigger, setFetchAccountTrigger] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/account`)
      .then(res => res.json())
      .then(json => {
        setAccounts(json);
      });

  }, [fetchAccountTrigger]);

  const onSubmitTransaction = (data) => {
    fetch(`${API_URL}/account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        if (json === true) {
          setFetchAccountTrigger(fetchAccountTrigger + 1);
        }
        setShowAddForm(false);
      });
  }

  const renderAddAccountForm = () => (
    <Row className="justify-content-end">
      <Col md="4">
        <AddAccountForm onSubmit={onSubmitTransaction} />
      </Col>
    </Row>
  );

  const renderAccounts = () => (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Transaction Number</th>
          <th>Purpose</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(a => (
          <tr key={a.transaction_id}>
            <td>{a.transaction_id}</td>
            <td>{a.pupose}</td>
            <td>{a.type}</td>
            <td>{a.amount}</td>
            <td>{a.details}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
  
  const renderNoAccounts = () => (
    <Row className="justify-content-center mt-5">
      <Col md="6" className="text-center mt-5">
        <p>Sorry!! No Accounts</p>
      </Col>
    </Row>
  );

  return (
    <Container>
      <Row className="justify-content-between mt-5">
        <Col>
          <h1>Accounts</h1>
        </Col>
        <Col md="auto">
          <Button
            disabled={showAddForm}
            onClick={() => setShowAddForm(true)}
          >
            Add Transaction
          </Button>
        </Col>
      </Row>
      {showAddForm && renderAddAccountForm()}
      {accounts.length
        ? renderAccounts()
        : renderNoAccounts()
      }
    </Container>
  );
}