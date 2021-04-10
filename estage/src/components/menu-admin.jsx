import React from "react";
import { Link } from "react-router-dom";
import { Deconnexion } from "./deconnexion";
import { Login } from "./login";
import "./layout/menu.css";

const Menu = (props) => (
  <aside className="Menu">
    <nav class="navbar navbar-default navbar-expand-lg">
      <ul class="navbar-nav" className="nav navbar-nav">
        <li>
          <Link to="/accueil-admin">Accueil</Link>
        </li>
        <li>
          <Link to="/liste-offres">Étudiants</Link>
        </li>
        <li>
          <Link to="/liste-candidats">Entreprises</Link>
        </li>
        <li>
          <Link to="/ajouter-stage">Ajouter un candidat</Link>
        </li>
        <li>
          <Link to="/ajouter-offre">Ajouter un offre</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
