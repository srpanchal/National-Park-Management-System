import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Container} from "react-bootstrap";

class Activities extends React.Component {
    render() {
        return (
            <Container>
                <h3> Activities</h3>
                <Row>
                    <Col s={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Camping</Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer> <Link to="/activityBooking">Book Now</Link></Card.Footer>
                    </Card>
                    </Col>
                    <Col s={4}>
                   
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Hiking</Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer> <Link to="/activityBooking">Book Now</Link></Card.Footer>
                    </Card>
                    </Col>
                    <Col s={4}>
                    <Card style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>Tour</Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer> <Link to="/activityBooking">Book Now</Link></Card.Footer>

                    </Card>
                    </Col>


                </Row>
          </Container>

        );
    }

}

export default Activities;