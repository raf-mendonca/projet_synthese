import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./layout/content-admin.css";
import AccueilAdmin from "../views/accueil-admin";
import ListeCandidats from "../views/liste-candidats";
import ListeOffres from "../views/liste-offres";
import AjouterStage from "../views/ajouter-stage";
import AjouterOffre from "../views/ajouter-offre";
// import { Deconnexion } from "./deconnexion";

// import JsonData from "../data/data.json";

const ContentAdmin = (props) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const [offres, setOffres] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/offres")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOffres(data);
      });
  }, []);

  return (
    <main className="ContentAdmin">
      <Switch>
        <Route path="/accueil-admin">
          <AccueilAdmin />
        </Route>
        <Route path="/liste-candidats">
          {users && <ListeCandidats data={users} />}
        </Route>
        <Route path="/liste-offres">
          {offres && <ListeOffres data={offres} />}
        </Route>
        <Route path="/ajouter-stage">
          {users && <AjouterStage data={users} />}
        </Route>
        <Route path="/ajouter-offre">
          {offres && <AjouterOffre data={offres} />}
        </Route>
        <Route exact path="/">
          <AccueilAdmin />
        </Route>
        {/* Ouvre la page principal */}
        <Redirect from="*" to="/" />
      </Switch>
    </main>
  );
};

export default ContentAdmin;
