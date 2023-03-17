import "./Assest/Style.css";
import React from "react";
import AwsTab from "./AwsTab";
import "./Assest/Style.css";

class Aws extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <div id="amazon_web" className="amazonWeb">
          <div>
            <h1 className="main-title d-block m-block mx-auto">AWS</h1>
            <div className="container course-container">
              <AwsTab />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Aws;
