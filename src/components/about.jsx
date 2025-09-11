import React from "react";
import '../styles.css';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="about-text">
          <h2>A Community Mission</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              {props.data 
                ? props.data.paragraph.map((text, i) => 
                  <p key={i}>{text}</p>
                ) 
                : <p>loading...</p>}
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/front-cover.png" className="img-responsive" alt="" />{" "}
            <div className="about-button text-center">
              <button id="buy-now-btn" className="btn btn-custom btn-lg">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
