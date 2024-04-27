import Form from "./Form";

const BannerSubscribe = () => {
  return (
    <div className="fancy-short-banner-nine mt-200 lg-mt-80" data-aos="fade-up">
      <div className="bg-wrapper position-relative pt-90 pb-110 lg-pt-50 lg-pb-60">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="title">
                <h6 className="fw-normal text-uppercase tx-dark">
                  DOmain Names
                </h6>
                <h2 className="m0 fw-bold tx-dark pe-xl-5">
                  Every great website needs a great name.
                </h2>
              </div>
              {/* /.title */}
            </div>
            <div className="col-lg-5">
              <p className="m0 tx-dark fs-20 lh-lg ps-xxl-5 md-mt-20">
                Your domain name is your website address. While .com names are
                the most popular, explore .org, .tech, .co and more.
              </p>
            </div>
          </div>
          <div className="domain-search-form mt-50 lg-mt-30">
            <Form />
          </div>
          {/* /.domain-search-form */}
        </div>
      </div>
      {/* /.bg-wrapper */}
    </div>
  );
};

export default BannerSubscribe;
