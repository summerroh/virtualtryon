import Link from "next/link";

import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Footer2 from "@/components/footer/Footer2";
import NewsLetter from "@/components/footer/NewsLetter";
import Header2 from "@/components/header/Header2";
import BannerSubscribe from "@/components/home-page/home-2/BannerSubscribe";
import FancyBanner from "@/components/home-page/home-2/FancyBanner";
import FancyBlock from "@/components/home-page/home-2/FancyBlock";
import Faq from "@/components/home-page/home-2/Faq";
import Hero from "@/components/home-page/home-2/Hero";
import IncludedPlan from "@/components/home-page/home-2/IncludedPlan";
import Partner from "@/components/home-page/home-2/Partner";
import Pricing from "@/components/home-page/home-2/Pricing";
import Testimonial from "@/components/home-page/home-2/Testimonial";
import CallToActions from "@/components/feature-web-hosting/CallToActions";
export const metadata = {
  title: "Web Hosting || Jano - Creative Multipurpose React NextJS Template",
};
const WebHosting = () => {
  return (
    <>
      {/* <!--  =============================================
      Theme Header2 Menu
      ============================================== 	--> */}
      <Header2 />

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      <Hero />

      {/* 
			=============================================
				Partner Section Four
			============================================== 
			*/}
      <div className="partner-section-four position-relative pt-100 sm-pt-70">
        <div className="wrapper m-auto">
          <div className="partner_slider_one row">
            <Partner />
          </div>
        </div>
        {/* /.wrapper */}
      </div>
      {/* /.partner-section-four */}

      <>
        {/* 
			=============================================
				Pricing Section Four
			============================================== 
			*/}
        <div className="pricing-section-four pt-170 lg-pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-10 col-md-9 m-auto">
                <div
                  className="title-style-seven text-center"
                  data-aos="fade-up"
                >
                  <h2 className="main-title fw-bold tx-dark">
                    Solo, Agency or Team? We’ve got you
                    <span className="position-relative d-inline-block">
                      covered
                      <img src="/images/shape/shape_96.svg" alt="shape" />
                    </span>
                  </h2>
                </div>
                {/* /.title-style-seven */}
              </div>
            </div>
          </div>
          {/* End .container */}

          <div className="wrapper pricing-table-area-four m-auto pt-80 lg-pt-30">
            <div className="row">
              <Pricing />
            </div>
          </div>
          {/* /.pricing-table-area-four */}

          <div className="container">
            <div className="text-center mt-100 lg-mt-50 " data-aos="fade-up">
              <div className="d-inline-block consult-text fs-18 fw-500 tx-dark">
                Not sure which website hosting plan is right for you? We can
                help.
                <a href="#" className="fw-normal text-decoration-underline">
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.pricing-section-four */}
        {/* 
			=============================================
				Feature Section Twenty Three
			============================================== 
			*/}
        <div className="fancy-feature-twentyThree mt-180 lg-mt-100">
          <div className="container">
            <div
              className="title-style-seven text-center pb-20"
              data-aos="fade-up"
            >
              <h2 className="main-title fw-bold tx-dark">
                All Included
                <span className="position-relative d-inline-block">
                  Plan
                  <img src="/images/shape/shape_97.svg" alt="illustration" />
                </span>
              </h2>
            </div>
            {/* /.title-style-seven */}
            <div className="row gx-xl-5">
              <IncludedPlan />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-feature-twentyThree */}
        {/*
			=====================================================
				Fancy Short Banner Nine
			=====================================================
			*/}
        <BannerSubscribe />
        {/* /.fancy-short-banner-nine */}
        {/* 
			=============================================
				Feature Section Twenty Four
			============================================== 
			*/}
        <FancyBanner />
        {/* /.fancy-feature-twentyFour */}
        {/* 
			=============================================
				Feature Section Twenty Three
			============================================== 
			*/}
        <div className="fancy-feature-twentyThree mt-35">
          <div className="container">
            <div className="border-top">
              <div className="row gx-xxl-5">
                <FancyBlock />
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-feature-twentyThree */}
        {/*=====================================================
			Feedback Section Six
			=====================================================*/}
        <div
          className="feedback-section-six p-30 mt-170 lg-mt-100 "
          data-aos="fade-up"
        >
          <div className="bg-wrapper position-relative pt-100 pb-110 lg-pt-60 lg-pb-50">
            <div className="container">
              <div className="position-relative inner-wrapper">
                <div className="row">
                  <div className="col-md-8 m-auto">
                    <img
                      src="/images/icon/icon_73.svg"
                      alt="icon"
                      className="m-auto"
                    />
                    <div className="title-style-seven text-center pt-30 pb-55">
                      <h2 className="main-title fw-bold text-white">
                        Check what these clients have to say.
                      </h2>
                    </div>
                    {/* /.title-style-seven */}
                  </div>
                </div>
                {/* End .row */}

                <Testimonial />
              </div>
              {/* /.inner-wrapper */}
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.feedback-section-six */}
        {/* 
			=============================================
				Feature Section Twenty Five
			============================================== 
			*/}
        <div className="fancy-feature-twentyFive mt-170 lg-mt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 m-auto" data-aos="fade-up">
                <div
                  className="title-style-seven text-center pb-120 lg-pb-50"
                  data-aos="fade-up"
                >
                  <h2 className="main-title fw-bold tx-dark">
                    Got questions? <br /> Well, we&lsquo;ve got
                    <span className="position-relative d-inline-block">
                      answers <img src="/images/shape/shape_99.svg" alt="" />
                    </span>
                  </h2>
                </div>
                {/* /.title-style-seven */}
              </div>
              <div className="col-xl-9 col-lg-10 m-auto " data-aos="fade-up">
                <Faq />

                <div className="text-center  mt-80 lg-mt-50">
                  <h3 className="fw-bold tx-dark mb-30">
                    Didn’t get your answer?
                  </h3>
                  <Link href="/contact" className="btn-fourteen fw-500 tran3s">
                    Submit your question
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-feature-twentyFive */}

        {/*
			=====================================================
				Fancy Short Banner Ten
			=====================================================
			*/}
        <CallToActions />
        {/* /.fancy-short-banner-ten */}

        {/*
		=====================================================
		Footer
		=====================================================
		*/}
        <div className="footer-style-seven p-30 theme-basic-footer">
          <div className="bg-wrapper position-relative">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-2 footer-intro mb-40">
                  <div className="logo">
                    <Link href="/">
                      <img src="/images/logo/logo_01.png" alt="brand" />
                    </Link>
                  </div>
                </div>
                {/* End .col */}

                <Footer2 />

                <div className="col-xl-4 col-lg-5 mb-30 form-widget">
                  <h5 className="footer-title tx-dark fw-normal">
                    Newslettert
                  </h5>
                  <h6 className="pt-15 pb-20 md-pt-10">Join our newsletter</h6>
                  <NewsLetter />
                  <div className="fs-14 mt-10">
                    We only send interesting and relevant emails.
                  </div>
                </div>
                {/* End .col-xl-4 */}
              </div>
              {/* End .row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.bg-wrapper */}
          <CopyrightFooter2 />
          {/* /.bottom-footer */}
        </div>
        {/* /.footer-style-seven */}
      </>
    </>
  );
};

export default WebHosting;
