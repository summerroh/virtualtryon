import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import Testimonial from "@/components/home-page/home-3/Testimonial";
import Testimonial2 from "@/components/home-page/home-5/Testimonial";
import Testimonial3 from "@/components/home-page/home-6/Testimonial";
export const metadata = {
  title: "Testimonials || Jano - Creative Multipurpose React NextJS Template",
};
const Testimonials = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-6" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-20">
                <div className="sc-title-two fst-italic position-relative">
                  Testimonials
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Client Feedback About us.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
        {/* End .container */}
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
            {/* /.feedback_slider_seven */}
          </div>
          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>
      {/* /.feedback-section-eleven */}

      {/*
			=====================================================
			Feedback Section Fourteen
			=====================================================
			*/}
      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="pt-180 pb-180 lg-pt-100 lg-pb-100 position-relative zn2">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h2 className="main-title fw-500 tx-dark">
                    Check our client lovely words.
                  </h2>
                </div>
                {/* /.title-style-five */}
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                  <div className="feedback_slider_eleven">
                    <Testimonial2 />
                  </div>
                  {/* /.feedback_slider_eleven */}
                </div>
              </div>
              {/* End .col-md-6 */}

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25"
                  data-aos="fade-left"
                >
                  <img
                    src="/images/media/img_84.jpg"
                    alt="shape"
                    className="lazy-img ms-auto"
                  />

                  <div className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <strong className="fw-500">4.8</strong>
                    <span>avg rating</span>
                  </div>
                  {/* /.rating-box */}

                  <img
                    src="/images/shape/shape_163.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                  />
                  <img
                    src="/images/shape/shape_168.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_169.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
      </div>

      {/*
			=====================================================
				Feedback Section Two
			=====================================================
			*/}
      <div
        className="feedback-section-two position-relative pt-150 pb-150 lg-pt-100 lg-pb-100 sm-pt-10 sm-pb-10"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 col-md-8 col-sm-10 m-auto">
              <div className="title-style-three text-center mb-70 lg-mb-40">
                <div
                  className="icon d-flex align-items-center justify-content-center rounded-circle"
                  style={{ background: "#FFC961" }}
                >
                  <img
                    src="/images/icon/icon_19.svg"
                    alt="icon"
                    className="lazy-img"
                  />
                </div>
                <h2 className="main-title fw-500">
                  Check what’s our
                  <span className="d-inline-block position-relative">
                    client
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#BCF8F1" }}
                    />
                  </span>
                  say about us.
                </h2>
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <Testimonial3 />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="circle-bg shapes">
          <img
            src="/images/shape/shape_37.svg"
            alt="shape"
            className="lazy-img main-img m-auto"
          />
          <img
            src="/images/media/img_07.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-one"
            style={{ width: "80px", height: "80px" }}
          />
          <img
            src="/images/media/img_08.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-two"
            style={{ width: "45px", height: "45px" }}
          />
          <img
            src="/images/media/img_09.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-three"
            style={{ width: "85px", height: "85px" }}
          />
          <img
            src="/images/media/img_10.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-four"
            style={{ width: "45px", height: "45px" }}
          />
          <img
            src="/images/media/img_11.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-five"
            style={{ width: "110px", height: "110px" }}
          />
          <img
            src="/images/media/img_12.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-six"
            style={{ width: "55px", height: "55px" }}
          />
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default Testimonials;
