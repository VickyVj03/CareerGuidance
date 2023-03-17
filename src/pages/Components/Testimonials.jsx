// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Assest/Testimonials.css";
import Satyan from "../Images/Reviews/Satyan.jpeg";
import Prem from "../Images/Reviews/Prem.jpeg";
import Jerold from "../Images/Reviews/JeroldWilson.jpeg";
import Santhosh from "../Images/Reviews/Santhosh.jpeg";
import Baskar from "../Images/Reviews/baskar.jpg";

import Quotes from "../Images/left-quote.png";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <div className="review-card">
            <div className="review-content">
              <img src={Quotes} alt="" className=" quotes" />
              <br />
              <p className="review-para">
                "Such a good institute to learn. The teach us kindly, They have
                make us to focus on the course that we have taken and guide us
                to learn easily. I got placed on mnc company. My couse is core
                java & Frontend development."
              </p>
            </div>
            <div className="review-description">
              <div className="container">
                <div className="row studentReview">
                  <div className="review-image col-lg-4 col-12">
                    <div className="review-img">
                      <img src={Satyan} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-12 details">
                    <p className="review-title">Satyan</p>
                    <p className="review-desig">SQL DEVELOPER(TCS)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="review-content">
              <img src={Quotes} alt="" className=" quotes" />
              <br />
              <p className="review-para">
                If you wan't to build your career or skills ,I will suggest you
                career guidance technologies. One of the best institute, if you
                ask too many doubts , though the staffs are highly trained
                professionals.
              </p>
            </div>
            <div className="review-description">
              <div className="container">
                <div className="row studentReview">
                  <div className="review-image col-lg-4 col-12">
                    <div className="review-img">
                      <img src={Prem} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-12 details">
                    <p className="review-title">Prem</p>
                    <p className="review-desig">Automation Tester(CTS)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="review-content">
              <img src={Quotes} alt="" className=" quotes" />
              <br />
              <p className="review-para">
                Best institute for software courses. All the classes were very
                informative and engaging. The courses are taught in depth that
                it can be understood and is practical even for a person with
                zero knowledge in coding
              </p>
            </div>
            <div className="review-description">
              <div className="container">
                <div className="row studentReview">
                  <div className="review-image col-lg-4 col-12">
                    <div className="review-img">
                      <img src={Santhosh} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-12 details">
                    <p className="review-title">Santhosh</p>
                    <p className="review-desig">
                      Front End Developer(Solverminds)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="review-content">
              <img src={Quotes} alt="" className=" quotes" />
              <br />
              <p className="review-para">
                Best institute for software courses. All the classes were very
                informative and engaging. The courses are taught in depth that
                it can be understood and is practical even for a person with
                zero knowledge in coding
              </p>
            </div>
            <div className="review-description">
              <div className="container">
                <div className="row studentReview">
                  <div className="review-image col-lg-4">
                    <div className="review-image">
                      <div className="review-img">
                        <img src={Jerold} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-12 details">
                    <p className="review-title">Jerold Wilson A</p>
                    <p className="review-desig">Automation Tester(TCS)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="review-content">
              <img src={Quotes} alt="" className=" quotes" />
              <br />
              <p className="review-para">
                Very much good in helping us to enhance our skills, confident
                level and communications. Teaching method will increase our
                confidence level in our career path. Personally I gained good
                knowledge in subject oriented field.
              </p>
            </div>
            <div className="review-description">
              <div className="container">
                <div className="row studentReview">
                  <div className="review-image col-lg-4 col-12">
                    <div className="review-img">
                      <img src={Baskar} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-12 details">
                    <p className="review-title">Baskar</p>
                    <p className="review-desig">Full Stack Developer (SMT)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
