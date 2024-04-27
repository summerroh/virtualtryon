import React from "react";

import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Image from "next/image";
import Partner from "@/components/feature-sass/Partner";
import Blog from "@/components/feature-sass/Blog";
import Features from "@/components/feature-sass/Features";
import Features2 from "@/components/feature-sass/Features2";
import Hero from "@/components/feature-sass/Hero";
export const metadata = {
  title: "Features V1 || Jano - Creative Multipurpose React NextJS Template",
};
const FeaturesV1 = () => {
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
      <div className="hero-banner-two position-relative pt-160 md-pt-150">
        <img
          src="/images/shape/shape_182.svg"
          alt="shape"
          className="lazy-img shapes shape-left-two"
        />
        <img
          src="/images/shape/shape_183.svg"
          alt="shape"
          className="lazy-img shapes shape-right-two"
        />

        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <Hero />
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-100 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <Image
                  width={1205}
                  height={574}
                  layout="responsive"
                  src="/images/media/img_96.jpg"
                  alt="shape"
                  className="lazy-img main-screen-two m-auto"
                />
              </div>
            </div>
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
      {/* /.hero-banner-two */}
      {/* 
        =============================================
        Feature Section Fifty Five
        ============================================== 
        */}
      <div className="fancy-feature-fiftyFive position-relative zn2 pt-140 lg-pt-80 pb-140 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row">
                <div className="col-xxl-7 col-lg-6 col-md-7 m-auto">
                  <div className="title-style-five text-center mb-140 lg-mb-50">
                    <h2 className="main-title font-recoleta fw-normal">
                      We’ve ton of
                      <span className="position-relative d-inline-block">
                        features
                        <img
                          src="/images/shape/shape_181.svg"
                          alt="icon"
                          className="lazy-img shapes line-shape"
                        />
                      </span>
                      for all sectors.
                    </h2>
                  </div>
                  {/* /.title-style-three */}
                </div>
              </div>
              {/* End header title */}

              <div className="row">
                <div className="col-lg-7 col-md-6 order-md-last">
                  <div className="d-flex align-items-center justify-content-between title-line mt-15">
                    <div className="count fw-500 font-recoleta text-white rounded-circle text-center order-md-last">
                      01
                    </div>
                    <div className="solid-line order-md-first" />
                  </div>
                </div>
                {/* End .col */}
                <div className="col-lg-5 col-md-6 order-md-first">
                  <div className="title-style-thirteen text-center text-md-start sm-mt-20">
                    <h2 className="main-title font-recoleta fw-normal">
                      Features For all kind of Team.
                    </h2>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <Features />
              </div>
              {/* End .row */}

              <div className="mt-150 lg-mt-80">
                <div className="row">
                  <div className="col-lg-7 col-md-6">
                    <div className="d-flex align-items-center justify-content-between title-line mt-15">
                      <div className="count fw-500 font-recoleta text-white rounded-circle text-center">
                        02
                      </div>
                      <div className="solid-line" />
                    </div>
                  </div>
                  {/* End col-lg-7 */}
                  <div className="col-lg-5 col-md-6">
                    <div className="title-style-thirteen text-center text-md-start sm-mt-20">
                      <h2 className="main-title font-recoleta fw-normal">
                        Features for all kind of companies.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-lg-5 */}
                </div>
                {/* End .row */}

                <div className="row">
                  <Features2 />
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
      </div>
      {/* /.fancy-feature-fiftyFive */}

      {/* 
        =============================================
        Blog Section Seven
        ============================================== 
        */}
      <div className="blog-section-seven position-relative mt-150 lg-mt-90">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row">
                <div className="col-lg-10 m-auto">
                  <div
                    className="title-style-three text-center mb-70 lg-mb-40"
                    data-aos="fade-up"
                  >
                    <div className="sc-title text-uppercase">Success Story</div>
                    <h2 className="main-title fw-normal">
                      Learn how real
                      <span className="d-inline-block position-relative">
                        companies
                        <span
                          className="mark-bg"
                          style={{ backgroundColor: "#C6FFFF" }}
                        />
                      </span>
                      get real results with Jano.
                    </h2>
                  </div>
                  {/* /.title-style-three */}
                </div>
              </div>
              {/* End .row */}

              <div className="row gx-xxl-5">
                <Blog />
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.blog-section-seven */}

      {/* 
			=============================================
				Partner Section Six
			============================================== 
			*/}
      <div
        className="partner-section-six mt-80 mb-225 lg-mt-60 lg-mb-200 md-mb-120"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="wrapper">
            <div className="partner_slider_one">
              <Partner />
            </div>
          </div>
        </div>
      </div>
      {/* /.partner-section-six */}

      {/*
        =====================================================
        Footer
        =====================================================
        */}
      <div className="footer-style-two theme-basic-footer">
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
            {/* /.inner-wrapper */}
          </div>
          <div className="shapes shape-one rounded-circle" />
          <div className="shapes shape-two rounded-circle" />
          <img
            src="/images/shape/shape_42.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <img
            src="/images/shape/shape_43.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
        </div>
        {/* /.top-footer */}
        <CopyrightFooter2 />
      </div>
      {/* /.footer-style-two */}
    </>
  );
};

export default FeaturesV1;
