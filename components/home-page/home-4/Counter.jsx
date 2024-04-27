"use client";

import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const countersData = [
    {
      id: 1,
      value: 20,
      unit: "billion",
      label: "People Helped",
      image: "/images/shape/shape_72.svg",
      delay: "100",
    },
    {
      id: 2,
      value: 123,
      unit: "",
      label: "Country Impected",
      image: "/images/shape/shape_73.svg",
      delay: "200",
    },
    {
      id: 3,
      value: 30,
      unit: "k+",
      label: "Volunteer",
      image: "/images/shape/shape_74.svg",
      delay: "300",
    },
    {
      id: 4,
      value: 218,
      unit: "",
      label: "Sucessfull Project",
      image: "/images/shape/shape_75.svg",
      delay: "400",
    },
  ];

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const renderedCounters = countersData.map((counter) => (
    <div
      key={counter.id}
      className="col-lg-3 col-sm-6"
      data-aos="fade-up"
      data-aos-delay={counter.delay}
    >
      <div className="counter-block-two position-relative text-center mt-110">
        <div className="main-count fw-500 tx-dark">
          <CountUp
            end={inView ? counter.value : 0}
            duration={2}
            separator=","
          />
          {counter.unit}
        </div>
        <p className="tx-dark fs-18 m0">{counter.label}</p>
        <img
          src={counter.image}
          alt="shape"
          className="lazy-img position-absolute bg-img"
        />
      </div>
      {/* /.counter-block-two */}
    </div>
  ));

  return (
    <div className="row" ref={ref}>
      {renderedCounters}
    </div>
  );
};

export default Counter;
