const FancySection = () => {
  return (
    <div className="fancy-feature-fortyNine pt-110 pb-90 xl-pt-70 lg-pb-60 zn2 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 ms-auto" data-aos="fade-left">
            <h2 className="title text-white fw-bold">
              Expert. Afford<span>able.</span> Quality.
            </h2>
            <div className="row">
              <div className="col-xl-8 col-lg-10 ms-auto">
                <p className="text-lg text-white mt-55 lg-mt-20">
                  Ou spaces are designed around socialization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}

      <div className="clip-text" data-aos="fade-right">
        W
      </div>
      <img
        src="/images/shape/shape_166.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
      <a href="#" className="more-btn tran3s" data-aos="fade-left">
        <img
          src="/images/shape/shape_167.svg"
          alt="shape"
          className="lazy-img"
        />
        <img
          src="/images/icon/icon_139.svg"
          alt="shape"
          className="lazy-img arrow"
        />
      </a>
      <div className="clip-text-two fw-bold wow fadeInUp">Jano</div>
    </div>
  );
};

export default FancySection;
