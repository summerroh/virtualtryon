import HeroContent from "./HeroContent";
import HeroGallery from "./HeroGallery";
import Partners from "./Partners";

const index = () => {
  return (
    <div className="hero-banner-nine position-relative zn2 pt-225 md-pt-100">
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

      {/* /.partner-section-five */}
    </div>
  );
};

export default index;
