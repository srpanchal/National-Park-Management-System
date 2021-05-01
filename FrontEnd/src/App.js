
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';

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
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
