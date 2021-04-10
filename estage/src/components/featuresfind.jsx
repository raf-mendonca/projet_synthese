import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export const FeaturesFind = (props) => {
  // let history = useHistory();

  // function handleClick() {
  //   history.push("/stages-demandes");
  // }
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-12 section-title">
          <h2>Votre futur stagiaire se trouve ici.</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d}-${i}`} className="col-xs-6 col-md-3 mb-5">
                  <h3>{d.nom}</h3>
                  <h4>{d.domaine}</h4>
                  <p>{d.motivation}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        <div className="list-buttom" style={{ marginBottom: "70px" }}>
          <Link
            to={`/stages-demandes`}
            activeClassName="current"
            className="btn btn-custom btn-lg page-scroll"
          >
            Voir tous les candidats
          </Link>
        </div>
      </div>
    </div>
  );
};
