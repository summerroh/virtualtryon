import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div className="fancy-short-banner-twelve position-relative zn2 pt-160 lg-pt-80">
      <div className="container">
        <div className="border-bottom pb-140 lg-pb-80">
          <div className="row">
            <div className="col-xxl-9 col-xl-10 m-auto text-center">
              <div
                className="title-style-ten"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="main-title fw-500 tx-dark">
                  Have Any Project? <br />
                  <span className="position-relative">
                    Let’s Talk{" "}
                    <img src="/images/shape/shape_132.svg" alt="shape" />
                  </span>
                  &amp; Grow your Business
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We’r ready to help you. Our expert is here, just send a message.
              </p>
              <Link
                href="/contact"
                className="btn-twenty fw-500 tran3s"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shapes shape-one" />
    </div>
  );
};

export default CallToAction;
