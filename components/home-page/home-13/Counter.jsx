"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ data }) => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Update the `isInView` state when the element is in the viewport
  if (inView && !isInView) {
    setIsInView(true);
  }

  return (
    <div
      className="counter-block-five text-center mt-40"
      data-aos="fade-up"
      ref={ref}
    >
      <div className="main-count font-recoleta fw-light">
        {isInView && (
          <CountUp start={0} end={data.value} duration={2} separator="," />
        )}
        {!isInView && data.value}
        {data.symbol}
      </div>
      <p className="fs-18 mb-15">{data.title}</p>
      <span
        className="d-block rounded-circle cicrle m-auto"
        style={{ background: data.color }}
      />
    </div>
  );
};

const CounterSection = () => {
  const counterData = [
    {
      title: "Cumulative trading volume",
      value: 1,
      symbol: "b+",
      color: "#FFC735",
    },
    {
      title: "Million Insurance Coverage",
      value: 10,
      symbol: "",
      color: "#F177FF",
    },
    {
      title: "Country & Regions",
      value: 120,
      symbol: "+",
      color: "#00FCFC",
    },
    {
      title: "Successful Projects",
      value: 3000,
      symbol: "k",
      color: "#9671FF",
    },
  ];

  return (
    <div className="row">
      {counterData.map((item, index) => (
        <div className="col-lg-3 col-sm-6" key={index}>
          <Counter data={item} />
        </div>
      ))}
    </div>
  );
};

export default CounterSection;
