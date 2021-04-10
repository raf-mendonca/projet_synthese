import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import Home from "./home";
import ListGroup from "react-bootstrap/ListGroup";

const StagesOffres = (props) => {
  return (
    <div id="stages">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <h2>
              Liste de stages<small> Opportunités</small>
            </h2>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-content">
                        <h3>{d.domaine}</h3>
                        <h4>
                          <small>entreprise:</small>
                          {d.entreprise}
                        </h4>
                        <p>
                          <small>- experience:</small>
                          {d.experience}
                        </p>
                        <div className="testimonial-meta">{d.description}</div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
      <Home />
    </div>
  );
};

export default StagesOffres;
