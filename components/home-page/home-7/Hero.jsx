import HeroBtnGroup from "./HeroBtnGroup";

const Hero = () => {
  return (
    <>
      <a href="#" className="slogan d-inline-block">
        <strong className="fw-500">Offer</strong> is going on till friday,
        $1.99/mo. <i className="fas fa-chevron-right" />
      </a>
      <h1 className="hero-heading fw-bold mt-45 mb-40 md-mt-20">
        Word’s No. 1 app for Online training.
      </h1>
      <p className="text-lg mb-50 lg-mb-30 pe-xxl-4">
        Janu delivered blazing fast performance, striking word soludtion
      </p>
      <HeroBtnGroup />
      <h2 className="fw-500 mt-40 mb-5">A+ Rating </h2>
      <p className="fs-18 opacity-75">
        Avg rating 4.8 makes us world most best apps.
      </p>
    </>
  );
};

export default Hero;
