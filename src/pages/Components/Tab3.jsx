import React from "react";
import CSS from "../Images/CSS.png";
import "./Assest/TabsStyle.css";
let data = [
  {
    name: "Overview",
    text: "CSS (Cascading Style Sheets) is a programming language used for describing the presentation and styling of HTML (Hypertext Markup Language) documents. It allows developers to control the layout, fonts, colors, and other visual elements of a webpage, making it more visually appealing and user-friendly. CSS can be used alongside HTML and JavaScript to create responsive and interactive web pages.",
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
                  <div className="courseDetails col">4 days</div>
                </div>
              </li>
              <br />
              <li>
                <div className="row">
                  <div className="coursename col-2">Topics Covered :</div>
                  <div className="courseDetails col">
                    Selectors
                    <br />
                    Box model
                    <br />
                    Layout
                    <br />
                    Typography
                    <br />
                    Color
                    <br />
                    Backgrounds
                    <br />
                    Transitions and animations
                    <br />
                    Media queries
                    <br />
                    CSS Framweworks
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

class Tab3 extends React.Component {
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
          <div className="col-lg-5 col-12  course-img-holder">
            <img src={CSS} alt="" />
          </div>
          <div className="col-lg-7 col-12 mobile-content">{content}</div>
        </div>
      </div>
    );
  }
}

export default Tab3;