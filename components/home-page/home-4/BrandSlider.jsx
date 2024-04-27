"use client";

import Slider from "react-slick";

const BrandSlider = () => {
  const brands = [
    { id: 1, src: "/images/logo/Plogo-18.png" },
    { id: 2, src: "/images/logo/Plogo-19.png" },
    { id: 3, src: "/images/logo/Plogo-20.png" },
    { id: 4, src: "/images/logo/Plogo-21.png" },
    { id: 5, src: "/images/logo/Plogo-20.png" },
    { id: 6, src: "/images/logo/Plogo-20.png" },
    { id: 7, src: "/images/logo/Plogo-21.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {brands.map((brand) => (
        <div className="item" key={brand.id}>
          <img src={brand.src} alt="brand" className="m-auto" />
        </div>
      ))}
    </Slider>
  );
};

export default BrandSlider;
