import Link from "next/link";
import React from "react";

const HowToStartBlock = () => {
  return (
    <div className="fancy-feature-fortyThree bg-black position-relative pt-130 pb-65 lg-pt-80">
      <div className="container">
        <div className="row ">
          <div
            className="col-xl-5 col-md-6 ms-auto order-md-last"
            data-aos="fade-right"
          >
            <div className="title-style-one mb-30">
              <h2 className="main-title fw-500 text-white m0">
                Don’t know how to start.
              </h2>
            </div>
            <p className="fs-20 text-white opacity-75 mb-50 md-mb-30">
              This short quiz will sort you out. Answer a few simple questions
              to get personal career advice and course recommendations.
            </p>
            <Link
              href="/pages-menu/about-us-v2"
              className="btn-twentyFive fw-500 tran3s"
            >
              Let’s get started <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>
          {/* End .col */}

          <div className="col-md-6 order-md-first" data-aos="fade-left">
            <img
              src="/images/media/img_67.png"
              alt="media"
              className="lazy-img sm-mt-40"
            />
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default HowToStartBlock;
