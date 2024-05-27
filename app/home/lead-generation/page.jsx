import React from "react";

import Header from "@/components/landing/Header";
import Hero from "@/components/hero";
import Feedback from "@/components/landing/Feedback";
import Faq from "@/components/landing/Faq";
import Link from "next/link";
import CopyrightFooter from "@/components/landing/CopyrightFooter";
import Image from "next/image";
// import Pricing from "@/app/404/page";
import Pricing from "@/components/landing/Pricing";
import ImageRoller from "@/components/roller/ImageRoller";
import Step2 from "@/components/landing/Step2";
import Step3 from "@/components/landing/Step3";
import Step1 from "@/components/landing/Step1";

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

      {/* <div className="fancy-feature-thirtyTwo mt-20 lg-mt-20">
        <div className="wrapper mt-20 lg-mt-0">
          <div className="container">
            <Counter />
          </div>
        </div>
      </div> */}

      <Step1 />
      <Step2 />
      <Step3 />

      <div
        className="title-style-ten text-center mt-40 lg-mt-40 mb-20"
        aos="fade-up"
      >
        {/* <div className="sc-title">FAQ</div> */}
        <h2 className="main-title font-recoleta fw-normal text-dark">
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

      <div className="fancy-feature-thirtyThree mt-40 lg-mt-60">
        <div className="container">
          <div className="title-style-ten text-center" aos="fade-up">
            <div className="sc-title">FAQ</div>
            <h2 className="main-title font-recoleta fw-normal text-dark">
              Questions &amp;{" "}
              <span className="position-relative">
                Answers{" "}
                {/* <Image
                  width={219}
                  height={7}
                  src="/images/shape/shape_132.svg"
                  alt=""
                /> */}
              </span>
            </h2>
          </div>
          {/* /.title-style-ten */}

          <div className="position-relative mt-20 lg-mt-20" aos="fade-up">
            <Faq />
          </div>
        </div>
      </div>
      <div
        className="fancy-short-banner-sixteen mt-20 lg-mt-20 mb-20"
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
        </div>
      </div>
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
