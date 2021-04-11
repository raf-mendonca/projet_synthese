import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";

const stagiaireDetail = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const { data: candidats, error, isPending } = useFetch(
    "http://localhost:8000/landingPageData/candidats/" + id
  );

  const [landingPageData, setLandingPageData] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/landingPageData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data, "!!!!!!!!!!!!!!!!!");
        setLandingPageData(data);
      });
  }, []);

  const handleDelete = () => {
    fetch("http://localhost:8000/landingPageData/Stages/" + candidats.id, {
      method: "DELETE",
    }).then(() => {
      history.pushState("/liste-candidats");
    });
  };

  return (
    <div className="ListeCandidats ">
      <div className="container mt-3">
        <div className="section-title text-center">
          <h2>Liste de candidats</h2>
          <h4>Ceci est une liste pour les Employeurs</h4>
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
  );
};

export default ListeCandidats;
