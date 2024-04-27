import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <h1 className="hero-heading fw-normal font-recoleta pe-xxl-5 ps-xxl-5">
        Create your
        <b className="position-relative d-inline-block fw-normal">
          Identity
          <img
            src="/images/shape/shape_180.svg"
            alt="shape"
            className="lazy-img shapes line-shape-two"
          />
        </b>
        with Jano.
      </h1>
      <p className="text-lg mb-40 pt-20 lg-mb-30">
        Jano delivered fast performance &amp; striking soludtion
      </p>
      <Link
        href="/pages-menu/about-us-v1"
        className="btn-four fw-500 pe-5 ps-5"
      >
        Try it now
      </Link>
    </>
  );
};

export default Hero;
