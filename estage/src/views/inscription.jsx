//Rafael de Mendonça
//Date: 2021-04-04
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Utilisateur",
  subtitle: "CRUD",
};
//local de la bd
const baseUrl = "http://localhost:8000/users";
// Inicialiser le state
const initialState = {
  user: { nom: "", domaine: "", experience: "", motivation: "", email: "" },
  list: [],
};

export default class Inscription extends Component {
  state = { ...initialState };

  componentWillMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
  }
  // lorsque'on click sur soumission ou annuler on réinicialise le formulaire
  clear() {
    this.setState({ user: initialState.user });
  }
  // function utilisé pour additionner un neuvel utilisateur et modifier un utilisateur qui existe
  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post"; //Si il y a un id = put pour modifier, sinon post pour créer
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl; // Si put passer le id à url
    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data); //rest.data = utilisateur obtenu à partir du json server
      this.setState({ user: initialState.user, list });
    });
  }

  getUpdatedList(user, add = true) {
    // function qui reçoive le utilisateur obtenue de data.json ou du backend
    const list = this.state.list.filter((u) => u.id !== user.id); //filter créa une nouvelle liste
    if (add) list.unshift(user); //unshift met un élement obtenue dans la premiàre position de la liste/array
    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                className="form-control"
                name="nom"
                value={this.state.user.nom}
                onChange={(e) => this.updateField(e)}
                placeholder="Digitez votre nom..."
                title="input1"
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Domaine</label>
              <input
                type="text"
                className="form-control"
                name="domaine"
                value={this.state.user.domaine}
                onChange={(e) => this.updateField(e)}
                placeholder="Digitez votre domaine..."
                title="input2"
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Exeperience</label>
              <input
                type="text"
                className="form-control"
                name="experience"
                value={this.state.user.experience}
                onChange={(e) => this.updateField(e)}
                placeholder="Informez si vous avez d'expérience..."
                title="input3"
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Motivation</label>
              <input
                type="text"
                className="form-control"
                name="motivation"
                value={this.state.user.motivation}
                onChange={(e) => this.updateField(e)}
                placeholder="Quel est votre motivation..."
                title="input4"
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={(e) => this.updateField(e)}
                placeholder="Digitez votre courriel..."
                title="input5"
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <button
              className="btn btn-custom btn-lg"
              onClick={(e) => this.save(e)}
            >
              Soumettre
            </button>

            <button
              className="btn btn-custom-warm btn-lg ml-2"
              onClick={(e) => this.clear(e)}
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    );
  }

  load(user) {
    this.setState({ user });
  }

  render() {
    return (
      <>
        <div id="ajouter-stage">
          <div className="container mt-3">
            <div className="row">
              <div className="col-12">
                <h2>Enregistrement d'un nouvel utilisateur</h2>
              </div>
              <div className="col-12">{this.renderForm()}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
