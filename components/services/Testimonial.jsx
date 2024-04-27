"use client";

import Slider from "react-slick";
import React, { useRef } from "react";
import Image from "next/image";

const Testimonial = () => {
  const data = [
    {
      imgSrc: "/images/media/img_02.png",
      backgroundColor: "#825EFF",
      rating: "Very solid, 8.3 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
    {
      imgSrc: "/images/media/img_03.png",
      backgroundColor: "#08CE97",
      rating: "Very solid, 7.2 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
    {
      imgSrc: "/images/media/img_02.png",
      backgroundColor: "#FF8A3A",
      rating: "Very solid, 9.1 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
    {
      imgSrc: "/images/media/img_03.png",
      backgroundColor: "#08CE97",
      rating: "Very solid, 10 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
  const sliderRef = useRef(null);

  return (
    <>
      <div className="inner-content mt-100 lg-mt-60">
        <div className="feedback_slider_one custom">
          <Slider {...settings} ref={sliderRef} arrows={false}>
            {data.map((item, index) => (
              <div className="item" key={index}>
                <div className="feedback-block-one pt-45 align-items-end d-sm-flex">
                  <div className="img-meta position-relative">
                    <Image
                      width={297}
                      height={397}
                      src={item.imgSrc}
                      alt="img"
                      className="m-auto"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div
                      className="icon d-flex align-items-center justify-content-center rounded-circle mb-15"
                      style={{ backgroundColor: item.backgroundColor }}
                    >
                      <Image
                        width={28}
                        height={25}
                        src="/images/icon/icon_07.svg"
                        alt="img"
                      />
                    </div>
                    <div className="rating h3 fw-bold tx-dark">
                      {item.rating}
                    </div>
                    <p className="text-lg pt-35 pb-20">{item.text}</p>
                    <h6>
                      {item.author},{" "}
                      <span className="opacity-25">{item.country}</span>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* /.feedback_slider_one */}
      </div>
      {/* /.inner-content */}
    </>
  );
};

export default Testimonial;
