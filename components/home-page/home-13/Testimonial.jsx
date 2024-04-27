"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

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
              <div
                className="feedback-block-ten"
                style={{ background: testimonial.background }}
              >
                <div className="cmp-name fw-500 tx-dark">
                  {testimonial.company}
                </div>
                <div className="fs-18 tx-dark">{testimonial.position}</div>
                <p className="tx-dark mt-40 mb-70 lg-mt-30 lg-mb-50">
                  {testimonial.text}
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="fw-500 tx-dark fs-18">
                    Qulaity &amp; Cost: 5.00
                  </div>
                  <img src="/images/icon/icon_98.svg" alt="" />
                </div>
              </div>
              {/* /.feedback-block-ten */}
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
