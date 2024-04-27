import Link from "next/link";

const FancyBanner = () => {
  const bannerData = [
    {
      title: "TRSUTED SECURITY",
      mainTitle: "Security you can trust blindly.",
      description:
        "Lorem ipsum began as scrambled, Latin derived Cicero's 1st-century BC text De Finibus ubiquitous lorem ipsum passage.",
      buttonLabel: "Click here to learn more",
      illustration: "/images/assets/ils_06.png",
      illustrationAlt: "illustration",
      illustrationPosition: "right",
      aos: "fade-right",
    },
    {
      title: "SITE TRANSFER",
      mainTitle: "Migration is super fast with no downtime.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci sed do eiusmod tempor incididunt ut labore et dolore magna ad minim veniam.",
      buttonLabel: "",
      illustration: "/images/assets/ils_07.png",
      illustrationAlt: "illustration",
      illustrationPosition: "left",
      aos: "fade-left",
    },
  ];

  return (
    <div className="fancy-feature-twentyFour mt-225 lg-mt-130">
      <div className="container">
        {bannerData.map((data, index) => (
          <div className="block-style-four mt-200 lg-mt-100" key={index}>
            <div className="row align-items-center">
              <div
                className={`col-xl-5 col-lg-6 order-lg-${
                  data.illustrationPosition === "left" ? "first" : "last"
                }`}
                data-aos={data.aos}
              >
                <div className="title-style-eight">
                  <div className="sc-title text-uppercase">{data.title}</div>
                  <h2 className="main-title tx-dark fw-bold">
                    {data.mainTitle}
                  </h2>
                </div>
                <p className="fs-20 lh-lg mt-35 lg-mt-20">{data.description}</p>
                {data.buttonLabel !== "" && (
                  <Link
                    href="/pages-menu/about-us-v1"
                    className="btn-fifteen fw-500 position-relative d-inline-flex align-items-center"
                  >
                    <span>{data.buttonLabel}</span>
                    <img
                      src="/images/icon/icon_69.svg"
                      alt={data.illustrationAlt}
                      className="ms-2"
                    />
                  </Link>
                )}
              </div>
              <div
                className={`col-xl-7 col-lg-6 col-md-8 m-auto order-lg-${
                  data.illustrationPosition === "left" ? "last" : "first"
                }`}
                data-aos={data.aos}
              >
                <div className="illustration-holder md-mt-60">
                  <img
                    src={data.illustration}
                    alt={data.illustrationAlt}
                    className="lazy-img"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBanner;
