import Counter from "./Counter";
import ImgGallery from "./ImgGallery";
import Intro from "./Intro";

const index = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6 ms-auto order-lg-last" data-aos="fade-left">
        <div className="ps-xl-4">
          <Intro />
          <div className="row justify-content-between">
            <Counter />
          </div>
        </div>
      </div>
      {/* End .col-lg-6 */}

      <div className="col-lg-5 order-lg-first position-relative">
        <ImgGallery />
        {/* /.img-gallery */}
      </div>
      {/* End .col-lg-6 */}
    </div>
  );
};

export default index;
