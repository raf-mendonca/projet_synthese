import React from "react";
import Button from "react-bootstrap/Button";

const AccueilAdmin = (props) => (
  <div className="AccueilAdmin">
    <div className="section-title text-center">
      <h2>Administration</h2>
      <h4>
        Gestion des demandes de stage et d'annonces d'opportunités de stages.
      </h4>
    </div>
    <div className="row">
      <div className="col-12 d-flex justify-content-around">
        <button
          className="btn btn-custom btn-lg"
          variant="primary"
          type="submit"
        >
          Ajouter une offre de stage
        </button>
        <button
          className="btn btn-custom btn-lg"
          variant="primary"
          type="submit"
        >
          Ajouter un candidat de stage
        </button>
      </div>
    </div>
  </div>
);

export default AccueilAdmin;
