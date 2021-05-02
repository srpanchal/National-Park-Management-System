import React from "react";
import NavigationBar from "./NavigationBar";
import {Table} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";


class HikingBooking extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            hikings: [
            ],
            selectedHike: ''
        };
    }

    componentDidMount() {
        fetch('http://50.18.241.42/activity?hiking=true')
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

    


    render() {
        return (
            <div> <NavigationBar/>
            <h3> Hiking Booking</h3>

            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Trail</th>
                            <th>Elevation</th>
                            <th> Duration</th>
                            <th>Distance</th>
                            <th> Difficulty Level</th>
                        </tr>
                    </thead>
                    <tbody>
                         { 
                         this.state.hikings.length > 0 && this.state.hikings.map(h => (
                              <tr key ={h.actv_id}>
                              <td>{h.trail}</td>
                              <td>{h.elevation}</td>
                              <td>{h.duration}</td>
                              <td>{h.difficulty_level}</td>
                              <td> <input type = "radio"  name= "hiking" value = {h.actv_id} onChange={this.HandleSelection}/> </td>         
                               </tr>
                         )) }
                         
                       
                    </tbody>
                </Table>

                <div>
                   
                    <label> Select Date</label>
                   <input type = "date" name= "date" onChange= {this.handleSelectedDate} />        
                </div>



                </div>
           
            
            
        );
    }
}

export default HikingBooking;