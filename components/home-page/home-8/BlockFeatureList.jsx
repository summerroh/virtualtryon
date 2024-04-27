const BlockFeatureList = () => {
  const featureList = [
    {
      title: "Global Exchange Rates",
    },
    {
      title: "Make payments with Bank Transfer",
    },
    {
      title: "Instant Transaction",
    },
  ];

  return (
    <div className="block-style-three ps-xxl-5" data-aos="fade-left">
      <div className="title-style-nine">
        <div className="sc-title">How it Works</div>
        <h2 className="main-title text-white">
          Buy <span>Crypto</span> fast &amp; Instantly.
        </h2>
      </div>
      <p className="text-lg text-white opacity-75 pt-20 pb-30 lg-pb-20">
        Link your bank account and have your bitcoin in minutes. It’s super easy
        &amp; fast.
      </p>
      <ul className="style-none list-item fs-18 text-white opacity-75">
        {featureList.map((feature, index) => (
          <li key={index}>{feature.title}</li>
        ))}
      </ul>
      <a href="#" className="btn-sixteen fw-500 border7 tran3s mt-45">
        Start Trading
      </a>
    </div>
  );
};

export default BlockFeatureList;
