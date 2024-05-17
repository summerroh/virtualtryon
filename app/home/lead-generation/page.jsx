import React from "react";

import Header from "@/components/home-page/home-13/Header";
import Hero from "@/components/home-page/home-13/hero";
import Feedback from "@/components/home-page/home-13/Feedback";
import Counter from "@/components/home-page/home-13/Counter";
import SuccessStory from "@/components/home-page/home-13/SuccessStory";
import Testimonial from "@/components/home-page/home-13/Testimonial";
import Faq from "@/components/home-page/home-13/Faq";
import Link from "next/link";
import CopyrightFooter from "@/components/home-page/home-13/CopyrightFooter";
import Image from "next/image";
// import Pricing from "@/app/404/page";
import Pricing from "@/components/home-page/home-13/Pricing";
import ImageRoller from "@/components/roller/ImageRoller";
import Step2 from "@/components/home-page/home-13/Step2";
import Step3 from "@/components/home-page/home-13/Step3";
import Step1 from "@/components/home-page/home-13/Step1";

export const metadata = {
  title: "Virtual Fitting Room || Create professional fashion photoshoots",
};
const LeadGeneration = () => {
  return (
    <>
      <Header />

      <Hero />

      <ImageRoller />

      <Feedback />

      <div className="fancy-feature-thirtyTwo mt-190 lg-mt-120">
        <div className="container"></div>

        <div className="wrapper mt-90 lg-mt-30">
          <div className="container">
            <div className="row">
              <Counter />
            </div>
          </div>
        </div>
        {/* /.wrapper */}
      </div>
      {/* /.fancy-feature-thirtyTwo */}
      {/*
			=====================================================
				Feedback Section Nine
			=====================================================
			*/}
      <div className="feedback-section-nine position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 ms-lg-auto" data-aos="fade-left">
              <div className="title-style-ten">
                <div className="sc-title badge">STEP 1</div>

                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Choose Your{" "}
                  <span className="position-relative">
                    Model <img src="/images/shape/shape_122.svg" alt="img" />
                  </span>
                </h2>
                <p className="fs-20 pt-20 lg-pt-10">
                  Browse through our AI model library to find the ideal fit for
                  your products or use your own model photo{""}
                </p>
              </div>
              {/* /.title-style-ten */}
            </div>
          </div>
        </div>

        {/* <SuccessStory /> */}
      </div>

      <Step1 />
      <Step2 />
      <Step3 />

      {/* /.feedback-section-nine */}

      <div
        className="title-style-ten text-center mt-180 lg-mt-120 mb-40"
        aos="fade-up"
      >
        {/* <div className="sc-title">FAQ</div> */}
        <h2 className="main-title font-recoleta fw-normal tx-dark">
          {/* Text without underline  */}
          <span className="position-relative">
            Pricing{" "}
            <Image
              width={219}
              height={7}
              src="/images/shape/shape_132.svg"
              alt=""
            />
          </span>
        </h2>
      </div>

      <div className="container">
        <Pricing />
      </div>

      {/* 
        =============================================
        Feature Section Thirty Three
        ============================================== 
        */}
      <div className="fancy-feature-thirtyThree mt-180 lg-mt-120">
        <div className="container">
          <div className="title-style-ten text-center" aos="fade-up">
            <div className="sc-title">FAQ</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Questions &amp;{" "}
              <span className="position-relative">
                Answers{" "}
                <Image
                  width={219}
                  height={7}
                  src="/images/shape/shape_132.svg"
                  alt=""
                />
              </span>
            </h2>
          </div>
          {/* /.title-style-ten */}

          <div className="position-relative mt-80 lg-mt-40" aos="fade-up">
            <Faq />
            <Image
              width={65}
              height={66}
              src="/images/shape/shape_133.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-feature-thirtyThree */}

      {/*
        =====================================================
            Fancy Short Banner Sixteen
        =====================================================
        */}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80 mb-100"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">Interested?</div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-twelve */}
      {/*
        =====================================================
        Footer
        =====================================================
      */}

      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        {/* 
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo/logo_06.png"
                      alt="logo"
                      width={76}
                      height={27}
                    />
                  </Link>
                </div>
              </div>
              <FooterContent />

              <div className="col-lg-4 mb-30 form-widget">
                <h5 className="footer-title fw-normal">Newslettert</h5>
                <h6 className="pt-15 pb-20 text-white">Join our newsletter</h6>
                <Subscribe />
                <div className="fs-14 mt-10 text-white opacity-50">
                  We only send interesting and relevant emails.
                </div>
              </div>
            </div>
          </div>
        </div>
          */}

        <CopyrightFooter />

        <div className="shapes shape-one" />
        <Image
          width={84}
          height={104}
          src="/images/shape/shape_134.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* /.footer-style-nine */}
    </>
  );
};

export default LeadGeneration;
