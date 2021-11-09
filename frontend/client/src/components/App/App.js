import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../global components/landing/landing";


// function LandingPage(component,name){
//   return <component/> 
// }

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = "/"
        render = {()=><Landing/>}/>
      </Switch>
    </Router>
    </>
   
  );
}

export default App;
