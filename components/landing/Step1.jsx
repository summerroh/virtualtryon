import Link from "next/link";

const Step1 = () => {
  return (
    <div className="fancy-feature-thirty position-relative mt-350 pb-140 lg-mt-100 lg-pb-120 md-p0 pt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 ms-auto">
            <div
              className="block-style-four ps-xxl-5 ms-xxl-4"
              data-aos="fade-left"
            >
              <div className="title-style-ten">
                <div className="sc-title badge">STEP 2</div>
                <h2 className="main-title font-recoleta fw-normal text-dark text-xxl">
                  Save Time{" "}
                  <span className="position-relative">
                    and Money
                    {/* <img src="/images/shape/shape_122.svg" alt="shape" /> */}
                  </span>
                </h2>
              </div>{" "}
              {/* /.title-style-ten */}
              <p className="fs-20 pt-30 pb-30 lg-pb-10 md-pt-10">
                No more scheduling photoshoots or hiring models. <br />
                Generate model shots instantly, anytime you need them.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="illustration-holder d-flex justify-content-center"
        data-aos="fade-right"
      >
        <img
          src="/images/landing/transform.png"
          alt="media"
          className="lazy-img h-[550px] w-auto"
          height={"550px"}
          // height={"631px"}
        />
      </div>
    </div>
  );
};

export default Step1;
