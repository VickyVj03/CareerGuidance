import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import CoursesOffered from "./CoursesOffered";
import Development from "./Devlopment";
import HomePage from "./HomePage";
import NavBar from "./NavigationBar";
import StudentForm from "./StudentForm";
import WithNavigation from "./WithNavigation";
import Footer from "./Footer";
import Testing from "./Testing";
import ScrollToTop from "./ScrollToTop";
import Python from "./Python";
import Aws from "./Aws";
import UIUX from "./UIUX";

import Oracle from "./Oracle";

function Navigator() {
  const CoursesWithNavigation = WithNavigation(CoursesOffered);
  const AboutUsWithNavigation = WithNavigation(AboutUs);
  const FormWithNavigation = WithNavigation(StudentForm);
  const DevelopmentWithNavigation = WithNavigation(Development);
  const HomePageWithNavigation = WithNavigation(HomePage);
  const NavBarWithNavigation = WithNavigation(NavBar);
  const FooterWithNavigation = WithNavigation(Footer);
  const TestingWithNavigation = WithNavigation(Testing);

  const PythonWithNavigation = WithNavigation(Python);
  const AWSWithNavigation = WithNavigation(Aws);
  const UIUXWithNavigation = WithNavigation(UIUX);
  const OracleWithNavigation = WithNavigation(Oracle);

  return (
    <div className="Navigator">
      <Router>
        <ScrollToTop />
        <NavBarWithNavigation />
        <Routes>
          <Route path="/" element={<HomePageWithNavigation />}></Route>
          <Route path="/home" element={<HomePageWithNavigation />}></Route>
          <Route path="/courses" element={<CoursesWithNavigation />}></Route>
          <Route path="/aboutus" element={<AboutUsWithNavigation />}></Route>
          <Route path="/form" element={<FormWithNavigation />}></Route>
          <Route
            path="/development"
            element={<DevelopmentWithNavigation />}
          ></Route>
          <Route path="/testing" element={<TestingWithNavigation />}></Route>
          <Route path="/aws" element={<AWSWithNavigation />}></Route>
          <Route path="/python" element={<PythonWithNavigation />}></Route>
          <Route path="/uiux" element={<UIUXWithNavigation />}></Route>
          <Route path="/oracle" element={<OracleWithNavigation />}></Route>
        </Routes>
        <FooterWithNavigation />
      </Router>
    </div>
  );
}

export default Navigator;
