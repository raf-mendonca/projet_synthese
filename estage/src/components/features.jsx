import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-12 section-title">
          <h2>Tu es à la recherche de ton stage de fin d'études?</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d}-${i}`} className="col-xs-6 col-md-3 mb-5">
                  {" "}
                  <h3>{d.domaine}</h3>
                  <h3>
                    <small>entreprise: </small>
                    {d.entreprise}
                  </h3>
                  <p>{d.description}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        <div className="list-buttom">
          <Link
            id="stages"
            to={`/stages-offres`}
            activeClassName="current"
            className="btn btn-custom btn-lg page-scroll"
          >
            Voir toutes les offres de stages
          </Link>
          {/* <a href="#features" className="btn btn-custom btn-lg">
            Voir toutes les offres de stages
          </a>{" "} */}
        </div>
      </div>
    </div>
  );
};
