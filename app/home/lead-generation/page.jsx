import React from "react";

import Header from "@/components/landing/Header";
import Hero from "@/components/hero";
import Feedback from "@/components/landing/Feedback";
import Link from "next/link";
import CopyrightFooter from "@/components/landing/CopyrightFooter";
import Image from "next/image";
// import { Element } from "react-scroll";
// import Pricing from "@/app/404/page";
import Pricing from "@/components/landing/Pricing";
import ImageRoller from "@/components/roller/ImageRoller";
import Step2 from "@/components/landing/Step2";
import Step2Old from "@/components/landing/Step2Old";
import Step3 from "@/components/landing/Step3";
import Step1 from "@/components/landing/Step1";
import { QnA } from "@/components/landing/QnA";

export const metadata = {
  title: "Virtual Fitting Room || Create professional fashion photoshoots",
};
const LeadGeneration = () => {
  // 상단 메뉴 스크롤 기능
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);

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

      <div id="services">
        <Step1 />
      </div>
      <Step2 />
      <Step2Old />
      <Step3 />

      <div id="pricing">
        <Pricing />
      </div>

      <div
        id="faq"
        className="flex justify-center flex-col px-8 lg:px-12 xl:px-40 py-8 md:py-16 bg-white mt-40 bg-black"
      >
        <div className="text-center">
          <h6 className="text-sm uppercase text-primary fw-semibold mb-3">
            MODEL GALLERY
          </h6>
          <h1 className="text-5xl font-bold text-dark font-recoleta fw-normal mb-4">
            Questions & Answers
          </h1>
        </div>

        <div className="position-relative sm:mt-10 lg:mt-20" aos="fade-up">
          <QnA />
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
                      <h2 className="main-title fw-500 text-white m0 text-xl">
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
      </div>

      {/* /.footer-style-nine */}
    </>
  );
};

export default LeadGeneration;
