import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
}
