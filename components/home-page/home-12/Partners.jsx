"use client";

import React from "react";
import Slider from "react-slick";

const partners = [
  {
    id: 1,
    logo: "/images/logo/Plogo-37.png",
  },
  {
    id: 2,
    logo: "/images/logo/Plogo-38.png",
  },
  {
    id: 3,
    logo: "/images/logo/Plogo-39.png",
  },
  {
    id: 4,
    logo: "/images/logo/Plogo-40.png",
  },
  {
    id: 5,
    logo: "/images/logo/Plogo-41.png",
  },
  {
    id: 6,
    logo: "/images/logo/Plogo-39.png",
  },
];

const Partners = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} arrows={false}>
      {partners.map((partner) => (
        <div className="item" key={partner.id}>
          <div className="icon d-flex align-items-center justify-content-center">
            <img src={partner.logo} alt="" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Partners;
