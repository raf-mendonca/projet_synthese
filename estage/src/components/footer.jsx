import { useState } from "react";

export const Footer = (props) => {
  return (
    <>
      <div id="services">
        <div className="container">
          <div className="section-title text-center">
            <h2>Ce que disent nos clients</h2>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2021 Rafael Mendonça. Design by{" "}
            <a href="https://github.com/raf-mendonca/eStage" rel="nofollow">
              Raf-Mendonça eStage
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
