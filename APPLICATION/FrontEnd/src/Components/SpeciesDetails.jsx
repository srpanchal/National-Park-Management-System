/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React from 'react';
import NavigationBar from "./NavigationBar";
import { Container, Table } from "react-bootstrap";
import { APIConstants } from '../Utils/APIConstants';
import { Button } from 'react-bootstrap';
import { Modal, Form, Col, Row, Card, Alert } from 'react-bootstrap';
import { getUser, isTourist } from '../Utils/helper';
class SpeciesDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            species: [
            ],
            disableDelete: true,
            selectedSpecies_Id: '',
            showModal: false,
            newSpecies: {
                name: '',
                age: 0,
                description: '',
                gender: 'M',
                category: ''
            },
            stats: {
                total_count: 0,
                gender_stats: [],
                category_stats: [],
                age_stats: []
            }
        };
    }

    // api call

    componentDidMount() {

        this.getStats();
        //   get animals API call
        this.callGetSpeciesDetailsAPI();
    }

    callGetSpeciesDetailsAPI = () => {
        fetch(APIConstants.getSpaciesDetails)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    species: res,
                    disableDelete: true
                })
            });

    }

    getStats = () => {
        fetch(APIConstants.getStats)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    stats: res

                })
            })
    }

    handleAdd = () => {
        this.handleModal(true);

    }

    handleDelete = () => {

        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        };
        fetch(`${APIConstants.deleteSpecies}?species_id=${this.state.selectedSpecies_Id}`, requestOptions)
            .then(res => {
                if (res) {
                    this.callGetSpeciesDetailsAPI();

                }
                else {
                    alert('try again');
                }
            })

    }

    HandleSelection = (e) => {
        console.log(e.target.value);
        this.setState({
            selectedSpecies_Id: e.target.value,
            disableDelete: false
        })

    }
    handleModal = (value) => {
        this.setState({
            showModal: value
        })
    }

    handleChange = (key, value) => {
        const newSpecies = { ...this.state.newSpecies };
        newSpecies[key] = value;
        console.log(newSpecies);
        this.setState({
            newSpecies: newSpecies
        });
    }

    handleSubmit = (e) => {
        let valid = true;

        e.preventDefault();
        let keys = Object.keys(this.state.newSpecies);
        for (let k of keys) {
            if (this.state.newSpecies[k] === '') {
                valid = false;
                break;
            }
            // use val
        };
        console.log(this.state.newSpecies);
        if (valid) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state.newSpecies)
            };

            fetch(APIConstants.getSpaciesDetails, requestOptions)
                .then(response => {
                    console.log(response);
                    if (response) {
                        this.handleModal(false);
                        this.callGetSpeciesDetailsAPI();


                    }
                    else {
                        alert('failed ! try again');
                    }
                })

        }
        else {
            alert('enter valid values');
        }


    }

    render() {

    

        return (
            <div>
                <NavigationBar />
                <Container>

                    <Row className="mt-5 mb-3">
                        <h2> All Species</h2>
                    </Row>
                    <Row>

                        <Col sm={6}>
                            <Alert variant='primary'>
                                Total Number of species: {this.state.stats.total_count}
                            </Alert>
                        </Col>
                        <Col sm={6}>


                            <Alert variant='primary'>
                                Total Number of Male Species: {this.state.stats.gender_stats.length > 0 && this.state.stats.gender_stats[0].count}
                                <br />
                                Total Number of Female Species: {this.state.stats.gender_stats.length > 0 && this.state.stats.gender_stats[1].count}
                            </Alert>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} >
                            <Alert variant='primary'>
                                {this.state.stats.age_stats.length > 0 && (
                                    <Table size="sm">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Age Group
                                     </th>
                                                <th>
                                                    Number of Species
                                     </th>

                                            </tr>

                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Under 16
                                     </td>
                                                <td>
                                                    {this.state.stats.age_stats[0]['Under 10']}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    11-20
                                     </td>
                                                <td>
                                                    {this.state.stats.age_stats[0]['11-20']}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    21-30
                                     </td>
                                                <td>
                                                    {this.state.stats.age_stats[0]['21-30']}
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    30 and more
                                     </td>
                                                <td>
                                                    {this.state.stats.age_stats[0]['30 And More']}
                                                </td>

                                            </tr>
                                        </tbody>
                                    </Table>

                                )}

                            </Alert>

                        </Col>

                        <Col sm={6}>
                            <Alert variant='primary'>
                                <Table size="sm">
                                    <thead>
                                        <tr>
                                            <th>
                                                Category
                                        </th>
                                            <th>
                                                Count
                                        </th>
                                        </tr>
                                    </thead>

                                    <tbody>


                                        {this.state.stats.category_stats.length > 0 && this.state.stats.category_stats.map((c, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {c.category}
                                                </td>
                                                <td>
                                                    {c.count}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </Table>

                            </Alert>

                        </Col>

                    </Row>

                    <div style={{ padding: '5%' }}>

                    {getUser() && !isTourist() && (
                        <>
                            <Button onClick={this.handleAdd} >Add</Button>
                            <Button
                                onClick={this.handleDelete}
                                disabled={this.state.disableDelete}
                            >
                                Delete
                            </Button>
                        </>
                    )}
                        <Table striped bordered hover>
                            <thead>
                                <tr>

                                    <th>name</th>
                                    <th>age</th>
                                    <th>description</th>
                                    <th>gender</th>
                                    <th>category</th>
                                    {getUser() && !isTourist() && (<th>select</th>)}
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    this.state.species.length > 0 && this.state.species.map(s => (
                                        <tr key={s.species_id}>

                                            <td>{s.name}</td>
                                            <td>{s.age}</td>
                                            <td>{s.description}</td>
                                            <td>{s.gender}</td>
                                            <td>{s.category}</td>
                                            {getUser() && !isTourist() && (
                                                <td>
                                                    <input
                                                        type="radio"
                                                        name="species"
                                                        value={s.species_id}
                                                        onChange={this.HandleSelection}
                                                    />
                                                </td>
                                            )}
                                        </tr>
                                    ))}



                            </tbody>
                        </Table>
                    </div>

                    <Modal
                        size="lg"
                        show={this.state.showModal}
                        onHide={() => this.handleModal(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Add Species Details
                         </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Label>name</Form.Label>
                                <Form.Control type="text" placeholder="enter here" onChange={(e => this.handleChange('name', e.target.value))} />
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="enter here" onChange={(e => this.handleChange('age', e.target.value))} />
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="enter here" onChange={(e => this.handleChange('description', e.target.value))} />
                                <Form.Label>category</Form.Label>
                                <Form.Control type="text" placeholder="enter here" onChange={(e => this.handleChange('category', e.target.value))} />
                                <Form.Label>select gender</Form.Label>
                                <Form.Control as="select" value={this.state.newSpecies.gender} onChange={(e => this.handleChange('gender', e.target.value))}>
                                    <option value='M'>M</option>
                                    <option value='F'>F</option>
                                </Form.Control>
                                <Button type="submit" onClick={this.handleSubmit}> Submit</Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Container>


            </div>

        );
    }


}

export default SpeciesDetails;