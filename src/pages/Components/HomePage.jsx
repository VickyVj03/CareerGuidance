import CoursesOffered from "./CoursesOffered";
import "./Assest/Style.css";
import AboutUs from "./AboutUs";
import React from "react";
import LandingPage from "./LandingPage";
import CompaniesSlider from "./CompaniesSlider";
import Testimonials from "./Testimonials";
// import Reviews from "./Reviews";
// import ReviewForm from "./Form";
// import Map from "./Map";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <section id="home" className="banner">
          <LandingPage />
        </section>
        <section className="courses mt-2">
          <CoursesOffered />
        </section>
        <section id="about_Us" className="aboutUs">
          <AboutUs />
        </section>
        <h1 className="main-title">Review from our Students</h1>
        <Testimonials />
        <section className="sidebar mt-2">
          <h1 className="main-title">
            Our students have made successful transitions <br /> to the
            following companies
          </h1>
          <CompaniesSlider />
        </section>

        <section id="google_Rating" className="googleRating"></section>
        <section></section>
        <section id="google_Map" className="googleMap mb-3">
          <div className="container gMap"></div>
        </section>
      </>
    );
  }
}

export default HomePage;
