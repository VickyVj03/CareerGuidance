import "./Assest/Style.css";
import Image from "../Images/CGT.png";
import "./Assest/AboutStyle.css";
import About from "../Images/about-1.jpg";
import AboutUsOne from "../Images/about-2.jpg";
import CGT from "../Images/cgt-img.jpg";
import React from "react";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <section>
          <div id="page" className="page1">
            <div id="about" className="pageControl"></div>
            <div className="experince-container-fluid">
              <div className="section-box-container">
                <div className="experince-header">
                  <span className="experince-header-set title1 ">About Us</span>
                </div>
                <div className="about-container">
                  <div className="about-me-section">
                    <div className="about-title">
                      Master Your Skills: Unlock Your Potential at Our Premier
                      Software Training Institute
                    </div>
                    <div className="about-text mt-3">
                      <p className="about-text">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to our
                        career guidance technology platform that focuses on
                        providing quality training in development, software
                        testing and AWS services. We believe that technology is
                        constantly evolving and it is essential to keep up with
                        the latest trends in the industry to succeed. Our team
                        of experienced trainers and mentors are dedicated to
                        helping individuals achieve their career goals and guide
                        them through the constantly evolving world of
                        technology.
                      </p>
                      <br />
                      <p className="about-text">
                        At our platform, we offer a range of courses and
                        training programs that are designed to equip students
                        with the necessary skills and knowledge to thrive in the
                        industry. Our training programs are tailored to meet the
                        needs of students with different backgrounds and levels
                        of experience. We believe that everyone has the
                        potential to succeed and we strive to provide an
                        inclusive and supportive environment that encourages
                        learning and growth.
                      </p>
                      <br />
                    </div>
                  </div>
                  <div className="img-section">
                    <img src={CGT} alt="CGT" className="img-fluid"></img>
                  </div>
                </div>

                <p className="about-text">
                  We not only provide training and guidance but also offer
                  placement services to our students. We have a network of
                  trusted employers who are always on the lookout for talented
                  and skilled individuals to join their teams. We work closely
                  with our students to understand their career goals and
                  preferences, and match them with the right opportunities to
                  kick start their career in the industry.
                </p>

                <div className="about-container">
                  <div className="img-section ms-auto">
                    <img src={AboutUsOne} alt="CGT" className="img-fluid"></img>
                  </div>
                  <div className="about-me-section">
                    <div className="about-text">
                      <p className="about-text">
                        In addition to our technical training, we also provide
                        communication training to our students. We understand
                        the importance of effective communication in the
                        workplace and equip our students with the skills and
                        confidence to communicate effectively with colleagues,
                        clients and other stakeholders.
                      </p>
                      <br />
                      <p className="about-text">
                        At our career guidance technology platform, we are
                        committed to providing quality training, guidance and
                        support to help individuals achieve their career goals.
                        Join us today and take the first step towards a
                        successful career in the ever-evolving world of
                        technology.
                      </p>
                    </div>
                    {/* <div className="about-text">
                      voluptatibus perferendis quasi asperiores voluptatum
                      ducimus tenetur nam sint quos?
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="teaching-team">
            <div className="no-of-students-trained">
              No. of Students Trained <br /> 400+{" "}
            </div>
            <div className="no-of-students-placed">
              No. of Students Placed <br /> 350+{" "}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AboutUs;
