import React, {Component} from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Auth/Home";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { AuthProvider } from "./Auth/Auth";
import PrivateRoute from "./Auth/PrivateRoute";

class App extends Component {
  render() {
    axios.delete('https://lottery-project-cc665-default-rtdb.europe-west1.firebasedatabase.app/Numbers.json');
    return(
      <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
    );
  }
}

export default App;


