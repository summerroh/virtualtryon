import Header5 from "@/components/header/Header5";
import Property from "@/components/home-page/home-5/Property";
import CallToActions from "@/components/home-page/home-5/CallToActions";
import Footer from "@/components/home-page/home-5/footer";
import Service2 from "@/components/services/Service2";
import Testimonial from "@/components/home-page/home-5/Testimonial";
import Link from "next/link";
export const metadata = {
  title: "Service V2 || Jano - Creative Multipurpose React NextJS Template",
};
const ServiceV2 = () => {
  return (
    <>
      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header5 />

      {/* 
        =============================================
        Feature Section Forty Six
        ============================================== 
        */}
      <div className="fancy-feature-fortySix position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-180 lg-pt-120 md-pb-130">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="title-style-eleven md-mb-20">
                  <h2 className="main-title tx-dark">
                    Service we provide with care.
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 ms-auto" data-aos="fade-left">
                <p className="text-lg m0">
                  Inciddnt ut labore et dolor magna aliu. enim ad mim venam,
                  quis nostru labore elit lorem dus amet lorem.
                </p>
              </div>
            </div>
            {/* End .row */}

            <div className="row gx-xxl-5 pt-90 lg-pt-40 md-pt-20">
              <Property />
            </div>
            {/* End .row */}
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Fifty Three
        ============================================== 
        */}
      <div className="fancy-feature-fiftyThree position-relative pt-150 pb-200 lg-pt-80 lg-pb-110">
        <div className="container">
          <div
            className="title-style-eleven text-center pb-50 lg-pb-20"
            data-aos="fade-up"
          >
            <h2 className="main-title tx-dark">Quality Services</h2>
          </div>
          <div className="row">
            <Service2 />
          </div>
        </div>
        <img
          src="/images/shape/shape_174.svg"
          alt="shape"
          className="lazy-img shapes shape-one d-none d-md-inline-block"
        />
        <div className="shapes shape-two" />
        <div className="shapes shape-three" />
      </div>
      {/* /.fancy-feature-fiftyThree */}

      {/*
			=====================================================
			Feedback Section Fourteen
			=====================================================
			*/}
      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pt-250 pb-180 lg-pt-120 lg-pb-80">
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
                    <Testimonial />
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
        Fancy Short Banner Seventeen
        =====================================================
        */}
      <div className="fancy-short-banner-seventeen position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 text-center pt-75 pb-225 lg-pb-120">
            <div className="row">
              <div className="col-xl-9 m-auto">
                <div
                  className="title-style-eleven"
                  data-aos-delay="100"
                  data-aos="fade-up"
                >
                  <h2 className="main-title tx-dark">
                    Have Any Project? <br /> Let’s Talk &amp; Grow your Business
                  </h2>
                </div>
                <p
                  className="text-lg mt-40 mb-55 lg-mt-30 lg-mb-40 "
                  data-aos-delay="200"
                  data-aos="fade-up"
                >
                  We’r ready to help you. Our expert is here, just send a
                  message.
                </p>
                <Link
                  href="/contact"
                  className="btn-twenty fw-500 tran3s"
                  data-aos="fade-up"
                  data-aos-delay="0.3"
                >
                  Send Message
                </Link>
              </div>
            </div>
            <div className="shapes shape-two" />
            <div className="shapes shape-three" />
            <div className="shapes shape-four" />
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        <img
          src="/images/shape/shape_162.svg"
          alt="shape"
          className="lazy-img shapes shape-one d-none d-md-inline-block"
        />
      </div>
      {/* /.fancy-short-banner-seventeen */}

      {/*
        =====================================================
        Fancy Short Banner Fifteen
        =====================================================
        */}
      <div className="fancy-short-banner-fifteen pt-150 lg-pt-80 pb-30 position-relative zn2">
        <CallToActions />
      </div>

      {/* <!--
        =====================================================
        Footer
        =====================================================
        --> */}
      <Footer />
    </>
  );
};

export default ServiceV2;
