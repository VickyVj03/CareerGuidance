import React from "react";
import Tcs from "../Images/TCS.png";
import Accenture from "../Images/Accenture.png";
import Zoho from "../Images/Zoho.png";
import Wipro from "../Images/Wipro.png";
import Cognizant from "../Images/Cognizant.png";
import Infosys from "../Images/Infosys.png";
import Amazon from "../Images/Amazon.png";
import Hexaware from "../Images/Hexaware.png";
import "./Assest/Style.css";

export default class SideBar extends React.Component {
  render() {
    return (
      <>
        <div className="container mt-5">
          <span className="experince-header-set title2 mt-5 ">
            <p>
              Our students have made successful transitions <br /> to the
              following companies
            </p>
          </span>
          <div className="row tie-up">
            <div className="cmpny-image">
              <img src={Cognizant} alt="Cognizant" className="img-fluid" />
            </div>

            <div className="cmpny-image">
              <img src={Tcs} alt="Tcs" className="img-fluid" />
            </div>

            <div className="cmpny-image">
              <img src={Accenture} alt="Accenture" className="img-fluid" />
            </div>

            <div className="cmpny-image">
              <img src={Hexaware} alt="Hexaware" className="img-fluid" />
            </div>
          </div>

          <div className="row tie-up">
            <div className="cmpny-image">
              <img src={Zoho} alt="Zoho" className="img-fluid" />
            </div>
            <div className="cmpny-image">
              <img src={Wipro} alt="Wipro" className="img-fluid" />
            </div>

            <div className="cmpny-image">
              <img src={Amazon} alt="Amazon" className="img-fluid" />
            </div>

            <div className="cmpny-image">
              <img src={Infosys} alt="Infosys" className="img-fluid" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
