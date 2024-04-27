const FancyBlock2 = () => {
  const cardsData = [
    {
      icon: "/images/icon/icon_09.svg",
      title: "Quality Design",
      subtitle: "We do focus on quality not quantity.",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_10.svg",
      title: "Expert Support",
      subtitle: "Expert ready to help you anytime.",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "Mobile Friendly",
      subtitle: "All design compitable with mobile.",
      delay: "300",
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          <div className="card-style-two mt-40">
            <div className="icon d-flex align-items-end">
              <img src={card.icon} alt="" className="lazy-img" />
            </div>
            <span className="d-inline-block text-uppercase fs-14 opacity-75 mt-30 mb-10">
              {card.title}
            </span>
            <h4 className="fw-500 m0">{card.subtitle}</h4>
          </div>
          {/* /.card-style-two */}
        </div>
      ))}
    </>
  );
};

export default FancyBlock2;
