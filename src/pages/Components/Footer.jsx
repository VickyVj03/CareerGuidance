import "./Assest/Style.css";
import React from "react";
import "./Assest/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-4 col-xs-12">
                  <div className="single_footer">
                    <h4>Address</h4>
                    <p>
                      Career Guidance Technologies, <br />
                      No.24 A, Second Floor <br /> Third Main Road, KK Nagar,{" "}
                      <br />
                      Srinivasapuram Guduvancherry. <br />
                      Chennai 603-202
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single_footer single_footer_address">
                    <h4>Page Link</h4>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Courses </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single_footer single_footer_address">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.083706533847!2d80.0520945147389!3d12.837867290943699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b007971087883f5%3A0x518ecbdae2d8bcee!2sCareer%20Guidance%20Technologies%2C%20Guduvancheri!5e0!3m2!1sen!2sin!4v1678181804916!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="map"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <p className="copyright">
                    Copyright © 2019{" "}
                    <a href="#">Career Guidance Technologies</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Footer;
