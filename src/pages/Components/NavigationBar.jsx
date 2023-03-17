import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/CGT.png";
import "./Assest/Style.css";
import StudentForm from "./StudentForm";
import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle = (e) => {
    document.getElementById("myButton").click();
  };

  development = (e) => {
    e.preventDefault();
    this.props.navigate("/development");
    document.getElementById("myButton").click();
  };

  testing = (e) => {
    e.preventDefault();
    this.props.navigate("/testing");
    document.getElementById("myButton").click();
  };

  aws = (e) => {
    e.preventDefault();
    this.props.navigate("/aws");
    document.getElementById("myButton").click();
  };

  python = (e) => {
    e.preventDefault();
    this.props.navigate("/python");
    document.getElementById("myButton").click();
  };

  sql = (e) => {
    e.preventDefault();
    this.props.navigate("/oracle");
    document.getElementById("myButton").click();
  };
  uiux = (e) => {
    e.preventDefault();
    this.props.navigate("/uiux");
    document.getElementById("myButton").click();
  };

  render() {
    return (
      <>
        <Navbar className="navBar" expand="lg">
          <Navbar.Brand href="#home" className="navbarBrand">
            <img
              src={logo}
              alt="CGT-Logo"
              className="logo"
              style={{ width: "90%" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="myButton" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto navbar">
              <Nav.Link className="item" href="#home">
                <Link to="/home" onClick={this.toggle}>
                  Home
                </Link>
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;
              <Nav.Link
                className="item1"
                href="#about_Us"
                onClick={this.toggle}
              >
                About Us
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;
              <NavDropdown
                title="Courses"
                id="basic-nav-dropdown"
                className="courses"
              >
                <NavDropdown.Item
                  className="item3 develop"
                  onClick={this.development}
                >
                  Development
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="item3 testing"
                  onClick={this.testing}
                >
                  Testing
                </NavDropdown.Item>
                <NavDropdown.Item className="item3 testing" onClick={this.aws}>
                  AWS
                </NavDropdown.Item>

                <NavDropdown.Item
                  className="item3 testing"
                  onClick={this.python}
                >
                  Python
                </NavDropdown.Item>
                <NavDropdown.Item className="item3 testing" onClick={this.uiux}>
                  UI/UX
                </NavDropdown.Item>
                <NavDropdown.Item className="item3 testing" onClick={this.sql}>
                  SQL/Oracle
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <StudentForm className="ms-auto" />
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
