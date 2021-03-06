import React from "react";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";
//importer LOGO e stage
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleConnexion = this.handleConnexion.bind(this);
  }
  //Connexion administration
  handleConnexion() {
    let connecter = false;

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    if (email.toLowerCase() === "etudiant@gmail.com" && pass === "patate") {
      connecter = true;
    }
    if (email.toLowerCase() === "admin@gmail.com" && pass === "patate") {
      connecter = true;
    }
    this.props.onClick(connecter);
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <Row className="text-center">
            <Col>
              <h1>CONNEXION E STAGE</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <button
                  className="btn btn-custom btn-lg ml-2"
                  onClick={this.handleConnexion}
                  title="buttonMarche"
                >
                  Submit
                </button>
              </Form>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}
