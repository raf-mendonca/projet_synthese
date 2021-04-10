import React from "react";
import Button from "react-bootstrap/Button";

export class Deconnexion extends React.Component {
  handleDeconnexion() {
    this.props.onClick(false);
  }
  render() {
    return (
      <div className="container">
        <div className="col-12 justify-content-center mt-5">
          <h3>Voulez-vous vous déconnecter?</h3>
          <button
            className="btn btn-custom-warm btn-lg ml-2"
            onClick={() => this.handleDeconnexion()}
          >
            Déconnexion
          </button>
        </div>
      </div>
    );
  }
}
