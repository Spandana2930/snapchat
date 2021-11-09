import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import {Login} from "../global components/login/login;"

import './App.css';
import Landing from "../global components/landing/landing"
import Signup from "../global components/signup/signup"
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = "/"
        render = {()=><Landing/>}/>
      </Switch>
      <Switch>
        <Route exact path = "/signup"
        render = {()=><Signup/>}/>
      </Switch>
    </Router>
    </>
   
  );
}

export default App;
