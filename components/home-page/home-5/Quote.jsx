const Quote = () => {
  return (
    <div
      className="quote-wrapper text-center mt-120 lg-mt-80"
      data-aos="fade-up"
    >
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
            <img src="/images/icon/icon_138.svg" alt="" className="lazy-img" />
          </div>
          <p className="tx-dark mt-25 mb-30 fw-500">
            “Apartment floor will become Bluelofts live-work centers in Dallas
            tower”
          </p>
          <h6 className="fw-normal fst-italic tx-dark opacity-50 fs-20">
            Marvin S.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Quote;
