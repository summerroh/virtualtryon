const featuresData = [
  {
    icon: "/images/icon/icon_124.svg",
    title: "Learn skills over 120k+",
    subtitle: "Video courses.",
  },
  {
    icon: "/images/icon/icon_125.svg",
    title: "Choose courses taught",
    subtitle: "Real-world experts.",
  },
  {
    icon: "/images/icon/icon_126.svg",
    title: "Learn lifetime access on",
    subtitle: "Mobile and desktop.",
  },
];

const FeatureBlock = () => {
  return (
    <>
      {featuresData.map((feature, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="card-style-seventeen d-flex align-items-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src={feature.icon} alt="icon" className="lazy-img" />
            </div>
            <div className="ps-4 text-wrapper">
              <h4 className="text-white m0">{feature.title}</h4>
              <p className="m0">{feature.subtitle}</p>
            </div>
          </div>
          {/* /.card-style-seventeen */}
        </div>
      ))}
    </>
  );
};

export default FeatureBlock;
