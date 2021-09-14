import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}
