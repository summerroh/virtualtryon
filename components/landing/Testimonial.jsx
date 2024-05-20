"use client";

import { auto } from "@popperjs/core";
import React, { useRef } from "react";
import Slider from "react-slick";
import image from "../../../public/images/media/model2-thumb.png";

const testimonialData = [
  {
    company: "Linkedin",
    position: "Engineer at Google",
    background: "#FFED4E",
    text: "One should not hesitate to ask for the unlikely as they might think.",
  },
  {
    company: "Google",
    position: "Giant search engine",
    background: "#00FCFC",
    text: "One should not hesitate to ask for the unlikely as they might think.",
  },
  {
    company: "Gravity inc.",
    position: "From Google",
    background: "#F27AFF",
    text: "One should not hesitate to ask for the unlikely as they might think.",
  },
  {
    company: "Google",
    position: "Giant search engine",
    background: "#52C1FF",
    text: "One should not hesitate to ask for the unlikely as they might think.",
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div
        className="slider-wrapper feedback_slider_ten pt-70 lg-pt-40"
        data-aos="fade-up"
      >
        <Slider {...settings} arrows={false} ref={sliderRef}>
          {testimonialData.map((testimonial) => (
            <div key={testimonial.company} className="item">
              <img
                src="/images/media/model2-thumb.png"
                alt="img"
                className="lazy-img d-inline"
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </Slider>
        {/* /.feedback_slider_ten */}
      </div>
      <ul
        className="slider-arrows slick-arrow-five d-flex justify-content-center style-none"
        data-aos="fade-left"
      >
        <li
          className="prev_f5 slick-arrow text-center tran3s"
          style={{}}
          onClick={handlePrev}
        >
          <i className="bi bi-arrow-left" />
        </li>
        <li
          className="next_f5 slick-arrow text-center tran3s"
          style={{}}
          onClick={handleNext}
        >
          <i className="bi bi-arrow-right" />
        </li>
      </ul>
    </>
  );
};

export default Testimonial;
