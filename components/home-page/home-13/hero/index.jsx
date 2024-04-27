import Hero1 from "../../home-1/Hero";
import HeroContent from "./HeroContent";
import HeroGallery from "./HeroGallery";
import Partners from "./Partners";

const index = () => {
  return (
    <div className="hero-banner-nine position-relative zn2 pt-225 md-pt-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6" data-aos="fade-right">
            <HeroContent />
          </div>
        </div>
      </div>
      {/* /.container */}

      <div className="image-gallery" data-aos="fade-left">
        <div className="row align-items-center">
          <HeroGallery />
        </div>
      </div>
      {/* /.image-gallery */}

      <div className="partner-section-five position-relative mt-130 lg-mt-100">
        <div className="wrapper m-auto">
          <Partners />
        </div>
        {/* /.wrapper */}
      </div>
      {/* /.partner-section-five */}
    </div>
  );
};

export default index;
