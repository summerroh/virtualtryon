import React from "react";

import DefaulHeader from "@/components/header/DefaulHeader";
import Testimonial from "@/components/home-page/home-13/Testimonial";
import Faq from "@/components/home-page/home-13/Faq";
import Link from "next/link";
import FooterContent from "@/components/home-page/home-13/FooterContent";
import Subscribe from "@/components/home-page/home-13/Subscribe";
import CopyrightFooter from "@/components/home-page/home-13/CopyrightFooter";
import Image from "next/image";
import OurMission from "@/components/about/OurMission";
import Block2 from "@/components/about/Block2";
import CounterSection from "@/components/home-page/home-13/Counter";
export const metadata = {
  title: "About Us V4 || Jano - Creative Multipurpose React NextJS Template",
};
const AboutUsV4 = () => {
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
        Feature Section Fifty Eight
        ============================================== 
        */}
      <div className="fancy-feature-fiftyEight position-relative zn2 pt-180 md-pt-150">
        <div className="container position-relative">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-md-8 m-auto">
              <div
                className="title-style-fourteen text-center mb-100 lg-mb-70"
                data-aos="fade-up"
              >
                <div className="sc-title">ABOUT US</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Our mission to make your business{" "}
                  <span className="position-relative">
                    valuable{" "}
                    <Image
                      width={302}
                      height={9}
                      src="/images/shape/shape_186.svg"
                      alt="shape"
                    />
                  </span>
                </h2>
              </div>
              {/* /.title-style-fourteen */}
            </div>
          </div>
          <OurMission />
          {/* End .row */}

          <Image
            width={449}
            height={808}
            src="/images/shape/shape_187.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
        </div>
      </div>
      {/* /.fancy-feature-fiftyEight */}
      {/*
        =====================================================
        Feature Section Fifty Nine
        =====================================================
        */}
      <div
        className="fancy-feature-fiftyNine position-relative mt-140 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Jano. The People{" "}
              <span className="position-relative">
                of Expert.
                <Image
                  width={235}
                  height={9}
                  src="/images/shape/shape_188.svg"
                  alt="shape"
                />
              </span>
            </h2>
          </div>
          {/* End title */}
          <div className="row">
            <div className="col-xl-9 m-auto">
              <p
                className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20"
                data-aos="fade-up"
              >
                At jano, we’ve seen again and again how the seemingly simple act
                of creating can be a force for growth, change,and discovery in
                people’s lives. We want to inspire and multiply the kind of
                creative exploration that furthers expression, learning and
                application.
              </p>
            </div>
          </div>
          {/* End .row */}
          <div className="card-wrapper pt-45 lg-pt-20 pb-55 lg-pb-30 mt-85 lg-mt-50">
            <div className="row justify-content-center">
              <Block2 />
            </div>
          </div>{" "}
          {/* /.card-wrapper */}
        </div>{" "}
        {/* /.container */}
        <div className="wrapper mt-50 lg-mt-10">
          <div className="container">
            <div className="row">
              <CounterSection />
            </div>
          </div>
        </div>{" "}
        {/* /.wrapper */}
        <Image
          width={130}
          height={108}
          src="/images/shape/shape_189.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>
      {/* /.fancy-feature-fiftyNine */}
      {/* 
        =============================================
        Feedback Section Ten
        ============================================== 
        */}
      <div
        className="feedback-section-ten position-relative zn2 pt-110 pb-150 mt-160 lg-mt-100 lg-pt-80 lg-pb-80"
        style={{ background: "#fafafa" }}
      >
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  aos="fade-right"
                >
                  <div className="sc-title">FEEDBACK</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
                    What
                    <span className="position-relative">
                      {" "}
                      client{" "}
                      <Image
                        width={100}
                        height={4}
                        src="/images/shape/shape_129.svg"
                        alt=""
                      />
                    </span>
                    think about us.
                  </h2>
                </div>
                {/* /.title-style-ten */}
              </div>
            </div>
            {/* End .row */}
            <Testimonial />
          </div>
        </div>
        {/* End .container */}

        <Image
          width={129}
          height={147}
          src="/images/shape/shape_130.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <Image
          width={170}
          height={150}
          src="/images/shape/shape_131.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.feedback-section-ten */}
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

          <div
            className="bg-wrapper position-relative mt-80 lg-mt-40"
            aos="fade-up"
          >
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
        Fancy Short Banner Twelve
        =====================================================
        */}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Have Any Project? <br />
                  <span className="position-relative">
                    Let’s Talk{" "}
                    <Image
                      width={221}
                      height={7}
                      src="/images/shape/shape_132.svg"
                      alt=""
                    />
                  </span>
                  &amp; Grow your Business
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                aos="fade-up"
                aos-delay="200"
              >
                We’r ready to help you. Our expert is here, just send a message.
              </p>
              <Link
                href="/contact"
                className="btn-twenty fw-500 tran3s"
                aos-delay="300"
                aos="fade-up"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
      </div>
      {/* /.fancy-short-banner-twelve */}
      {/*
        =====================================================
        Footer
        =====================================================
        */}
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
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
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}

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

export default AboutUsV4;
