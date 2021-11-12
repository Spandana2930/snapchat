//Importing React component from React Library
import React from "react";

//Importing Routing Components from React Router Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import User Components from Local Files
import './App.css';
import Landing from "../global components/landing/landing"
import Signup from "../global components/signup/signup"
import Login from "../global components/login/login"

/**
 * author:"Akhilasai and Spandana"
 * @returns {Html}
 * Implementation of Landing Component with Routing Components.
 */
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"
            render={() => <Landing />}  />

          <Route exact path="/signup"
            render={() => <Signup />}  />


          <Route exact path="/login"
            render={() => <Login />}   />
        </Switch>
      </Router>
    </>

  );
}

//Exporting File
export default App;
