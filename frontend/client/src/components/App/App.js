import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import './App.css';
import Landing from "../global components/landing/landing"
import Signup from "../global components/signup/signup"
import Login from "../global components/login/login"
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = "/"
        render = {()=><Landing/>}/>
     
        <Route exact path = "/signup"
        render = {()=><Signup/>}/>
     
    
        <Route exact path = "/login"
        render = {()=><Login/>}/>
       </Switch>
    </Router>
    </>
   
  );
}

export default App;
