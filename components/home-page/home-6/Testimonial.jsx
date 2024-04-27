"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      id: 1,
      text: "Having a home based business is a wonderful asset to your life. The problem still stands it comes timeadvertise your business for a cheap cost. I know you have looked answer everywhere.",
      name: "Rashed kabir",
      role: "Designer",
    },
    {
      id: 2,
      text: "I really love this product! It has made my life so much easier and I can't imagine going back to the way things were before. Thank you for creating such an amazing solution!",
      name: "John Doe",
      role: "Developer",
    },
    {
      id: 3,
      text: "I was a bit skeptical at first, but after trying this product I was blown away by how effective it is. I would highly recommend it to anyone looking for a solution to their problem!",
      name: "Jane Smith",
      role: "Marketing Manager",
    },
  ];

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="feedback_slider_two">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {testimonials.map((testimonial) => (
            <div className="item" key={testimonial.id}>
              <div className="feedback-block-two text-center">
                <p className="mb-80 lg-mb-40">{testimonial.text}</p>
                <h4 className="m0">{testimonial.name}</h4>
                <span className="opacity-75">{testimonial.role}</span>
              </div>
              {/* /.feedback-block-two */}
            </div>
          ))}
        </Slider>
      </div>
      {/* /.feedback_slider_two */}

      <ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none mt-35">
        <li className="prev_f2 slick-arrow tran3s" onClick={goToPrev}>
          <i className="bi bi-arrow-left" />
        </li>
        {/* End slick prev arrow end */}

        <li className="next_f2 slick-arrow tran3s" onClick={goToNext}>
          <i className="bi bi-arrow-right" />
        </li>
        {/* End slick next arrow end */}
      </ul>
    </>
  );
};

export default Testimonial;
