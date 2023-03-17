import "./Assest/Style.css";
import React from "react";
import UIUXTab from "./UIUXTab";

class UIUX extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <div id="UIUX" className="UIUXDevelop">
          <div>
            <h1 className="main-title d-block m-block mx-auto">UI & UX</h1>
            <div className="container course-container">
              <UIUXTab />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UIUX;
