"use client";

import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Jubayer Hasan",
      location: "Texas",
      feedback:
        "We’v 9,000 agents around the country, Find agents near your neighborhood.",
    },
    {
      name: "Rashed Kabir",
      location: "California",
      feedback:
        "We’v 9,000 agents around the country, Find agents near your neighborhood.",
    },
    {
      name: "Mahfuz Riad",
      location: "Brazil",
      feedback:
        "We’v 9,000 agents around the country, Find agents near your neighborhood.",
    },
  ];

  return (
    <Slider {...settings} arrows={false}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="item">
          <div className="feedback-block-twelve">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src="/images/icon/icon_42.svg" alt="" />
            </div>
            <p className="tx-dark mt-35 mb-40 pe-xxl-4">
              {testimonial.feedback}
            </p>
            <h6 className="tx-dark fs-20">
              {testimonial.name},
              <span className="fw-normal opacity-50">
                {testimonial.location}
              </span>
            </h6>
          </div>
          {/* /.feedback-block-twelve */}
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
