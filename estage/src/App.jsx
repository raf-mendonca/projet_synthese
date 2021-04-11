import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navigation } from "./components/navigation";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/landingPageData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data + "!!!!!!!!!!!!!!!!!");
        setLandingPageData(data);
      });
  }, []);

  return (
    <Router>
      <Navigation />
    </Router>
  );
};

export default App;
