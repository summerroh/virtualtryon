import Image from "next/image";

import Footer from "@/components/home-page/home-10/Footer";
import Header from "@/components/home-page/home-10/Header";
import Block2 from "@/components/services/Block2";
import Faq4 from "@/components/faqs/Faq4";
import Testimonial from "@/components/services/Testimonial";
import CallToActions from "@/components/services/CallToActions";
export const metadata = {
  title: "Service V4 || Jano - Creative Multipurpose React NextJS Template",
};
const ServiceV4 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header />
      {/* 
      =============================================
      Theme Inner Banner
      ============================================== 
      */}
      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Services</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">
              Agency work with top rated talented people provide qulaity
              services.
            </p>
          </div>
          {/* End container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.inner-banner-three */}
      {/* 
			=============================================
				Feature Section One
			============================================== 
			*/}
      <div className="fancy-feature-one pt-120 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 aos fadeInLeft">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                  Provide <span>Quality</span> Services.
                </h2>
              </div>{" "}
              {/* /.title-style-one */}
            </div>
            <div className="col-lg-5 ms-auto aos fadeInRight">
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
                Jano provides alternative asset management solutions to a global
                client base and manages a significant.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-120 lg-pt-80 md-pt-60">
          <div className="row gx-xxl-5">
            <Block2 />
          </div>
        </div>{" "}
        {/* /.container */}
      </div>
      {/* /.fancy-feature-one */}
      {/* 
			=============================================
				Feature Section Fifty Four
			============================================== 
			*/}
      <div className="fancy-feature-fiftyFour p-30 mt-50 lg-mt-40">
        <div className="bg-wrapper position-relative zn2 pt-110 lg-pt-80 pb-110 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="title-style-one">
                  <div className="sc-title text-uppercase">Why us?</div>
                  <h2 className="main-title fw-bold tx-dark">
                    Why <span>choose</span> Jano.
                  </h2>
                </div>{" "}
                {/* /.title-style-one */}
                <p className="text-lg mt-40 lg-mt-20">
                  We helping our client to fullfill their needs with our expert.
                </p>
                <img
                  src="/images/shape/shape_179.svg"
                  alt="shape"
                  className="lazy-img d-none d-lg-block mt-40"
                />
              </div>
              {/* End .col-4 */}

              <div className="col-lg-7 ms-auto" data-aos="fade-left">
                <div className="bg-white pe-3 ps-3 pe-lg-5 ps-lg-5 pt-15 pb-15 ms-xxl-4 rounded-3 md-mt-40">
                  <Faq4 />
                  {/* /.accordion-style-two */}
                </div>
              </div>
            </div>
          </div>
          {/* End container */}

          <Image
            width={8}
            height={8}
            src="/images/shape/shape_11.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <Image
            width={18}
            height={16}
            src="/images/shape/shape_13.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
          <Image
            width={8}
            height={8}
            src="/images/shape/shape_10.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <Image
            width={10}
            height={10}
            src="/images/shape/shape_12.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
        </div>{" "}
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-fiftyFour */}

      {/*
			=====================================================
			Feedback Section One
			=====================================================
			*/}
      <div
        className="feedback-section-one zn2 position-relative"
        data-aos="fade-up"
      >
        <div className="bg-white zn2 position-relative pt-150 lg-pt-100">
          <div className="shapes shape-two" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 m-auto">
                <div className="title-style-one text-center">
                  <h2 className="main-title fw-bold tx-dark m0">
                    What’s <span>Our Client</span> Say About us.
                  </h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
          </div>
          {/* /.container */}
          <Testimonial />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.feedback-section-one */}

      {/* 
			=============================================
				Wrapper
			============================================== 
			*/}
      <div className="wrapper position-relative mt-160 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 m-auto text-center">
              <div className="title-style-one" data-aos="fade-up">
                <h2 className="main-title fw-bold tx-dark m0">
                  Ready to take plan? It’s just a matter of{" "}
                  <span>one clike</span>
                </h2>
              </div>{" "}
              {/* /.title-style-one */}
              <p
                className="text-lg tx-dark pt-40 pb-35 lg-pt-30 lg-pb-20"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Try it risk free — we don’t charge cancellation fees.
              </p>
              <a
                href="#"
                className="btn-two fs-18 fw-500"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Purchase Now
              </a>
            </div>
          </div>
        </div>
        <Image
          width={8}
          height={8}
          src="/images/shape/shape_20.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
          style={{ top: "5%", left: "10%" }}
        />
        <Image
          width={11}
          height={11}
          src="/images/shape/shape_21.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
          style={{ bottom: "-4%", left: "18%" }}
        />
        <Image
          width={9}
          height={9}
          src="/images/shape/shape_22.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
          style={{ bottom: "-4%", right: "23%" }}
        />
        <Image
          width={16}
          height={14}
          src="/images/shape/shape_23.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
          style={{ top: "-3%", right: "14%" }}
        />
      </div>
      {/* /.wrapper */}

      {/*
			=====================================================
				Fancy Short Banner One
			=====================================================
			*/}
      <CallToActions />
      {/* /.fancy-short-banner-one */}

      {/* 
        =============================================
        Footer
        ============================================== 
        */}
      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            <div className="bottom-footer">
              <p className="copyright text-center m0">
                © {new Date().getFullYear()}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/user/ib-themes"
                >
                  ib-themes
                </a>
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-one */}
    </>
  );
};

export default ServiceV4;
