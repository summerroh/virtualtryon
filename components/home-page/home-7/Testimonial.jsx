"use client";

import React from "react";
import Slider from "react-slick";

const items = [
  {
    name: "Martin Jonas",
    location: "USA",
    image: "/images/media/img_18.jpg",
    rating: 5,
    feedback:
      "We have 9,000 agents around the country. Find agents near your neighborhood.",
  },
  {
    name: "Rashed ka.",
    location: "Brazil",
    image: "/images/media/img_19.jpg",
    rating: 5,
    feedback:
      "We have 9,000 agents around the country. Find agents near your neighborhood.",
  },
  {
    name: "Jannatul Fa.",
    location: "England",
    image: "/images/media/img_20.jpg",
    rating: 5,
    feedback:
      "We have 9,000 agents around the country. Find agents near your neighborhood.",
  },
  {
    name: "Martin Jonas",
    location: "USA",
    image: "/images/media/img_18.jpg",
    rating: 5,
    feedback:
      "We have 9,000 agents around the country. Find agents near your neighborhood.",
  },
  {
    name: "Rashed ka.",
    location: "Brazil",
    image: "/images/media/img_19.jpg",
    rating: 5,
    feedback:
      "We have 9,000 agents around the country. Find agents near your neighborhood.",
  },
];

const FeedbackSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
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
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="item">
          <div className="feedback-block-three">
            <ul className="style-none d-flex rating">
              {[...Array(item.rating)].map((_, index) => (
                <li key={index}>
                  <i className="bi bi-star-fill" />
                </li>
              ))}
            </ul>
            <p>{item.feedback}</p>
            <div className="d-flex align-items-center">
              <img
                src={item.image}
                alt="media"
                className="avatar rounded-circle"
              />
              <h6 className="name fs-20 fw-500 m0 ps-4">
                {item.name}{" "}
                <span className="d-block fw-normal">{item.location}</span>
              </h6>
              <img
                src="/images/icon/icon_35.svg"
                alt="media"
                className="ms-auto"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FeedbackSlider;
