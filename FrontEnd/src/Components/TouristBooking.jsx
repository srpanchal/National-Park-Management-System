import React from "react";
import { APIConstants } from '../Utils/APIConstants';
import { Table } from 'react-bootstrap';
import NavigationBar from "./NavigationBar";
import { Button } from "react-bootstrap";

class TouristBooking extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            bookings: [
            ],
            tourist_id: 124474
        };
    }

    componentDidMount() {
        fetch(`${APIConstants.getTouristBookingDetails}?tourist_id=${this.state.tourist_id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    bookings: res
                })
            });

    }

    cancelBooking= (id) => {
        console.log(id);
    }

    render() {
        return (
            <div>
                <NavigationBar />

                <h5> Camping Bookings</h5>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Booking date</th>
                            <th>Activity Name</th>
                            <th>Site</th>
                            <th>Status</th>
                            <th>Cancel Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bookings.length > 0 && this.state.bookings.map((book, index) => {
                                if (book.actv_type === 'Camping') {
                                    return (
                                        <tr key={index}>
                                            <td>{book.booking_date}</td>
                                            <td>{book.actv_type}</td>
                                            <td>{book.site}</td>
                                            <td>{book.status}</td>
                                            <td> <Button onClick= {e => this.cancelBooking(book)}>Cancel</Button></td>
                                        </tr>
                                    )

                                }
                            })}


                    </tbody>
                </Table>

                <h5> Tour Bookings</h5>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Booking date</th>
                            <th>Activity Name</th>
                            <th>route</th>
                            <th>cost</th>
                            <th>Vehicle</th>
                            <th>Status</th>
                            <th>Cancel Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bookings.length > 0 && this.state.bookings.map((book, index) => {
                                if (book.actv_type === 'Tour') {
                                    return (
                                        <tr key={index}>
                                            <td>{book.booking_date}</td>
                                            <td>{book.actv_type}</td>
                                            <td>{book.route}</td>
                                            <td>{book.cost}</td>
                                            <td>{book.vehicle}</td>
                                            <td>{book.status}</td>
                                            <td> <Button onClick= {e => this.cancelBooking(book)}>Cancel</Button></td>
                                        </tr>
                                    )

                                }
                            })}


                    </tbody>
                </Table>

                <h5> hiking Bookings</h5>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Booking date</th>
                            <th>Activity Name</th>
                            <th>route</th>
                            <th>cost</th>
                            <th>Vehicle</th>
                            <th>Status</th>
                            <th>Cancel Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bookings.length > 0 && this.state.bookings.map((book, index) => {
                                if (book.actv_type === 'Tour') {
                                    return (
                                        <tr key={index}>
                                            <td>{book.booking_date}</td>
                                            <td>{book.actv_type}</td>
                                            <td>{book.route}</td>
                                            <td>{book.cost}</td>
                                            <td>{book.vehicle}</td>
                                            <td>{book.status}</td>
                                            <td> <Button onClick= {e => this.cancelBooking(book)}>Cancel</Button></td>
                                        </tr>
                                    )

                                }
                            })}


                    </tbody>
                </Table>





            </div>





        );
    }
}

export default TouristBooking;