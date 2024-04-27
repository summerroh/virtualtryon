import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-banner-seven p-30">
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7" data-aos="fade-right">
              <Link
                href="/pages-menu/pricing"
                className="slogan d-inline-block"
              >
                <strong className="fw-500">Offer</strong>
                is going on till friday, $1.99/mo.
                <i className="fas fa-chevron-right" />
              </Link>
              <h1 className="hero-heading fw-bold tx-dark mt-25">
                Trust your site to the world’s
                <span className="position-relative ms-3 d-inline-block">
                  no. 1 <img src="/images/shape/shape_95.svg" alt="shape" />
                </span>
                web host.
              </h1>
              <p className="text-lg mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
                Already have a website? Try our hosting to alive it With
                industry-leading load times.
              </p>
              <Link
                href="/pages-menu/pricing"
                className="btn-fourteen fw-500 tran3s"
              >
                Plans starting at only $3.95/mo
              </Link>
            </div>
          </div>
          {/* End .container */}

          <div className="illustration-holder" data-aos="fade-left">
            <img
              src="/images/assets/ils_05.svg"
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </div>
  );
};

export default Hero;
