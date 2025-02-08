import React from "react";
import Slider from "react-slick";

import slider1 from "../../Assets/Image/slider-image-1.jpeg";
import slider2 from "../../Assets/Image/slider-image-2.jpeg";
import slider3 from "../../Assets/Image/slider-image-3.jpeg";

import blog1 from "../../Assets/Image/blog-img-1.jpeg";
import blog2 from "../../Assets/Image/blog-img-2.jpeg";

export default function MainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="row my-5 gx-0">
        <div className="col-md-9">
          <div>
            <Slider {...settings}>
              <img className="w-100" height={400} src={slider1} alt="img" />
              <img className="w-100" height={400} src={slider2} alt="img" />
              <img className="w-100" height={400} src={slider3} alt="img" />
            </Slider>
          </div>
        </div>
        <div className="col-md-3">
          <img className="w-100" src={blog1} height={200} alt="img" />
          <img className="w-100" src={blog2} height={200} alt="img" />
        </div>
      </div>
    </>
  );
}
