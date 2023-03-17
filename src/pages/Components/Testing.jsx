import React from "react";
import "./Assest/Style.css";
// import CoreJava from "../Images/CoreJava.jpg";
// import Selenium from "../Images/Selenium.jpeg";
// import Manual_Testing from "../Images/Manual_Testing.jpg";
// import Framework from "../Images/Framework.png";
// import SQL from "../Images/SQL.png";
// import API from "../Images/API.jpg";
import TestingTab from "./TestingTab";
import TestingTab2 from "./TestingTab2";
import TestingTab3 from "./TestingTab3";
import TestingTab4 from "./TestingTab4";
import TestingTab5 from "./TestingTab5";
import TestingTab6 from "./TestingTab6";

// import Dropdown from "react-dropdown";
// import Accordion from "react-bootstrap/Accordion";

class Testing extends React.Component {
  render() {
    return (
      <>
        <div id="testing" className="testingCourse">
          <div>
            <h1 className="main-title d-block m-block mx-auto">Testing</h1>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">Core Java</h1>
              <TestingTab />
            </div>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">Selenium</h1>
              <TestingTab2 />
            </div>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">
                Manual Testing
              </h1>
              <TestingTab3 />
            </div>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">
                Frameworks
              </h1>
              <TestingTab4 />
            </div>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">
                SQL(SELECT Query)
              </h1>
              <TestingTab5 />
            </div>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">API</h1>
              <TestingTab6 />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Testing;
