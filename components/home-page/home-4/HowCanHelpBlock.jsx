const HowCanHelpBlock = () => {
  return (
    <div className="fancy-feature-seventeen position-relative">
      <img
        src="/images/shape/shape_80.svg"
        alt="shape"
        className="lazy-img shapes shape-four"
      />
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-5 col-lg-6 ms-auto order-lg-last"
            data-aos="fade-left"
          >
            <div className="title-style-six">
              <div className="sc-title" style={{ color: "#4BCEB0" }}>
                How can you help?
              </div>
              <h2 className="main-title fw-500 tx-dark">
                That’s how it works is very simple.
              </h2>
            </div>
            {/* /.title-style-six */}
            <p className="fs-20 lh-lg pe-xxl-5 mt-60 lg-mt-30">
              Growing up in poverty, children face tough challenges: hunger and
              malnutrition, limited access to education and medical services,
              social discrimination and isolation. we can end poverty for the
              good.
            </p>
          </div>
          {/* End .col */}

          <div className="col-lg-6 order-lg-first" data-aos="fade-right">
            <div className="img-meta d-inline-block position-relative">
              <img
                src="/images/media/img_34.png"
                alt="media"
                className="lazy-img"
              />
              <img
                src="/images/shape/shape_77.svg"
                alt="media"
                className="lazy-img shapes shape-one"
              />
              <img
                src="/images/shape/shape_78.svg"
                alt="media"
                className="lazy-img shapes shape-two"
              />
              <div className="shape-three position-absolute">
                <img
                  src="/images/shape/shape_79.svg"
                  alt="media"
                  className="lazy-img"
                />
                <div className="text text-center">
                  <div className="fw-bold text-white sp-text1">1.2b+</div>
                  <div className="text-white fs-16">
                    Child Need <br />
                    Food
                  </div>
                </div>
              </div>
              {/* /.shape-three */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* End .col */}
        </div>
      </div>
      {/* /.container */}
    </div>
  );
};

export default HowCanHelpBlock;
