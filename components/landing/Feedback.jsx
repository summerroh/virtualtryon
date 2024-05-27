const Feedback = () => {
  const images = [
    {
      src: "/images/media/hero-img-4.png",
      alt: "shape",
      className: "lazy-img shapes shape-one",
    },
    {
      src: "/images/media/hero-img-5.png",
      alt: "shape",
      className: "lazy-img shapes shape-two",
    },
    {
      src: "/images/media/hero-img-7.png",
      alt: "shape",
      className: "lazy-img shapes shape-three",
    },
    {
      src: "/images/media/hero-img-7.png",
      alt: "shape",
      className: "lazy-img shapes shape-four",
    },
    {
      src: "/images/shape/shape_120.svg",
      alt: "shape",
      className: "lazy-img shapes shape-five",
    },
    {
      src: "/images/shape/shape_121.svg",
      alt: "shape",
      className: "lazy-img shapes shape-six",
    },
  ];

  return (
    <div
      className="feedback-section-eight position-relative pt-20 pb-30 lg-pt-30 "
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-11 col-lg-10 col-md-9 m-auto">
            <div className="feedback_slider_eight">
              <div className="item">
                <div className="feedback-block-eight text-center">
                  <p className="font-recoleta text-dark">
                    Generate an unlimited number of model shots{" "}
                    <span>instantly.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
