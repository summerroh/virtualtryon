const PortfolioTopTitle = () => {
  return (
    <div className="fancy-feature-fiftyOne position-relative mt-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-7" data-aos="fade-right">
            <div className="title-style-five mb-65 lg-mb-40">
              <div className="sc-title-two fst-italic position-relative">
                Our Recent Work
              </div>
              <h2 className="main-title fw-500 tx-dark">
                Check out our Portfolio.
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}
      <img
        src="/images/shape/shape_172.svg"
        alt="shap"
        className="lazy-img shapes shape-two"
      />
      <img
        src="/images/shape/shape_175.svg"
        alt="shap"
        className="lazy-img shapes shape-three"
      />
    </div>
  );
};

export default PortfolioTopTitle;
