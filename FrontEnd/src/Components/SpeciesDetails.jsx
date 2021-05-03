import React from 'react';
import NavigationBar from "./NavigationBar";
import { Table } from "react-bootstrap";
import { APIConstants } from '../Utils/APIConstants';
import { Button } from 'react-bootstrap';
import { Modal, Form } from 'react-bootstrap';

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
                species_id: '',
                name: '',
                age: 0,
                description: '',
                gender: '',
                category: ''
            }
        };
    }

    // api call

    componentDidMount() {
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
        e.preventDefault();
        console.log(this.state.newSpecies);
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

    render() {

        //  console.log(this.state.species);
        return (
            <div>
                <NavigationBar />
                <h3> All Species</h3>

                <div style={{ padding: '5%' }}>



                    <Button onClick={this.handleAdd} >Add</Button>

                    <Button onClick={this.handleDelete} disabled={this.state.disableDelete}>Delete </Button>




                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>species_id</th>
                                <th>name</th>
                                <th>age</th>
                                <th>description</th>
                                <th>gender</th>
                                <th>category</th>
                                <th>select</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                this.state.species.length > 0 && this.state.species.map(s => (
                                    <tr key={s.species_id}>
                                        <td>{s.species_id}</td>
                                        <td>{s.name}</td>
                                        <td>{s.age}</td>
                                        <td>{s.description}</td>
                                        <td>{s.gender}</td>
                                        <td>{s.category}</td>
                                        <td> <input type="radio" name="species" value={s.species_id} onChange={this.HandleSelection} /> </td>

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
                            <Form.Label>Species ID</Form.Label>
                            <Form.Control type="text" placeholder="enter here" onChange={e => this.handleChange('species_id', e.target.value)} />
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" placeholder="enter here" onChange={(e => this.handleChange('name', e.target.value))} />
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="enter here" onChange={(e => this.handleChange('age', e.target.value))} />
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="enter here" onChange={(e => this.handleChange('description', e.target.value))} />
                            <Form.Label>category</Form.Label>
                            <Form.Control type="text" placeholder="enter here" onChange={(e => this.handleChange('category', e.target.value))} />
                            <Form.Label>select gender</Form.Label>
                            <Form.Control as="select" onChange={(e => this.handleChange('gender', e.target.value))}>
                                <option>M</option>
                                <option>F</option>
                            </Form.Control>
                            <Button type="submit" onClick={this.handleSubmit}> Submit</Button>
                        </Form>
                    </Modal.Body>
                </Modal>


            </div>

        );
    }


}

export default SpeciesDetails;