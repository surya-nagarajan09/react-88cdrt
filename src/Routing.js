import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router,Route } from "react-router-dom";

export default function Routing() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
      </Router>
    </div>
  );
}
