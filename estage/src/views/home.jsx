import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { FeaturesFind } from "../components/featuresfind";
import { About } from "../components/about";
import { AboutLeft } from "../components/aboutleft";
import { Footer } from "../components/footer";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/landingPageData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data + "!!!!!!!!!!!!!!!!!");
        setLandingPageData(data);
      });
  }, []);

  return (
    <>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.OffresVedettes} />
      <About data={landingPageData.About} />
      <FeaturesFind data={landingPageData.CandidatsVedettes} />
      <AboutLeft data={landingPageData.About} />
      <Footer data={landingPageData.Testimonials} />
    </>
  );
};

export default Home;
