"use client";

import Image from "next/image";
import Slider from "react-slick";

const Partner = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  const partnerLogos = [
    "/images/logo/Plogo-37.png",
    "/images/logo/Plogo-38.png",
    "/images/logo/Plogo-39.png",
    "/images/logo/Plogo-40.png",
    "/images/logo/Plogo-41.png",
    "/images/logo/Plogo-38.png",
  ];

  return (
    <Slider {...settings} arrows={false}>
      {partnerLogos.map((logo, index) => (
        <div className="item" key={index}>
          <div className="icon d-flex align-items-center justify-content-center">
            <Image
              width={109}
              height={46}
              style={{ objectFit: "contain" }}
              src={logo}
              alt="logo"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Partner;
