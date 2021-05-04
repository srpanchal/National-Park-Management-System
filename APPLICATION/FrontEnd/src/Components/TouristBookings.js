import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { API_URL } from '../Utils/constants';
import { getUser } from '../Utils/helper';

const TouristBookings = () => {
  const[bookings, setBookings] = useState([]);
  const user = getUser();

  useEffect(() => {
    fetch(`${API_URL}/booking?tourist_id=${user.id}`)
      .then(res => res.json())
      .then(json => setBookings(json))
  }, []);

  const renderBooking = () => (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Activity</th>
          <th>Site</th>
          <th>Booking date</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(a => (
          <tr key={a.booking_date}>
            <td>{a.actv_type}</td>
            <td>{a.site}</td>
            <td>{a.booking_date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h3>My Bookings</h3>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          {renderBooking()}
        </Col>
      </Row>
    </Container>
  )
}

export default TouristBookings;

