//Rafael de Mendonça   <fieldset class="px-2 border">
// <legend class="w-auto mb-0" style="margin-left: -0.05em;">Ma connexion </legend>
//Date: 2021-04-04
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!",
};
//local de la bd
const baseUrl = "http://localhost:8000/users";
// Inicialiser le state
const initialState = {
  user: { nom: "", domaine: "", experience: "", motivation: "", email: "" },
  list: [],
};

export default class AjouterStage extends Component {
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

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
      const list = this.getUpdatedList(user, false);
      this.setState({ list });
    });
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Domaine</th>
            <th>Experience</th>
            <th>Motivation</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.nom}</td>
          <td>{user.domaine}</td>
          <td>{user.experience}</td>
          <td>{user.motivation}</td>
          <td>{user.email}</td>
          <td className="px-0 mx-0">
            <button
              className="btn btn-sm btn-warning"
              onClick={() => this.load(user)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-sm btn-danger ml-2"
              onClick={() => this.remove(user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <>
        <div id="ajouter-stage">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 ">
                <h2>Ajouter un nouveau candidat</h2>
              </div>
              <div className="col-12 borderForm my-2 py-2">
                {this.renderForm()}
              </div>

              <div
                className="col-12"
                style={{ maxHeight: "50vh", overflow: "auto" }}
              >
                {this.renderTable()}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
