const featureData = [
  {
    id: 1,
    icon: "/images/icon/icon_24.svg",
    title: "Core WP",
    text: "The core of our service is based on the objective investment advice we seek to provide supported.",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 2,
    icon: "/images/icon/icon_25.svg",
    title: "Easy Customizable",
    text: "Through our Family Office Services, we are able to provide the expertise derived from our beginnings.",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 3,
    icon: "/images/icon/icon_26.svg",
    title: "Fast Support",
    text: "Capco’s response is proven by our superb record of driving change through effective portfolio.",
    backgroundColor: "#F7EDFF",
  },
];

const FeatureCard = ({ icon, title, text, backgroundColor }) => {
  return (
    <div className="card-style-four text-center position-relative mt-40 xs-mt-20">
      <div
        className="icon rounded-circle m-auto d-flex align-items-center justify-content-center"
        style={{ backgroundColor }}
      >
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-500 mt-35 mb-25">
        <a href="#" className="tran3s tx-dark">
          {title}
        </a>
      </h4>
      <p className="mb-30">{text}</p>
      <a href="#">
        <img src="/images/icon/icon_05.svg" alt="icon" className="lazy-img" />
      </a>
    </div>
  );
};

const Features = () => {
  return (
    <>
      {featureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            backgroundColor={feature.backgroundColor}
          />
        </div>
      ))}
    </>
  );
};

export default Features;
