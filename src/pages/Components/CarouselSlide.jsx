import slide1 from "../Images/Slide1.jpg";
import slide2 from "../Images/Slide2.jpg";
import slide3 from "../Images/Slide3.jpg";
import "./Assest/Style.css";
import Carousel from "react-bootstrap/Carousel";
import React from "react";

class CarouselSlide extends React.Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item interval={3000}>
            <img className="carousel" src={slide1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="carousel" src={slide2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="carousel" src={slide3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default CarouselSlide;

// <Swiper
//         pagination={{
//           dynamicBullets: true,
//         }}
//         modules={[Pagination]}
//         classNameName="mySwiper"
//       >
//         <SwiperSlide>
//           <img src={slide1} className="d-block w-100 carousel" alt="..."></img>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide2} className="d-block w-100 carousel" alt="..."></img>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide3} className="d-block w-100 carousel" alt="..."></img>
//         </SwiperSlide>
//       </Swiper>

// //Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper";
