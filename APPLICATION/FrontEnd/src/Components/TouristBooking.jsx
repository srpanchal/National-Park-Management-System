/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React from "react";
import { APIConstants } from '../Utils/APIConstants';
import { Table } from 'react-bootstrap';
import NavigationBar from "./NavigationBar";
import { Button } from "react-bootstrap";
import {getUser} from '../Utils/helper';

class TouristBooking extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            bookings: [
            ],
            tourist_id: getUser().id
        };
    }

    componentDidMount() {
        this.getTouristBookingDetails();
    }

    getTouristBookingDetails = () => {
        fetch(`${APIConstants.getTouristBookingDetails}?tourist_id=${this.state.tourist_id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    bookings: res
                })
            });

    }

    cancelBooking = (booking) => {
        console.log(booking);
        const date = new Date(booking.booking_date);
        console.log(date.toISOString().slice(0, 19).replace('T', ' '));
        const requestJson = {
            actv_id: booking.actv_id,
            booking_date: date.toISOString().slice(0, 19).replace('T', ' '),
            tourist_id: booking.tourist_id
        }

        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestJson)
        };
        fetch(`${APIConstants.bookActivity}`, requestOptions)
            .then(res => {
                if (res) {
                    this.getTouristBookingDetails();

                }
                else {
                    alert('try again');
                }
            })

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

                                            {book.status === 'ACTIVE' ? (<td> <Button active={false} onClick={e => this.cancelBooking(book)}>Cancel</Button></td>) : (<td>Cancelled</td>)}

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

                                            {book.status === 'ACTIVE' ? (<td> <Button active={false} onClick={e => this.cancelBooking(book)}>Cancel</Button></td>) : (<td>Cancelled</td>)}

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
                            <th>trail</th>
                            <th>duration</th>
                            <th>distance</th>
                            <th>difficulty level</th>
                           <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bookings.length > 0 && this.state.bookings.map((book, index) => {
                                if (book.actv_type === 'Hiking') {
                                    return (
                                        <tr key={index}>
                                            <td>{book.booking_date}</td>
                                            <td>{book.actv_type}</td>
                                            <td>{book.trail}</td>
                                            <td>{book.duration}</td>
                                            <td>{book.distance}</td>
                                            <td>{book.difficulty_level}</td>
                                            {book.status === 'ACTIVE' ? (<td> <Button active={false} onClick={e => this.cancelBooking(book)}>Cancel</Button></td>) : (<td>Cancelled</td>)}
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