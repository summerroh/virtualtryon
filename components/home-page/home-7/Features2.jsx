const Features2 = () => {
  const listItems = [
    "Amazing communication.",
    "Best trending designing experience.",
    "Email & Live chat.",
  ];

  const platformButtons = [
    {
      href: "#",
      imgSrc: "/images/icon/apple.svg",
      imgAlt: "media",
      platform: "App store",
    },
    {
      href: "#",
      imgSrc: "/images/icon/playstore.svg",
      imgAlt: "media",
      platform: "Google play",
    },
  ];

  return (
    <div className="block-style-three" data-aos="fade-right">
      <div className="title-style-four">
        <h2 className="main-title fw-500 tx-dark m0">
          Grow your business by using our <span>apps.</span>
        </h2>
      </div>
      {/* /.title-style-four */}
      <p className="text-lg pt-35 pb-30 lg-pb-10">
        Things go wrong have questions. We’ve understand. So we have people
      </p>
      <ul className="style-none list-item fs-18">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="d-sm-flex align-items-center platform-button-group mt-60 lg-mt-30">
        {platformButtons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            className={`d-flex align-items-center ${
              button.platform === "App store" ? "ios-button" : "windows-button"
            }`}
          >
            <img
              src={button.imgSrc}
              alt={button.imgAlt}
              className="lazy-img icon"
            />
            <div>
              <span>Download on the</span>
              <strong>{button.platform}</strong>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Features2;
