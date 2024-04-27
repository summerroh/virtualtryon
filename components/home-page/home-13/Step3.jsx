import Link from "next/link";

const Step3 = () => {
  const items = [
    "Amazing communication.",
    "Best trending designing experience.",
    "Email & Live chat.",
  ];

  return (
    <div className="fancy-feature-thirty position-relative mt-190 pb-140 lg-mt-100 lg-pb-120 md-p0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 ms-auto">
            <div
              className="block-style-four ps-xxl-5 ms-xxl-4"
              data-aos="fade-left"
            >
              <div className="title-style-ten">
                <div className="sc-title">FEATURES</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark text-white">
                  Enjoy Your{" "}
                  <span className="position-relative">
                    Results{" "}
                    <img src="/images/shape/shape_122.svg" alt="shape" />
                  </span>
                </h2>
              </div>{" "}
              {/* /.title-style-ten */}
              <p className="fs-20 pt-30 pb-30 lg-pb-10 md-pt-10">
                Turn your business into a sales machine today with lorem Things
                go wrong have questions.
              </p>
              <ul className="style-none list-item">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="btn-eighteen position-relative d-inline-block tx-dark mt-35 lg-mt-20">
                Want to learn more?{" "}
                <Link href="/pages-menu/about-us-v1" className="fw-500 tran3s">
                  Click here <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>{" "}
            {/* /.block-style-four */}
          </div>
        </div>
      </div>{" "}
      {/* /.container */}
      <div className="illustration-holder" data-aos="fade-right">
        <img
          src="/images/media/img_48.png"
          alt="media"
          className="lazy-img main-img"
        />
        <img
          src="/images/shape/shape_123.svg"
          alt="media"
          className="lazy-img shapes shape-one"
        />
      </div>
    </div>
  );
};

export default Step3;
