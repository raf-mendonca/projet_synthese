import React from "react";
import Col from "react-bootstrap/Col";

export class OffreDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { connecter: false };
  }

  afficherParole() {
    return this.props.album.musiques.map((element, i) => (
      <p>{element.parole}</p>
    ));
  }

  render() {
    return (
      <div>
        <h1>{this.props.album.parole}</h1>
        <Col>
          <p>{this.afficherParole()}</p>
        </Col>
      </div>
    );
  }
}
