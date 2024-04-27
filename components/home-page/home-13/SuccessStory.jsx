import Feature from "./Step2";
import FeatureReverse from "./Step1";
import Link from "next/link";
import ScreenHolder from "@/components/home-page/home-6/ScreenHolder";
import Step2 from "./Step2";
import Step3 from "./Step3";

const SuccessStory = () => {
  return (
    <>
      <div className="wrapper position-relative zn2 pt-70 pb-100 mt-90 md-mt-40">
        <div className="container">
          {/* STEP 1 */}
          <div className="feedback-block-nine text-lg-end position-relative">
            <div className="row">
              <div
                className="col-xl-6 col-lg-7 order-lg-last"
                data-aos="fade-left"
              >
                {/* 모델 썸네일 리스트 */}
                <div
                  className="d-flex flex-row justify-space-between gap-3 mb-3"
                  data-aos="fade-up"
                >
                  <img
                    src="/images/media/model1-thumb.png"
                    alt="img"
                    className="lazy-img d-inline"
                    style={{ width: "160px" }}
                  />
                  <img
                    src="/images/media/model2-thumb.png"
                    alt="img"
                    className="lazy-img d-inline"
                    style={{ width: "160px" }}
                  />
                  <img
                    src="/images/media/model3-thumb.png"
                    alt="img"
                    className="lazy-img d-inline"
                    style={{ width: "160px" }}
                  />
                </div>
                <div
                  className="d-flex flex-row justify-space-between gap-3"
                  data-aos="fade-up"
                >
                  <img
                    src="/images/media/model1-thumb.png"
                    alt="img"
                    className="lazy-img d-inline"
                    style={{ width: "160px" }}
                  />
                  <img
                    src="/images/media/model2-thumb.png"
                    alt="img"
                    className="lazy-img d-inline"
                    style={{ width: "160px" }}
                  />
                  <img
                    src="/images/media/model3-thumb.png"
                    alt="img"
                    className="lazy-img d-inline"
                    style={{ width: "160px" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-md-6 m-auto order-lg-first">
                <img
                  // src="/images/media/img_50.jpg"
                  src="/images/media/model_preview.png"
                  alt="img"
                  className="lazy-img img-one md-mt-40"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>

          <Step2 />
          <Step3 />
        </div>

        <img
          src="/images/shape/shape_127.svg"
          alt="img"
          className="lazy-img shapes shape-one"
        />
      </div>
    </>
  );
};

export default SuccessStory;
