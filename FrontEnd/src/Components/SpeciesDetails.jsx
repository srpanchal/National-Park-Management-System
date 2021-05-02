import React from 'react';
import NavigationBar from "./NavigationBar";
import {Table} from "react-bootstrap";

class SpeciesDetails extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            species: [
            ]
        };
    }

        // api call

    componentDidMount() {
        // get animals API call
        // fetch('http://50.18.241.42/booking')
        // .then(res => res.json())
        // .then(res => {
        //     console.log(res);
        // });

        const list =  [
                {
                    species_id: '100',
                    name: 'Tiger',
                    age: 10,
                    description: 'The tiger (Panthera tigris) is the largest living cat species.',
                    gender: 'male',
                    category: 'animals'
                },
                {
                    species_id: '101',
                    name: 'Lion',
                    age: 11,
                    description: 'The lion (Panthera tigris) is the largest living cat species.',
                    gender: 'male',
                    category: 'animals'
                },
                {
                    species_id: '102',
                    name: 'Panda',
                    age: 12,
                    description: 'panda, is a bear[6] native to South Central China',
                    gender: 'male',
                    category: 'animals'
                }
            ];
        
       
       
        this.setState({
            species : list
        });
    }

    render() {
      
        console.log(this.state.species);
        return (
            <div>
                <NavigationBar />
                <h3> All Species</h3>

                <div style={{padding: '5%'}}>

               

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>species_id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>description</th>
                            <th>gender</th>
                            <th>category</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                         { 
                         this.state.species.length > 0 && this.state.species.map(s => (
                              <tr key ={s.species_id}>
                              <td>{s.species_id}</td>
                              <td>{s.name}</td>
                              <td>{s.age}</td>
                              <td>{s.description}</td>
                              <td>{s.gender}</td>
                              <td>{s.category}</td>
                               </tr>
                         )) }
                       
                      
                       
                    </tbody>
                </Table>
                </div>


            </div>

        );
    }


}

export default SpeciesDetails;