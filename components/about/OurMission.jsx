import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <>
      <div className="row align-items-end">
        <div className="col-lg-5 col-md-6 order-md-last ms-auto">
          <div className="feedback-block-thirteen mb-50" data-aos="fade-left">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <Image
                width={24}
                height={22}
                src="/images/icon/icon_42.svg"
                alt="icon"
              />
            </div>
            <p className="tx-dark mt-35 lg-mt-30 mb-45 lg-mb-30">
              Jano combines excellent live video class, Note &amp; Extra class
              that helps you learn quickly.
            </p>
            <h6 className="tx-dark fs-20">
              - Mike Lucas.{" "}
              <span className="fs-18 fw-normal opacity-50">
                CEO &amp; Founder Jano
              </span>
            </h6>
          </div>
          {/* /.feedback-block-thirteen */}
        </div>
        {/* End .col */}

        <div className="col-md-6 order-md-first" data-aos="fade-right">
          <div className="row align-items-end">
            <div className="col-sm-6">
              <div className="img-meta mb-50 lg-mb-40">
                <Image
                  width={312}
                  height={332}
                  style={{ objectFit: "cover" }}
                  src="/images/media/img_97.jpg"
                  alt="media"
                  className="lazy-img w-100"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="img-meta position-relative mb-50 lg-mb-40">
                <Image
                  width={312}
                  height={403}
                  style={{ objectFit: "cover" }}
                  src="/images/media/img_98.jpg"
                  alt="media"
                  className="lazy-img w-100"
                />
                <div
                  className="rating d-flex flex-column align-items-center justify-content-center"
                  data-aos="fade-up"
                >
                  <div className="font-recoleta tx-dark rating-value">4.8</div>
                  <div className="fs-18 tx-dark">Rating</div>
                </div>
                {/* /.rating */}
              </div>{" "}
              {/* /.img-meta */}
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <div className="row justify-content-end" data-aos="fade-up">
        <div className="col-sm-4">
          <div className="img-meta mb-50 lg-mb-40">
            <Image
              width={424}
              height={295}
              style={{ objectFit: "cover" }}
              src="/images/media/img_99.jpg"
              alt="media"
              className="lazy-img w-100"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="img-meta position-relative">
            <Image
              width={648}
              height={436}
              style={{ objectFit: "cover" }}
              src="/images/media/img_100.jpg"
              alt="media"
              className="lazy-img w-100"
            />
            <div
              className="customer-data d-flex flex-column align-items-center justify-content-center"
              data-aos="fade-up"
            >
              <div className="fw-500 tx-dark amount">32k</div>
              <div className="fs-18 tx-dark">Customer</div>
            </div>{" "}
            {/* /.customer-data */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
