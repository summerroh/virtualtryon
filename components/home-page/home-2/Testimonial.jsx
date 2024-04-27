"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Very easy to set up. I had no experience with hosting before signing up with HostGator but they've made everything seem simple.",
      author: "Rashed ka.",
      location: "Italy",
    },
    {
      quote:
        "Very easy to set up. I had no experience with hosting before signing up with HostGator but they've made everything seem simple.",
      author: "Zubayer Hasan",
      location: "Spain",
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: true,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-md-10 mx-auto">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div className="item" key={index}>
                <div className="feedback-block-six text-center">
                  <p className="text-white mb-65 lg-mb-50">
                    {testimonial.quote}
                  </p>
                  <h4 className="text-white d-inline-block position-relative">
                    {testimonial.author}{" "}
                    <span className="fw-light">{testimonial.location}</span>
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <ul className="slider-arrows slick-arrow-four sm-mt-40 d-flex justify-content-center style-none">
        <li
          className="prev_s2 slick-arrow tran3s"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <i className="bi bi-arrow-left" />
        </li>
        <li
          className="next_s2 slick-arrow tran3s"
          onClick={() => sliderRef.current.slickNext()}
        >
          <i className="bi bi-arrow-right" />
        </li>
      </ul>
    </div>
  );
};

export default Testimonial;
