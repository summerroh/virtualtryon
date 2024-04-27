import FilterBox from "./FilterBox";

const Hero = () => {
  return (
    <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 m-auto">
            <div className="text-wrapper" data-aos="fade-up">
              <h1 className="hero-heading fw-500 tx-dark text-center">
                Discover your <br /> home, you&lsquo;ll love to
                <span className="position-relative">
                  live.
                  <img
                    src="/images/shape/shape_161.svg"
                    alt="shape"
                    className="lazy-img shapes text-shape"
                  />
                </span>
              </h1>
              <p className="text-lg tx-dark mb-80 pt-35 text-center lg-pt-20 lg-mb-50">
                Let’s find a home that’s perfect for your future
              </p>
            </div>
          </div>
        </div>
        {/* /.row */}

        <div className="search-form-bg position-relative" data-aos="fade-up">
          <FilterBox />
          {/* /.search-area */}

          <img
            src="/images/shape/shape_160.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
        </div>
        {/* /.search-form-bg */}
      </div>
      {/* /.container */}

      <img
        src="/images/shape/shape_159.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default Hero;
