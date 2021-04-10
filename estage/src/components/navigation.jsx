import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
// import JsonData from "../data/data.json";
import "../index.css";
import Home from "../views/home";
import StagesOffres from "../views/stages-offres";
import StagesDemandes from "../views/stages-demandes";
import Inscription from "../views/inscription";
import Administration from "../views/administration";
import { Connexion } from "../views/connexion";

export const Navigation = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/landingPageData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLandingPageData(data);
      });
  }, []);
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
    <>
      <Router>
        <div>
          <nav id="menu" class="navbar navbar-default navbar-expand-lg">
            <div className="container ">
              <a class="navbar-brand" href="#page-top">
                e Stage
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul
                  class="navbar-nav mr-auto mt-2 mt-lg-0"
                  className="nav navbar-nav"
                >
                  <li class="nav-item nav navbar-nav">
                    <Link class="nav-link" to="/home">
                      À propos
                    </Link>
                  </li>
                  <li class="nav-item nav navbar-nav">
                    <Link class="nav-link" to="/stages-offres">
                      Offres de stages
                    </Link>
                  </li>
                  <li class="nav-item nav navbar-nav">
                    <Link class="nav-link" to="/stages-demandes">
                      Demande de stagiaire
                    </Link>
                  </li>
                  <li class="nav-item nav navbar-nav">
                    <Link class="nav-link" to="/inscription">
                      Inscription
                    </Link>
                  </li>
                  <li>
                    <Link class="nav-link" to="/connexion">
                      Administration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/stages-offres">
              {offres && <StagesOffres data={offres} />}
            </Route>
            <Route path="/stages-demandes">
              {users && <StagesDemandes data={users} />}
            </Route>
            <Route path="/inscription">
              {users && <Inscription data={users} />}
            </Route>
            <Route path="/connexion">
              <Connexion />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            {/* Ouvre la page principal */}
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
