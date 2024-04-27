const FancyFeatures = () => {
  const items = [
    "Amazing communication.",
    "Best trending designing experience.",
    "Email & Live chat.",
  ];

  return (
    <div className="row">
      <div className="col-xl-5 col-lg-6 ms-auto order-lg-last">
        <div className="block-style-one ps-xxl-5" data-aos="fade-left">
          <div className="title-style-one">
            <div className="sc-title">
              Over
              <span
                className="text-decoration-underline"
                style={{ color: "#ff733b" }}
              >
                150,000+ client
              </span>
            </div>
            <h2 className="main-title fw-normal tx-dark m0">
              Providing <span>Services</span> with top quality.
            </h2>
          </div>
          {/* /.title-style-one */}
          <p className="text-lg tx-dark pt-60 pb-45 lg-pt-30 lg-pb-10">
            Things go wrong have questions. We’ve understand. So we have people
          </p>
          <ul className="style-none list-item fs-18">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        {/* /.block-style-one */}
      </div>
      {/* End .col-xl-5 */}

      <div className="col-lg-6 col-md-10 order-lg-first" data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative md-mt-40">
          <img
            src="/images/media/img_40.png"
            alt="media"
            className="lazy-img"
          />
        </div>
        {/* /.img-meta */}
      </div>
    </div>
  );
};

export default FancyFeatures;
