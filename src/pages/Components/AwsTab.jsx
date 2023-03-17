import React from "react";
import Aws from "../Images/aws.jpg";
import "./Assest/TabsStyle.css";

let data = [
  {
    name: "Overview",
    text: "AWS (Amazon Web Services) is a cloud computing platform that provides a range of services such as computing, storage, and databases, as well as tools for deploying, managing, and scaling applications. It offers a highly reliable and scalable infrastructure that enables businesses to run applications and services on the cloud, reducing the need for on-premises hardware and infrastructure. AWS is widely used by businesses of all sizes and across various industries for its flexibility, security, and cost-effectiveness.",
  },
  {
    name: "Course Details",
    text: (
      <p className="course-detail">
        <div className="card topics">
          <div className="card-body">
            <h5 className="card-title title5">Course Details</h5>
            <ul className="details-list">
              <li>
                <div className="row">
                  <div className="coursename col-2">Course Duration:</div>
                  <div className="courseDetails col">3 Month</div>
                </div>
              </li>
              <br />
              <li>
                <div className="row">
                  <div className="coursename col-2">Topics Covered :</div>
                  <div className="courseDetails col">
                    Aws Intro and Ec2 Creation
                    <br />
                    Ec2 Application Hosting
                    <br />
                    Ec2 Advanced
                    <ul>
                      <li>Volume</li>
                      <li>SnapShot</li>
                      <li>Ami</li>
                      <li>Elastic Ip</li>
                    </ul>
                    S3
                    <br />
                    IAM
                    <br />
                    Linux Commands
                    <br />
                    Sns Sqs With Cloud Watch
                    <br />
                    Elb Autoscalling And Cloud Watch
                    <br />
                    Elastic Beanstalk
                    <br />
                    Code Deploy and Pipeline
                    <br />
                    AWS VPC
                    <br />
                    Cloud Front Formation
                    <br />
                    Lambda
                    <br />
                    Route 53
                    <br />
                    RDS and Dynamo
                    <br />
                    Redshift
                    <br />
                  </div>
                </div>
              </li>
              <br />
              <li> Conducting Daily Tasks for Success</li>
              <br />
              <li>Every weekends mock will be conducted</li>
            </ul>
          </div>
        </div>
      </p>
    ),
  },
];

class AwsTab extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: 0,
      data: data,
    };

    this.changeTabOnClick = this.changeTabOnClick.bind(this);
  }

  changeTabOnClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    return (
      <div className="tabs-body">
        <TabHeader
          data={this.state.data}
          click={this.changeTabOnClick}
          activeId={this.state.activeTab}
        />
        <TabContent data={this.state.data} activeId={this.state.activeTab} />
      </div>
    );
  }
}

class TabHeader extends React.Component {
  doClick(index, event) {
    this.props.click(index);
  }

  render() {
    let activeClass = this.props.activeId;

    let tabs = this.props.data.map((item, index) => {
      return (
        <li className={activeClass === index ? "active" : ""}>
          <a onClick={this.doClick.bind(this, index)}>
            <span>{item.name}</span>
          </a>
        </li>
      );
    });

    return <ul className="tabs-header">{tabs}</ul>;
  }
}

class TabContent extends React.Component {
  render() {
    let activeClass = this.props.activeId;

    let content = this.props.data.map((item, index) => {
      return (
        <div
          className={"tabs-textItem " + (activeClass === index ? "show" : "")}
        >
          <p>{item.text}</p>
        </div>
      );
    });

    return (
      <div className="tabs-content">
        <div className="row">
          <div className="col-lg-5 col-12 course-img-holder">
            <img src={Aws} alt="" />
          </div>
          <div className="col-lg-7 col-12 mobile-content">{content}</div>
        </div>
      </div>
    );
  }
}

export default AwsTab;
