
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { isTourist } from './Utils/helper';

import Login from './Components/Login';
import SignOut from './Components/SignOut';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import EmployeeHome from './Components/EmployeeHome';
import Species from './Components/SpeciesDetails';
import SpeciesDetails from './Components/SpeciesDetails';
import ActivityBooking from './Components/ActivityBooking';
import CampingBooking from './Components/CampingBooking';
import TourBooking from './Components/TourBooking';
import HikingBooking from './Components/HikingBooking';
import TouristBookings from './Components/TouristBookings';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {isTourist() && (
            <Route exact path="/bookings">
              <TouristBookings />
            </Route>
          )}
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
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/species">
            <SpeciesDetails />
          </Route>
          <Route path="/campingBooking">
            <CampingBooking />
          </Route>
          <Route path="/tourBooking">
            <TourBooking />
          </Route>
          <Route path="/hikingBooking">
            <HikingBooking />
          </Route>
          <Route path="/touristBookings">
            <TouristBookings/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
