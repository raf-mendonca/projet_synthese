import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../index.css";
import Menu from "../components/menu-admin";
import ContentAdmin from "../components/content-admin";

const Administration = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/landingPageData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLandingPageData(data);
      });
  }, []);

  return (
    <div className="Administration">
      {landingPageData && (
        <Router>
          <Menu data={landingPageData.Stages} />
          <ContentAdmin data={landingPageData.Stages} />
        </Router>
      )}
    </div>
  );
};

export default Administration;
