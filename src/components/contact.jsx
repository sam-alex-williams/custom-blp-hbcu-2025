import '../styles.css';

export const Contact = (props) => {  
  return (
    <div id="footer">
      <div id="contact">
        <div className="container">
          <div className="col-xs-12">
            <h3>Project Stand Up, 501(c)(3)</h3>
            <div className="row">
              <div className="col-sm-6 col-md-4 footer-block">
                <img src="img/psu-logo-removed-bg.png" alt="PSU logo" className="img-responsive"></img>
                
              </div>
              <div className="col-xs-12 col-md-6">
                <p>Primary Website: <a href="https://www.projectstand-up.org">www.projectstand-up.org</a></p>
                <p>Secondary Website: <a href="https://www.choosingtolifteveryvoiceandsing.com">www.choosingtolifteveryvoiceandsing.com</a></p>
                <p>Phone Number: (682) 540-3212</p>
                <p>Email Address: <a href="mailto:projectstandup1@gmail.com">
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
