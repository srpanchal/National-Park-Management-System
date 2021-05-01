
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';

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
          <Route path="/create-account">
            <CreateAccount />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
