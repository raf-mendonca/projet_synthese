import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Login } from "../components/login";
import Administration from "./administration";
import { Deconnexion } from "../components/deconnexion";

export class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { connecter: false };
    this.gererConnexion = this.gererConnexion.bind(this);
    this.verifierConnexion = this.verifierConnexion.bind(this);
  }

  verifierConnexion(connexion) {
    this.setState({ connecter: connexion });
  }

  gererConnexion() {
    if (this.state.connecter) {
      return (
        <Container fluid>
          <Administration />
          {/* <Deconnexion onClick={this.verifierConnexion} /> */}
        </Container>
      );
    } else {
      return <Login onClick={this.verifierConnexion} />;
    }
  }
  render() {
    return this.gererConnexion();
  }
}
export default Connexion;
