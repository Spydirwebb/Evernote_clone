import React from 'react';
import PrivateRoute from "./components/PrivateRoute";
//Components
import SignIn from "./routes/SignIn";
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Favorites from './components/notes/Favorites'
import './App.css';
//DOM
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="grey lighten-3">
      <Navbar />
      <Switch>
        <PrivateRoute path = "/home">
          <Home />
        </PrivateRoute>
        <PrivateRoute path ='/favorites'>
            <Favorites />
        </PrivateRoute>
        <Route exact path = "/">
            <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
