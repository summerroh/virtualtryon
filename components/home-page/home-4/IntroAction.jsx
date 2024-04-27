const IntroAction = () => {
  return (
    <div className="row">
      <div className="col-lg-5 col-md-10" data-aos="fade-right">
        <div className="title-style-six pe-xxl-5">
          <h2 className="main-title fw-500 tx-dark">
            Help us to end poverty for good start with a child.
          </h2>
        </div>
        {/* /.title-style-six */}
      </div>
      {/* End .col */}

      <div className="col-lg-6 ms-auto" data-aos="fade-left">
        <p className="m0 sp-text1 fs-20 pb-85 lg-pb-30 md-pt-20">
          Growing up in poverty, children face tough challenges: hunger and
          malnutrition, limited access to education and medical services, social
          discrimination and isolation. we can end poverty for good.
        </p>
        <div className="d-sm-flex align-items-center">
          <a href="#" className="btn-nine fw-500 mt-10 me-3 lg-me-5">
            Sponsor a child
          </a>
          <a href="#" className="tran3s fw-500 tx-dark fs-16 mt-10">
            See how it works
          </a>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default IntroAction;
