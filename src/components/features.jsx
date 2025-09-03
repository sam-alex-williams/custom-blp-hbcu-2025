import React from "react";
import '../styles.css';

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container feature-container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Why You'll Love It</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.features.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                </div>
              ))
            : "Loading..."}
        </div>
        <div className="row">
          {props.data
            ? props.data.traits.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
