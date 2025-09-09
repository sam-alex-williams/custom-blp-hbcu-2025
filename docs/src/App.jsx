import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
// import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  console.log(landingPageData);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={{items: (landingPageData.Features) ? landingPageData.Features.standardTraits : [], h2: "Why Bingo?" }} />
      <Features data={{items: (landingPageData.Features) ? landingPageData.Features.addedTraits : [], h2: "Why HBCU Bingo?" }} />
      <div className="about-button text-center">
        <button id="buy-now-btn" className="btn btn-custom btn-lg">Buy Now</button>
      </div>
      <About data={landingPageData.About} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
