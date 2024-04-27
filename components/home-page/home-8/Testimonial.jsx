"use client";

import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    logo: "/images/logo/Plogo-28.png",
    rating: 5,
    feedback:
      "Certainly from my perspective quis been a great success with due WP giving us that enterprises level assured quality.",
    cost: 15.0,
  },
  {
    id: 2,
    logo: "/images/logo/Plogo-29.png",
    rating: 5,
    feedback:
      "They not only understand what I say but read between the lines and also give me ideas of my own.",
    cost: 15.0,
  },
  {
    id: 3,
    logo: "/images/logo/Plogo-30.png",
    rating: 5,
    feedback:
      "Certainly from my perspective quis been a great success with due WP giving us that enterprises level assured quality.",
    cost: 15.0,
  },
  {
    id: 4,
    logo: "/images/logo/Plogo-29.png",
    rating: 5,
    feedback:
      "They not only understand what I say but read between the lines and also give me ideas of my own.",
    cost: 18.0,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="item">
          <div className="feedback-block-seven">
            <div className="top-header d-flex align-items-center justify-content-between">
              <div>
                <img src={testimonial.logo} alt="" />
                <ul className="style-none d-flex rating pt-15">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <li key={index}>
                      <i className="bi bi-star-fill" />
                    </li>
                  ))}
                </ul>
              </div>
              <img src="/images/icon/icon_85.svg" alt="" width={50} />
            </div>
            <p className="text-white">{testimonial.feedback}</p>
            <div className="cost fw-500 fs-18 text-white">
              Qulaity &amp; Cost:
              <span className="opacity-50">{testimonial.cost}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
