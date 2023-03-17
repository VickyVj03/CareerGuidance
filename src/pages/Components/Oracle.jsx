import "./Assest/Style.css";
import React from "react";
import OracleTab from "./OracleTab";

class Oracle extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <div id="Oracle" className="OracleDatabase">
          <div>
            <h1 className="main-title d-block m-block mx-auto">
              Oracle & PL/SQL
            </h1>
            <div className="container course-container">
              <OracleTab />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Oracle;
