/*import Image from "react-bootstrap/Image";*/
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-6 col-xs-12">
            {" "}
            <img
              src={require("../img/about1.jpg")}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-6 col-xs-12">
            <div className="about-text">
              <h2>Pourquoi publier une offre de stage?</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Pourquoi nous choisir?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
