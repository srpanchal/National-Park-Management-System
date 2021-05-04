/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React from 'react';
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import animal from '../Images/animal.jpg';

class Animals extends React.Component {
    render() {
        return (

            <Container className="mt-5">

                <Row>
                    <Col xs={4}>
                    <h3>Yosemite National Park</h3>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Species</Card.Title>
                                <Card.Text>
                                Yosemite's approximately 90 mammal species,
                     and their behaviors, are truly fascinating to observe safely and responsibly.
                                  </Card.Text>
                                <Card.Footer> <Link to="/species">See All</Link></Card.Footer>
                              
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8}>
                        <div style={{paddingTop: '5%'}}>
                        <img src={animal} height="80%" width="60%" />
                        </div>
                    
                    </Col>
                </Row>
            </Container>

        );
    }

}

export default Animals;