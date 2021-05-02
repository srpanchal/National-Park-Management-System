import React from "react";
import NavigationBar from "./NavigationBar";
import { Table } from "react-bootstrap";

class TourBooking extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tours: [
            ],
            selectedTour: ''
        };
    }

    componentDidMount() {
        fetch('http://50.18.241.42/activity?tour=true')
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


    render() {
        return (
            <div>
                <NavigationBar/>
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
                              <tr key ={t.actv_id}>
                              <td>{t.route}</td>
                              <td>{t.vehicle}</td>
                              <td>{t.cost}</td>
                              <td> <input type = "radio"  name= "tour" value = {t.actv_id} onChange={this.HandleSelection}/> </td>         
                               </tr>
                         )) }
                         
                       
                    </tbody>
                </Table>

            </div>
         
            
            
        );
    }
}

export default TourBooking;