import React from "react";
import Python from "../Images/PYTON.png";
import "./Assest/TabsStyle.css";

let data = [
  {
    name: "Overview",
    text: "Python is a popular high-level programming language known for its simplicity, readability, and versatility. It is an interpreted language, which means that the code is executed line by line, making it ideal for rapid prototyping, scripting, and automation tasks. Python can be used for a wide range of applications, including web development, data analysis, machine learning, scientific computing, and more.",
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
                  <div className="courseDetails col">3 Months</div>
                </div>
              </li>
              <br />
              <li>
                <div className="row">
                  <div className="coursename col-2">Topics Covered :</div>
                  <div className="courseDetails col">
                    Memory Management
                    <br />
                    Basic Syntax in Python
                    <br />
                    Variable types
                    <br />
                    Basic Operators
                    <br />
                    Decision Making
                    <br />
                    Loops
                    <br />
                    Numbers
                    <br />
                    Strings
                    <br />
                    Lists
                    <br />
                    Tuples
                    <br />
                    Dictionary
                    <br />
                    Date and Time
                    <br />
                    Functions
                    <br />
                    Modules,Packages,Library
                    <br />
                    Files I/O
                    <br />
                    Exception Handling
                    <br />
                    Object Oriented
                    <br />
                    Regular Expression
                    <br />
                    Predefined Interview Question
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

class PythonTab extends React.Component {
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
            <img src={Python} alt="" />
          </div>
          <div className="col-lg-7 col-12 mobile-content">{content}</div>
        </div>
      </div>
    );
  }
}

export default PythonTab;
