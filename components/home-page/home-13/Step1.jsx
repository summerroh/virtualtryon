import Link from "next/link";
import ScreenHolder from "@/components/home-page/home-6/ScreenHolder";
import Step1Photo from "./components/Step1Photo";

const Step1 = () => {
  const items = [
    "Amazing communication.",
    "Best trending designing experience.",
    "Email & Live chat.",
  ];

  return (
    <div className="fancy-feature-three pt-300 lg-pt-100 md-pt-100 sm-pt-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div
              className="block-style-two pe-xxl-5 md-mb-50"
              data-aos="fade-right"
            >
              <div className="title-style-ten">
                <div className="sc-title badge">STEP 1</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Choose Your{" "}
                  <span className="position-relative">
                    Model <img src="/images/shape/shape_122.svg" alt="shape" />
                  </span>
                </h2>
              </div>{" "}
              {/* /.title-style-ten */}
              <p className="fs-20 pt-30 pb-30 lg-pb-10 md-pt-10">
                Browse through our AI model library to find the ideal fit for
                your products or use your own model photo.
              </p>
              {/* 모델 썸네일 리스트 */}
              <div
                className="d-flex flex-row justify-space-between gap-3 mb-3"
                data-aos="fade-up"
              >
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline"
                />
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline"
                />
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline"
                />
              </div>
              <div
                className="d-flex flex-row justify-space-between gap-3"
                data-aos="fade-up"
              >
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline"
                />
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline"
                />
                <img
                  src="/images/media/hero-img-5.png"
                  alt="img"
                  className="lazy-img d-inline"
                />
              </div>
              {/*
              
              <Link
                href="/pages-menu/about-us-v1"
                className="btn-four fw-500"
              >
                Learn More
              </Link>
*/}
            </div>
            {/* /.block-style-two */}
          </div>
          {/* End .col-lg-5 */}

          <div
            className="col-xl-6 col-lg-7 col-md-6 ms-auto d-flex justify-content-end"
            data-aos="fade-left"
          >
            <div
              className={`round-bg d-flex align-items-center justify-content-center`}
              style={{ width: "499px", height: "631px" }}
            >
              <img
                src={"/images/media/model_preview.png"}
                alt={`model`}
                className="lazy-img"
              />
            </div>
            {/*
            
            <Step1Photo /> 
          */}
          </div>
          {/* End .col-xl-6 */}
        </div>
      </div>
      {/* /.container */}
    </div>
  );
};

export default Step1;
