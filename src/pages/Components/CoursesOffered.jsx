import "./Assest/Style.css";
import React from "react";
import { Link } from "react-router-dom";

class CoursesOffered extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="container">
            <h1 className="main-title">Popular Courses</h1>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-12 course-container">
                <div className="course-card-1">
                  <div className="course-img course-image-1"></div>
                  <div className="course-content">
                    <div className="course-title">Front End Devlopment</div>
                    <div className="course-info">
                      <p>
                        Front-end development refers to the creation and
                        implementation of the visual and interactive components
                        of a website. This involves writing code using languages
                        such as HTML, CSS, and JavaScript, to create and design
                        the layout, styling, and functionality of a website or
                        application.
                      </p>
                    </div>
                  </div>
                  <Link
                    className="view-details rounded-pill mx-3 mb-4"
                    type="button"
                    to="/development"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-12 course-container">
                <div className="course-card-2">
                  <div className="course-img course-image-2"></div>
                  <div className="course-content">
                    <div className="course-title">Testing</div>
                    <div className="course-info">
                      <p>
                        Software testing is the process of verifying and
                        validating a software product or system to ensure that
                        it meets the specified requirements and performs as
                        expected. The goal of software testing is to identify
                        defects, errors, or bugs in the software and report them
                        to the development team for correction.
                      </p>
                    </div>
                  </div>
                  <Link
                    className="view-details rounded-pill mx-3 mb-4"
                    type="button"
                    to="/testing"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-12 course-container">
                <div className="course-card-3">
                  <div className="course-img course-image-3"></div>
                  <div className="course-card-body-3">
                    <div className="course-content">
                      <div className="course-title">AWS Web Services</div>
                      <div className="course-info">
                        <p>
                          Amazon Web Services (AWS) is a cloud-based platform
                          that offers a wide range of computing resources,
                          storage, and databases.It is a collection of remote
                          computing services that make up a cloud computing
                          platform.AWS provides a range of infrastructure
                          services can use to build scalable and flexible
                          applications.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="view-details rounded-pill mx-3 mb-4"
                    type="button"
                    to="/aws"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-12 course-container">
                <div className="course-card-1">
                  <div className="course-img course-image-4"></div>
                  <div className="course-content">
                    <div className="course-title">Python</div>
                    <div className="course-info">
                      <p>
                        Python is a popular high-level programming language
                        known for its simplicity, readability, and versatility.
                        It is an interpreted language, which means that the code
                        is executed line by line, making it ideal for rapid
                        prototyping, scripting, and automation tasks. Python can
                        be used for a wide range of applications.
                      </p>
                    </div>
                  </div>
                  <Link
                    className="view-details rounded-pill mx-3 mb-4"
                    type="button"
                    to="/python"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-12 course-container">
                <div className="course-card-2">
                  <div className="course-img course-image-5"></div>
                  <div className="course-content">
                    <div className="course-title">UI&UX</div>
                    <div className="course-info">
                      <p>
                        UI/UX refers to the user interface and user experience
                        design of a digital product or service. UI design
                        focuses on the visual aspects of the product, while UX
                        design is concerned with the overall user experience,
                        including usability and user satisfaction.The goal of
                        UI/UX design is to create a seamless enjoyable
                        experience.
                      </p>
                    </div>
                  </div>
                  <Link
                    className="view-details rounded-pill mx-3 mb-4"
                    type="button"
                    to="/uiux"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-12 course-container">
                <div className="course-card-3">
                  <div className="course-img course-image-6"></div>
                  <div className="course-card-body-3">
                    <div className="course-content">
                      <div className="course-title">Oracle PL/SQL</div>
                      <div className="course-info">
                        <p>
                          Oracle PL/SQL is a procedural language designed
                          specifically for the Oracle Database management
                          system. It combines the SQL query language with
                          procedural constructs, allowing developers to create
                          more sophisticated database applications. PL/SQL can
                          be used to write triggers, functions, procedures,
                          packages.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="view-details rounded-pill mx-3 mb-4"
                    type="button"
                    to="/oracle"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CoursesOffered;
