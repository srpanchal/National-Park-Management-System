
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import EmployeeHome from './Components/EmployeeHome';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Species from './Components/SpeciesDetails';
import SpeciesDetails from './Components/SpeciesDetails';
import ActivityBooking from './Components/ActivityBooking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create-account">
            <CreateAccount />
          </Route>
          <Route path="/employee-home">
            <EmployeeHome />
          </Route>
          <Route path="/about">
            <Home />
          </Route> 
          <Route path="/species">
            <SpeciesDetails/>
            </Route> 
            <Route path="/ActivityBooking">
              <ActivityBooking/>
              </Route>  
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
