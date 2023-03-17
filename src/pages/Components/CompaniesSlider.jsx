import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Tcs from "../Images/TCS.png";
import Accenture from "../Images/Accenture.png";
import Zoho from "../Images/Zoho.png";
import Wipro from "../Images/Wipro.png";
import Cognizant from "../Images/Cognizant.png";
import Infosys from "../Images/Infosys.png";
import Amazon from "../Images/Amazon.png";
import Hexaware from "../Images/Hexaware.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Assest/Style.css";

import "./Assest/Slider.css";

// import required modules
import { Autoplay } from "swiper";

export default function CompaniesSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="cmpny-image">
            <img src={Cognizant} alt="Cognizant" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cmpny-image">
            <img src={Tcs} alt="Tcs" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cmpny-image">
            <img src={Accenture} alt="Accenture" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cmpny-image">
            <img src={Hexaware} alt="Hexaware" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cmpny-image">
            <img src={Zoho} alt="Zoho" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cmpny-image">
            <img src={Wipro} alt="Wipro" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cmpny-image">
            <img src={Amazon} alt="Amazon" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cmpny-image">
            <img src={Infosys} alt="Infosys" className="img-fluid" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
