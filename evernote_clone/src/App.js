import React from 'react';
import PrivateRoute from "./components/PrivateRoute";
//Components
import SignIn from "./routes/SignIn";
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import './App.css';
//DOM
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <PrivateRoute path = "/home">
          <Home />
        </PrivateRoute>
        <Route exact path = "/">
            <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
