const CallToAction = () => {
  const platformButtons = [
    {
      href: "#",
      className: "ios-button",
      icon: "/images/icon/icon_89.svg",
      text1: "Download on the",
      text2: "App store",
      aos: "fade-right",
    },
    {
      href: "#",
      className: "windows-button",
      icon: "/images/icon/playstore.svg",
      text1: "Get it on",
      text2: "Google play",
      aos: "fade-left",
    },
  ];
  return (
    <div className="col-xl-7 col-lg-8 col-md-10 m-auto">
      <div className="title-style-nine text-center mb-40" data-aos="fade-up">
        <h2 className="main-title text-white">
          Get Ready to Started. It’s <span>Fast &amp; Easy.</span> App
        </h2>
      </div>
      {/* /.title-style-nine */}
      <p
        className="text-white opacity-75 text-center text-lg mt-40 mb-40 lg-mt-20"
        data-aos="fade-up"
      >
        Download our mobile app and start trading &amp; earn money
      </p>
      <div className="d-sm-flex align-items-center justify-content-center platform-button-group-two">
        {platformButtons.map((button, index) => (
          <a
            href={button.href}
            className={`d-flex align-items-center ${button.className}`}
            data-aos={button.aos}
            key={index}
          >
            <img src={button.icon} alt="icon" className="lazy-img icon" />
            <div>
              <span>{button.text1}</span>
              <strong>{button.text2}</strong>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CallToAction;
