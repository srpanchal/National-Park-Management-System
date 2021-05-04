/* SJSU CMPE 138 Spring 2021 TEAM8 */

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { canIssueOrBookTicket } from './Utils/helper';

import Login from './Components/Login';
import SignOut from './Components/SignOut';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import EmployeeHome from './Components/EmployeeHome';
import SpeciesDetails from './Components/SpeciesDetails';
import CampingBooking from './Components/CampingBooking';
import TourBooking from './Components/TourBooking';
import HikingBooking from './Components/HikingBooking';
import TouristBooking from './Components/TouristBooking';

import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Route path="/sign-out">
            <SignOut />
          </Route>
          <Route path="/create-account">
            <CreateAccount />
          </Route>
          <Route path="/employee-home">
            <EmployeeHome />
          </Route>
          <Route path="/species">
            <SpeciesDetails />
          </Route>
          {canIssueOrBookTicket() && (
            <>
              <Route path="/campingBooking">
                <CampingBooking />
              </Route>
              <Route path="/tourBooking">
                <TourBooking />
              </Route>
              <Route path="/hikingBooking">
                <HikingBooking />
              </Route>
              <Route path="/touristBooking">
                <TouristBooking/>
              </Route>
            </>
          )}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
