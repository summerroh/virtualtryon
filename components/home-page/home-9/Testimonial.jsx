"use client";

import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
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

  const testimonialData = [
    {
      id: 1,
      name: "Martin Jonas",
      location: "USA",
      rating: 5,
      content:
        "The passage experienced a surgu popularity during the ios when Letraset used it on their lor bonord dry-transfer sheets &amp; again during the sample.",
      color: "#B67DFF",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 2,
      name: "Rashed Ka",
      location: "USA",
      rating: 5,
      content:
        "The passage experienced a surgu popularity during the ios when Letraset used it on their lor bonord dry-transfer sheets &amp; again during the sample.",
      color: "#FFBC3A",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 3,
      name: "Martin Jonas",
      location: "USA",
      rating: 5,
      content:
        "The passage experienced a surgu popularity during the ios when Letraset used it on their lor bonord dry-transfer sheets &amp; again during the sample.",
      color: "#49E5EF",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 4,
      name: "Rashed Ka",
      location: "USA",
      rating: 5,
      content:
        "The passage experienced a surgu popularity during the ios when Letraset used it on their lor bonord dry-transfer sheets &amp; again during the sample.",
      color: "#8F6BF6",
      icon: "/images/icon/icon_42.svg",
    },
  ];

  return (
    <Slider {...settings} arrows={false}>
      {testimonialData.map((testimonial) => (
        <div className="item" key={testimonial.id}>
          <div className="feedback-block-four position-relative">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src={testimonial.icon} alt="icon" />
            </div>
            <p className="tx-dark">{testimonial.content}</p>
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="name fs-20 fw-500 m0 tx-dark">
                {testimonial.name}
                <span className="fw-normal opacity-50 fs-16">
                  {" "}
                  {testimonial.location}
                </span>
              </h6>
              <ul className="style-none d-flex rating">
                {[...Array(testimonial.rating)].map((star, index) => (
                  <li key={index}>
                    <i className="bi bi-star-fill" />
                  </li>
                ))}
              </ul>
            </div>
            <span
              className="ribbon position-absolute"
              style={{ background: testimonial.color }}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
