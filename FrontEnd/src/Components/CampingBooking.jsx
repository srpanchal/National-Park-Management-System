import React from "react";
import NavigationBar from "../Components/NavigationBar";
import {Table} from "react-bootstrap";

class campingBooking extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            camping: [
            ],
            selectedCamping: ''
        };
    }

    componentDidMount() {
        fetch('http://50.18.241.42/activity?camping=true')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({
                camping: res
            })
        });

      const  camping = [
            {
                actv_id: 14,
                cost: 485,
                site: 'rem'
            }
        ];

        // this.setState({
        //     camping : camping
        // });
    }

    HandleSelection = (e) => {
        console.log(e.target.value);
        this.setState({
            actv_id: e.target.value
        });
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
                
            </div>
            
            
        );
    }
}

export default campingBooking;