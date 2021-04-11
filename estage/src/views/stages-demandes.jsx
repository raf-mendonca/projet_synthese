import React from "react";
import Home from "./home";

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
        </div>
      </div>
      <Home />
    </div>
  );
};

export default StagesDemandes;
