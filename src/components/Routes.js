import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Options from "./Options";
import Login from "./Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/options" component={Options} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};
export default Routes;
