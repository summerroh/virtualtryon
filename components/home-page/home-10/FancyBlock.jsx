const FancyBlock = () => {
  const images = [
    {
      src: "/images/media/img_04.jpg",
      alt: "media",
      className: "lazy-img rounded-3",
    },
    {
      src: "/images/shape/shape_15.svg",
      alt: "media",
      className: "lazy-img shapes shape-one",
    },
    {
      src: "/images/shape/shape_16.svg",
      alt: "media",
      className: "lazy-img shapes shape-two",
    },
    {
      src: "/images/shape/shape_17.svg",
      alt: "media",
      className: "lazy-img shapes shape-three",
    },
    {
      src: "/images/shape/shape_18.svg",
      alt: "media",
      className: "lazy-img shapes shape-four",
    },
    {
      src: "/images/shape/shape_19.svg",
      alt: "media",
      className: "lazy-img shapes shape-five",
    },
  ];

  const data = {
    title: (
      <>
        We working with <span>knowledge,</span>
        <br /> skills all of heart &amp; soul.
      </>
    ),
    subtitle:
      "Auis nostrud exercitation ullamco labors nis slit alquip Duis aute irure dolor in reprehen erio isu voluptate velit sed.",
    author: "Rashed Kabir",
    authorTitle: "CEO Janu",
  };

  return (
    <div className="row">
      <div className="col-xl-5 col-lg-6 ms-auto order-lg-last">
        <div className="block-style-one md-mb-60" data-aos="fade-left">
          <div className="title-style-one">
            <h2 className="main-title fw-bold tx-dark m0">{data.title}</h2>
          </div>
          {/* /.title-style-one */}
          <p className="text-lg pt-60 pb-60 lg-pt-30 lg-pb-30">
            {data.subtitle}
          </p>
          <div className="name fs-20 tx-dark fw-500">
            - {data.author},{" "}
            <span className="opacity-25">{data.authorTitle}</span>
          </div>
        </div>

        {/* /.block-style-one */}
      </div>
      {/* End .col-xl-5 */}

      <div
        className="col-xl-6 col-lg-5 col-md-8 col-sm-10 order-lg-first"
        data-aos="fade-right"
      >
        <div className="img-meta-two d-inline-block position-relative pb-50">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.className}
            />
          ))}
          <div className="card-one" data-aos="fade-up" data-aos-delay="250">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle">
              <img src="/images/icon/icon_08.svg" alt="" className="lazy-img" />
            </div>
            <h5 className="fw-500 m0">Expert talkign with cusomter.</h5>
          </div>
          {/* /.card-one */}
        </div>
        {/* /.img-meta-two */}
      </div>
    </div>
  );
};

export default FancyBlock;
