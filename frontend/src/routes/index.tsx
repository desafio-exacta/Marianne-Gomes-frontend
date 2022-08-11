import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import List from "../pages/List";

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
        </Switch>
    </Router>
  );
};

export default Routes;