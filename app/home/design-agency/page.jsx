import Link from "next/link";

import Header from "@/components/home-page/home-12/Header";
import Hero from "@/components/home-page/home-12/Hero";
import Portfolio from "@/components/home-page/home-12/Portfolio";
import Testimonial from "@/components/home-page/home-12/Testimonial";
import Partners from "@/components/home-page/home-12/Partners";
import Blog from "@/components/home-page/home-12/Blog";
import Social from "@/components/home-page/home-12/Social";
import Image from "next/image";
export const metadata = {
  title: "Design Agency || Jano - Creative Multipurpose React NextJS Template",
};
const DesignAgency = () => {
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
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />
      {/* /.hero-banner-eleven */}

      {/*
        =====================================================
        Portfolio Gallery Two
        =====================================================
        */}
      <div className="portfolio-gallery-two pt-200 lg-pt-80">
        <div className="container">
          <div className="wrapper">
            <div id="isotop-gallery-wrapper">
              <Portfolio />
            </div>
            {/* /#isotop-gallery-wrapper */}
          </div>
          {/* /.wrapper */}
        </div>
      </div>
      {/* /.portfolio-gallery-two */}

      {/*
			=====================================================
				Feedback Section Twelve
			=====================================================
			*/}
      <div
        className="feedback-section-twelve position-relative mt-110 sm-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-6 col-sm-8 m-auto">
              <div className="title-style-five text-center mb-80 lg-mb-60">
                <h2 className="main-title font-recoleta fw-500 tx-dark">
                  What’s our client Say About us.
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="slider-wrapper">
                <div className="feedback_slider_nine">
                  <Testimonial />
                </div>
                {/* /.feedback_slider_nine */}
              </div>
              {/* /.slider-wrapper */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_143.svg"
          alt="shape"
          className="shapes lazy-img shape-one"
        />
        <img
          src="/images/shape/shape_144.svg"
          alt="shape"
          className="shapes lazy-img shape-two"
        />
      </div>
      {/* /.feedback-section-twelve */}

      {/* 
			=============================================
				Partner Section Six
			============================================== 
			*/}
      <div className="partner-section-six mt-140 lg-mt-80" data-aso="fade-up">
        <div className="container">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <span className="lines" />
              <div className="title text-uppercase tx-dark text-center">
                JANO has been featured In
              </div>
              <span className="lines" />
            </div>
            {/* End d-flex */}

            <div className="partner_slider_one mt-65 lg-mt-40">
              <Partners />
            </div>
            {/* End partner_slide */}
          </div>
        </div>
      </div>
      {/* /.partner-section-six */}

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-section-five mt-190 lg-mt-120">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-xl-6">
                <div className="title-style-five text-center text-md-start mb-30 md-mb-10">
                  <h2 className="main-title font-recoleta fw-500 tx-dark">
                    Our Blog
                  </h2>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row gx-xxl-5">
              <Blog />
            </div>
            {/* End .row */}

            <div className="btn-holder text-center">
              <div className="btn-eighteen position-relative d-inline-block tx-dark sm-mt-60">
                <Link href="/blog/blog-v3" className="fw-500 tran3s">
                  Check our all news <i className="fa-solid fa-angle-right" />
                </Link>
              </div>
            </div>
            {/* End btn-holder */}
          </div>
          {/* End position-relative */}
        </div>
      </div>
      {/* /.blog-section-five */}

      {/*
			=====================================================
				Fancy Short Banner Fourteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-fourteen mt-200 lg-mt-140 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="wrapper pb-90 lg-pb-40">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-9">
                <h2 className="title font-recoleta fw-normal tx-dark position-relative m0 text-center text-md-start sm-pb-30">
                  Any <span>Project</span> in your mind? Let’s Chat.
                </h2>
              </div>
              <div className="col-lg-4 col-md-3">
                <a
                  href="#"
                  className="btn-twentyThree d-flex align-items-center justify-content-center m-auto me-md-0 ms-md-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  <Image
                    width={51}
                    height={51}
                    src="/images/icon/icon_115.svg"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-short-banner-fourteen */}

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-four position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-30 order-lg-0">
              <div className="logo d-flex justify-content-center justify-content-lg-start">
                <Link href="/">
                  <Image
                    width={77}
                    height={24}
                    src="/images/logo/logo_04.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 d-flex justify-content-center justify-content-lg-end order-lg-3">
              <a
                href="mailto:support@jano.com"
                className="mail d-flex align-items-center"
              >
                <span className="icon d-flex align-items-center justify-content-center rounded-circle">
                  <i className="far fa-envelope" />
                </span>{" "}
                <span>support@jano.com</span>
              </a>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 order-lg-2">
              <Social />
            </div>
            {/* End .col-lg-4 */}
          </div>
        </div>
      </div>
      {/* /.footer-style-four */}
    </>
  );
};

export default DesignAgency;
