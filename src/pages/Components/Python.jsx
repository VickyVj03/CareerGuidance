import "./Assest/Style.css";
import React from "react";
import PythonTab from "./PythonTab";

class Python extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <div id="python_develop" className="pythonDevelopment">
          <div>
            <h1 className="main-title d-block m-block mx-auto">
              Python Development
            </h1>
            <div className="container course-container">
              <PythonTab />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Python;
