import { useState } from "react";
import '../styles.css';

export const Contact = (props) => {  
  return (
    <div id="footer">
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Project Stand Up</h2>
                <p>Email: <a href="mailto:projectstandup1@gmail.com">
                  projectstandup1@gmail.com
                </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
};
