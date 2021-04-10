//Rafael de Mendonça
//Date: 2021-04-04
// Commentaires dans la page AJOUTER-STAGE
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!",
};

const baseUrl = "http://localhost:8000/offres";
const initialState = {
  offre: {
    entreprise: "",
    domaine: "",
    experience: "",
    description: "",
    email: "",
  },
  list: [],
};

export default class AjouterOffre extends Component {
  state = { ...initialState };

  componentWillMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
  }

  clear() {
    this.setState({ offre: initialState.offre });
  }

  save() {
    const offre = this.state.offre;
    const method = offre.id ? "put" : "post";
    const url = offre.id ? `${baseUrl}/${offre.id}` : baseUrl;
    axios[method](url, offre).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ offre: initialState.offre, list });
    });
  }

  getUpdatedList(offre, add = true) {
    const list = this.state.list.filter((o) => o.id !== offre.id);
    if (add) list.unshift(offre);
    return list;
  }

  updateField(event) {
    const offre = { ...this.state.offre };
    offre[event.target.name] = event.target.value;
    this.setState({ offre });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Entreprise</label>
              <input
                type="text"
                className="form-control"
                name="entreprise"
                value={this.state.offre.entreprise}
                onChange={(e) => this.updateField(e)}
                placeholder="Digitez le nom de l'entreprise."
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
                value={this.state.offre.domaine}
                onChange={(e) => this.updateField(e)}
                placeholder="Digitez le domaine de l'offre..."
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
                value={this.state.offre.experience}
                onChange={(e) => this.updateField(e)}
                placeholder="Informez si il y a besoin d'expérience..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="motivation"
                value={this.state.offre.description}
                onChange={(e) => this.updateField(e)}
                placeholder="Digitez la description de l'offre..."
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
                value={this.state.offre.email}
                onChange={(e) => this.updateField(e)}
                placeholder="Digitez le contact du RH."
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

  load(offre) {
    this.setState({ offre });
  }

  remove(offre) {
    axios.delete(`${baseUrl}/${offre.id}`).then((resp) => {
      const list = this.getUpdatedList(offre, false);
      this.setState({ list });
    });
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Entreprise</th>
            <th>Domaine</th>
            <th>Experience</th>
            <th>Description</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map((offre) => {
      return (
        <tr key={offre.id}>
          <td>{offre.id}</td>
          <td>{offre.entreprise}</td>
          <td>{offre.domaine}</td>
          <td>{offre.experience}</td>
          <td>{offre.description}</td>
          <td>{offre.email}</td>
          <td className="px-0 mx-0">
            <button
              className="btn btn-sm btn-warning  "
              onClick={() => this.load(offre)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-sm btn-danger ml-2 btn-sm"
              onClick={() => this.remove(offre)}
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
              <div className="col-12">
                <h2>Ajouter une nouvelle offre de stage</h2>
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
