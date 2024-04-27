"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const testimonialData = [
    {
      background: "#825EFF",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "We have 9,000 agents around the country, Find agents near your neighborhood.",
      avatarSrc: "/images/media/img_18.jpg",
      name: "Martin Jonas",
      location: "USA",
    },
    {
      background: "#11D09F",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "We have 9,000 agents around the country, Find agents near your neighborhood.",
      avatarSrc: "/images/media/img_19.jpg",
      name: "Martin Jonas",
      location: "USA",
    },
    {
      background: "#FFB900",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "We have 9,000 agents around the country, Find agents near your neighborhood.",
      avatarSrc: "/images/media/img_20.jpg",
      name: "Martin Jonas",
      location: "USA",
    },
    {
      background: "#FF5E5E",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "We have 9,000 agents around the country, Find agents near your neighborhood.",
      avatarSrc: "/images/media/img_21.jpg",
      name: "Martin Jonas",
      location: "USA",
    },
    {
      background: "#EF4DD5",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "We have 9,000 agents around the country, Find agents near your neighborhood.",
      avatarSrc: "/images/media/img_19.jpg",
      name: "Martin Jonas",
      location: "USA",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="slider-wrapper feedback_slider_five" data-aos="fade-up">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {testimonialData.map((testimonial, index) => (
            <div className="item" key={index}>
              <div className="feedback-block-five bg-white">
                <div
                  className="icon p-3 d-flex align-items-center justify-content-center rounded-circle"
                  style={{ background: testimonial.background }}
                >
                  <img src={testimonial.imgSrc} alt="img" />
                </div>
                <p className="tx-dark mt-20 pb-30">{testimonial.content}</p>
                <div className="d-flex align-items-center">
                  <img
                    src={testimonial.avatarSrc}
                    alt="img"
                    className="avatar rounded-circle"
                  />
                  <h6 className="name fs-20 fw-500 m0 ps-4">
                    {testimonial.name}
                    <span className="d-block fw-normal">
                      {testimonial.location}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <ul
        className="slider-arrows slick-arrow-three d-flex justify-content-center style-none"
        data-aos="fade-left"
      >
        <li
          className="prev_f2 slick-arrow rounded-circle text-center fs-20 tran3s"
          onClick={handlePrevClick}
        >
          <i className="bi bi-chevron-left" />
        </li>
        <li
          className="next_f2 slick-arrow rounded-circle text-center fs-20 tran3s"
          onClick={handleNextClick}
        >
          <i className="bi bi-chevron-right" />
        </li>
      </ul>
    </>
  );
};

export default Testimonial;
