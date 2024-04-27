import Link from "next/link";

const FeaturesBlock = () => {
  return (
    <>
      <div className="col-lg-5 col-md-10">
        <div className="block-style-six pe-xxl-5" data-aos="fade-right">
          <div className="title-style-ten">
            <div className="sc-title">WHY CHOOSE US</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Get quality
              <span className="position-relative">
                Lead <img src="/images/shape/shape_122.svg" alt="" />
              </span>
              in single click.
            </h2>
          </div>
          {/* /.title-style-ten */}

          <p className="fs-20 mt-15 mb-45">
            Lorem ipsum dolor sit amet, consectetur adipisci sed do eiusmod
            tempor incid.
          </p>
          <div className="info mb-50">
            <div className="row">
              <div className="col-sm-6">
                <div className="icon mt-30">
                  <img
                    src="/images/logo/Plogo-34.png"
                    alt="logo"
                    className="lazy-img"
                  />
                </div>
                <h4 className="tx-dark mt-20">
                  Secure &amp; trusted by trsupilot.
                </h4>
              </div>
              {/* End .col */}

              <div className="col-sm-6">
                <div className="icon d-flex mt-30">
                  <img
                    src="/images/logo/Plogo-35.png"
                    alt="logo"
                    className="lazy-img me-4"
                  />
                  <img
                    src="/images/logo/Plogo-36.png"
                    alt="logo"
                    className="lazy-img"
                  />
                </div>
                <h4 className="tx-dark mt-20">
                  Certified by AWP internal Inc.
                </h4>
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* /.info */}
          <Link
            href="/pages-menu/about-us-v1"
            className="btn-nineteen d-inline-flex align-items-center tran3s"
          >
            More Details? <span className="fw-500 ps-2">Click here</span>
            <img src="/images/icon/icon_97.svg" alt="" className="ms-2" />
          </Link>
        </div>
        {/* /.block-style-six */}
      </div>
      {/* End .col */}

      <div className="col-lg-7 col-md-9 m-auto">
        <div className="illustration-holder md-mt-60 position-relative">
          <img
            src="/images/media/img_49.png"
            alt="media"
            className="lazy-img main-img ms-auto"
          />
          <div className="card-style d-flex flex-column justify-content-center align-items-center">
            <h4 className="m0">70b+</h4>
            <p className="m0 fs-18 tx-dark">Created revenue</p>
          </div>
          {/* /.card-style */}
        </div>
        {/* /.illustration-holder */}
      </div>
    </>
  );
};

export default FeaturesBlock;
