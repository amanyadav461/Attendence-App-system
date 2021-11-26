// import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './scss/_Navbar.scss';
import './scss/_Login.scss';
import './scss/_Dashboard.scss';

function App() {

  const [user, setLoginuser] = useState({})

  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            {/* <Navbar /> */}
            <Login setLoginuser={setLoginuser}/>
          </Route>
          <Route path="/dashboard">
            {
              user && user._id ? <Dashboard name={user.username} setLoginuser={setLoginuser}/> :<Login setLoginuser={setLoginuser}/>
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
