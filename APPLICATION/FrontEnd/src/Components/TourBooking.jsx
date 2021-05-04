/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React from "react";
import NavigationBar from "./NavigationBar";
import { Table, Button } from "react-bootstrap";
import {APIConstants} from '../Utils/APIConstants';
import { withRouter } from "react-router-dom";
import { getUser } from '../Utils/helper';

class TourBooking extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tours: [
            ],
            selectedTour: '',
            selectedDate: '',
            tourist_id: getUser().id
        };
    }

    componentDidMount() {
        fetch(APIConstants.getTours)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    tours: res
                })
            });

    }

    HandleSelection = (e) => {
        console.log(e.target.value);
        this.setState({
            selectedTour: e.target.value
        })
    }

    handleSelectedDate = (e) => {
        console.log(e.target.value);
        this.setState({
            selectedDate: e.target.value

        })
    }

    

    handleSubmit = async () => {
       
        console.log(this.state);
        if (this.state.selectedDate === '' || this.state.selectedCamping === '') {
            alert('Please select date and hike');
        }
        else {

            const input = JSON.stringify({
                actv_id: this.state.selectedTour,
                booking_date: this.state.selectedDate,
                tourist_id: this.state.tourist_id

            });

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: input
            };

            fetch(APIConstants.bookActivity, requestOptions)
                .then(response => {
                    console.log(response);

                    if (response) {
                        alert('Ticket Booked');
                        this.props.history.push("/touristBooking");

                    }
                    else {
                        alert('failed ! try again');
                    }
                });




        }

    }



    render() {
        return (
            <div>
                <NavigationBar />
                <h3> Tour Booking</h3>
                

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Route</th>
                            <th>Vehicle</th>
                            <th> Cost</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tours.length > 0 && this.state.tours.map(t => (
                                <tr key={t.actv_id}>
                                    <td>{t.route}</td>
                                    <td>{t.vehicle}</td>
                                    <td>{t.cost}</td>
                                    <td> <input type="radio" name="tour" value={t.actv_id} onChange={this.HandleSelection} /> </td>
                                </tr>
                            ))}


                    </tbody>
                </Table>

                <div>

                    <label> Select Date</label>
                    <input type="date" name="date" onChange={this.handleSelectedDate} />
                </div>

                <div>
                    <Button onClick={this.handleSubmit} > Submit </Button>
                </div>

            </div>



        );
    }
}

export default withRouter(TourBooking);