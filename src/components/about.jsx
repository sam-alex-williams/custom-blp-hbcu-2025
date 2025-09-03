import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Why Play HBCU Bingo?</h2>
              {props.data 
                ? props.data.paragraph.map((text, i) => 
                  <p key={i}>{text}</p>
                ) 
                : <p>loading...</p>}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xs-12 col-md-7">
            <div className="about-text">
            <h2>Why Choose Us?</h2>
            <div>
            <div className="list-style">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => (
                    <li key={`${d}-${i}`}>{d}</li>
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
