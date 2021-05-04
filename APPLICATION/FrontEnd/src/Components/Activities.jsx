/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Container} from "react-bootstrap";
import { getUser, canIssueOrBookTicket } from '../Utils/helper';

class Activities extends React.Component {
    render() {
        const user = getUser();

        return (
            <Container className="mb-5 mt-5">
                <h3> Activities</h3>
                <Row>
                    <Col s={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Camping</Card.Title>

                            <Card.Text>
                                Camping is an outdoor activity involving overnight stays away
                                from home with or without a shelter, such as a tent or a recreational
                                vehicle. Typically participants leave developed areas to spend time
                                outdoors in more natural ones in pursuit of activities providing them
                                enjoyment.
                            </Card.Text>

                        </Card.Body>
                        {(canIssueOrBookTicket() || !user) && (
                            <Card.Footer>
                                <Link to={`${user ? '/campingBooking' : '/login'}`}>
                                    Book Now
                                </Link>
                            </Card.Footer>
                        )}
                    </Card>
                    </Col>
                    <Col s={4}>
                   
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Hiking</Card.Title>

                            <Card.Text>
                                Hiking is a long, vigorous walk, usually on trails or footpaths in the
                                countryside. Walking for pleasure developed in Europe during the eighteenth
                                century. Religious pilgrimages have existed much longer but they involve
                                walking long distances for a spiritual purpose associated with specific
                                religions.
                            </Card.Text>

                        </Card.Body>
                        {(canIssueOrBookTicket() || !user) && (
                            <Card.Footer>
                                <Link to={`${user ? '/hikingBooking' : '/login'}`}>
                                    Book Now
                                </Link>
                            </Card.Footer>
                        )}
                    </Card>
                    </Col>
                    <Col s={4}>
                    <Card style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>Tour</Card.Title>

                            <Card.Text>
                                Take the breathetaking tour of this National Park seeing some of the amazing
                                species which probably are never heard of. Come join us in this tour.
                            </Card.Text>

                        </Card.Body>
                        {(canIssueOrBookTicket() || !user) && (
                            <Card.Footer>
                                <Link to={`${user ? '/tourBooking' : '/login'}`}>
                                    Book Now
                                </Link>
                            </Card.Footer>
                        )}

                    </Card>
                    </Col>


                </Row>
          </Container>

        );
    }

}

export default Activities;