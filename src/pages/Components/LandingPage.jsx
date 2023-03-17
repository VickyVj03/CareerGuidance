// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

import StudentForm from "./StudentForm";

export default function LandingPage() {
  return (
    <>
      <section className="slide1 slides">
        <div className="row landing-row">
          <div className="col-6 mobile-hide"></div>
          <div className="col-lg-6 col-12 landing-text">
            <div className="text-hold">
              Career Guidance Technology is a software training institute
              provides education and training in various software technologies
              to prepare individuals for careers in the tech industry. We offer
              courses in programming languages, web development, software
              testing, database management, and more. We also provide career
              guidance and placement assistance to help students secure jobs in
              the industry.
            </div>

            <div className="button-holder mobile-view-btn">
              <StudentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
