import "./Assest/Style.css";
import React from "react";
import CoreJava from "../Images/CoreJava.jpg";
import JavaScript from "../Images/JavaScript.jpg";
import ReactJS from "../Images/ReactJS.png";
import Bootstrap from "../Images/bootstrap5.jpeg";
import HTML from "../Images/HTML.jpg";
import CSS from "../Images/CSS.png";
import Tabs from "./Tabs";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";
import Tab6 from "./Tab6";
// import Dropdown from "react-dropdown";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap";
// import Button from "react-bootstrap";

class Development extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <div id="develop" className="development">
          <div>
            <h1 className="main-title d-block m-block mx-auto">
              Front End Development
            </h1>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">Core Java</h1>
              <Tabs />
            </div>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">HTML</h1>
              <Tab2 />
            </div>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">CSS</h1>
              <Tab3 />
            </div>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">Bootstrap</h1>
              <Tab4 />
            </div>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">
                Javascript
              </h1>
              <Tab5 />
            </div>
            <div className="container course-container">
              <h1 className="coursetitle d-block m-block mx-auto">React JS</h1>
              <Tab6 />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Development;
