import React from "react";
import { useParams } from "react-router-dom";

const ListeOffres = (props) => {
  const { id } = useParams();
  return (
    <>
      <div className="ListeCandidats" id="liste-candidats">
        {/* <AccueilAdmin /> */}
        <div className="container mt-3">
          <div className="section-title text-center">
            <h2>Liste de offres de stage</h2>
            <h4>Ceci est une liste pour les étudiant</h4>
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
    </>
  );
};

export default ListeOffres;
