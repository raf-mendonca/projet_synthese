import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import Home from "./home";
import ListGroup from "react-bootstrap/ListGroup";

const StagesDemandes = (props) => {
  return (
    <div id="stages">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 mt-3">
            <h2>
              Listes de stagiaires<small> Profils</small>
            </h2>
            <p>Barre de recherche</p>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-meta"> - {d.nom} </div>
                      <div className="testimonial-content">
                        <p>"{d.experience}"</p>
                      </div>
                      <div className="testimonial-meta"> - {d.domaine} </div>
                      <div className="testimonial-content">
                        <p>"{d.motivation}"</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>

          {/* <div className="col-xs-12 col-md-4">
            <div className="list-style">
              <h2>Secteur d'activité</h2>
              <ListGroup>
                {props.data
                  ? props.data.domaine.map((d, i) => (
                      <ListGroup.Item key={`${d}-${i}`} className="bgList">
                        {" "}
                        {d}
                      </ListGroup.Item>
                    ))
                  : "loading"}
              </ListGroup>
            </div>
          </div> */}
        </div>
      </div>
      <Home />
    </div>
  );
};

export default StagesDemandes;
