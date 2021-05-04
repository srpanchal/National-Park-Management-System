/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React from "react";
import NavigationBar from "./NavigationBar";
import { Table } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { APIConstants } from "../Utils/APIConstants";
import {withRouter} from "react-router-dom";
import { getUser } from '../Utils/helper';


class HikingBooking extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            hikings: [
            ],
            selectedHike: '',
            selectedDate: '',
            tourist_id: getUser().id 

        };
    }

    componentDidMount() {
        fetch(APIConstants.getHikes)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    hikings: res
                })
            });

    }

    HandleSelection = (e) => {
        console.log(e.target.value);
        this.setState({
            selectedHike: e.target.value
        })
    }

    handleSelectedDate = (e) => {
        console.log(e.target.value);
        this.setState({
            selectedDate: e.target.value

        })
    }

    handleSubmit =  async () => {
        if (this.state.selectedDate == '' || this.state.selectedHike == '') {
            alert('Please select date and hike');
        }
        else {

            const input = JSON.stringify({
                actv_id : this.state.selectedHike,
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

            if(response){
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
            <div> <NavigationBar />
                <h3> Hiking Booking</h3>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Trail</th>
                            <th>Elevation</th>
                            <th> Duration</th>
                            <th>Distance</th>
                            <th> Difficulty Level</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hikings.length > 0 && this.state.hikings.map(h => (
                                <tr key={h.actv_id}>
                                    <td>{h.trail}</td>
                                    <td>{h.elevation}</td>
                                    <td>{h.duration}</td>
                                    <td>{h.distance}</td>
                                    <td>{h.difficulty_level}</td>
                                    <td> <input type="radio" name="hiking" value={h.actv_id} onChange={this.HandleSelection} /> </td>
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

export default withRouter(HikingBooking);