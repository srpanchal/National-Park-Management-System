/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React from "react";
import NavigationBar from "../Components/NavigationBar";
import {Table, Button} from "react-bootstrap";
import {APIConstants} from '../Utils/APIConstants';
import { getUser } from '../Utils/helper';
import {withRouter} from "react-router-dom";

class campingBooking extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            camping: [
            ],
            selectedCamping: '',
            selectedDate: '',
            tourist_id: getUser().id
        };
    }

    componentDidMount() {
        fetch(APIConstants.getCampingDetails)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({
                camping: res
            })
        });

    }

    HandleSelection = (e) => {
        console.log(e.target.value);
        this.setState({
            selectedCamping: e.target.value
        });
    }

    handleSelectedDate = (e) => {
        console.log(e.target.value);
        this.setState({
            selectedDate: e.target.value

        })
    }

    handleSubmit =  async () => {
        console.log(this.state);
        if (this.state.selectedDate === '' || this.state.selectedCamping === '') {
            alert('Please select date and hike');
        }
        else {

            const input = JSON.stringify({
                actv_id : this.state.selectedCamping,
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
            <div>
            <NavigationBar />
        
            <h3> Camping Booking</h3>

                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Site</th>
                                <th>Cost</th>
                                <th> Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                            this.state.camping.length > 0 && this.state.camping.map(c => (
                                <tr key ={c.actv_id}>
                                <td>{c.site}</td>
                                <td>{c.cost}</td>
                                <td> <input type = "radio"  name= "camp" value = {c.actv_id} onChange={this.HandleSelection}/> </td>         
                                </tr>
                            )) }
                            
                        
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

export default withRouter(campingBooking);