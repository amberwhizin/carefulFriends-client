import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Activities from "./Activities";
import SignUp from "./SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/activities" component={Activities} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};
export default Routes;
