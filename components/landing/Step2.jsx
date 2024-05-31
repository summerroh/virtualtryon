const Step2 = () => {
  return (
    <div className="fancy-feature-three pt-300 lg-pt-100 md-pt-100 sm-pt-120 mb-300">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="block-style-two pe-xxl-5 " data-aos="fade-right">
              <div className="title-style-ten">
                <div className="sc-title badge">STEP 1</div>
                <h2 className="main-title font-recoleta fw-normal text-dark">
                  Unlimited{" "}
                  <span className="position-relative">
                    Possibilities
                    <img src="/images/shape/shape_122.svg" alt="shape" />
                  </span>
                </h2>
              </div>{" "}
              {/* /.title-style-ten */}
              <p className="fs-20 pt-30 pb-30 lg-pb-10 md-pt-10">
                Browse through our diverse selection of AI models to perfectly
                match your brand's aesthetic.
              </p>
              {/* 모델 썸네일 리스트 */}
              <div
                className="d-flex flex-row justify-space-between gap-3 mb-3"
                data-aos="fade-up"
              >
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline model-thumb"
                />
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline model-thumb"
                />
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline model-thumb"
                />
              </div>
              <div
                className="d-flex flex-row justify-space-between gap-3"
                data-aos="fade-up"
              >
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline model-thumb"
                />
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline model-thumb"
                />
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline model-thumb"
                />
              </div>
              {/*
              
              <Link
                href="/pages-menu/about-us-v1"
                className="btn-four fw-500"
              >
                Learn More
              </Link>
*/}
            </div>
            {/* /.block-style-two */}
          </div>
          {/* End .col-lg-5 */}

          <div
            className="col-xl-6 col-lg-7 col-md-6 ms-auto d-flex justify-content-end"
            data-aos="fade-left"
          >
            <div
              className={`round-bg d-flex align-items-center justify-content-center`}
              style={{ width: "499px", height: "631px" }}
            >
              <img
                src={"/images/media/model_preview.png"}
                alt={`model`}
                className="lazy-img"
              />
            </div>
          </div>
          {/* End .col-xl-6 */}
        </div>
      </div>
      {/* /.container */}
    </div>
  );
};

export default Step2;
