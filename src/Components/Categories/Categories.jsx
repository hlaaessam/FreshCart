import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { Helmet } from "react-helmet";

export default function Categories() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens 1024px and below
        settings: {
          slidesToShow: 3, // Show 3 slides for medium screens
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768, // For screens 768px and below
        settings: {
          slidesToShow: 2, // Show 2 slides for small tablets
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480, // For screens 480px and below
        settings: {
          slidesToShow: 1, // Show 1 slide for mobile devices
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  async function getCategory() {
    return await axios.get("http://localhost:3000/categories");
  }

  const { data } = useQuery("category", getCategory, {
    cacheTime: 3000,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Categories</title>
      </Helmet>
      <div className="slider-container">
        <Slider {...settings}>
          {data?.data.map((category, key) => (
            <div className="my-4 width-[330px]" key={key}>
              {settings.responsive.breakpoint === 480 ? (
                <img
                  className="w-100"
                  height={200}
                  src={category.image}
                  alt="img"
                />
              ) : (
                <img
                  className="w-100"
                  height={200}
                  src={category.image}
                  alt="img"
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
