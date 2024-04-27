"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const data = [
  {
    count: 20,
    label: "Country Impacted",
    unit: "billion",
    colClass: "col-sm-6",
    delay: "100",
  },
  {
    count: 30,
    label: "Volunteer",
    unit: "k+",
    colClass: "col-lg-4 col-sm-6",
    delay: "200",
  },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <>
      {data.map((item, index) => (
        <div
          className={item.colClass}
          key={index}
          data-aos="fade-up"
          data-aos-delay={item.delay}
        >
          <div className="counter-block-three mt-40 md-mt-30" ref={ref}>
            <div className="main-count fw-500 tx-dark">
              <CountUp
                end={inView ? item.count : 0}
                duration={2.5}
                separator=","
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef} className="counter">
                    0
                  </span>
                )}
              </CountUp>
              {item.unit}
            </div>
            <p className="tx-dark fs-18 m0">{item.label}</p>
          </div>
          {/* /.counter-block-three */}
        </div>
      ))}
    </>
  );
};

export default Counter;
