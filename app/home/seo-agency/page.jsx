import Link from "next/link";

import Contact from "@/components/home-page/home-11/Contact";
import Counter from "@/components/home-page/home-11/Counter";
import FancyFeatures from "@/components/home-page/home-11/FancyFeatures";
import Header from "@/components/home-page/home-11/Header";
import Hero from "@/components/home-page/home-11/Hero";
import Services from "@/components/home-page/home-11/Services";
import Services2 from "@/components/home-page/home-11/Services2";
import Testimonial from "@/components/home-page/home-11/Testimonial";
import Pricing from "@/components/pricing/Pricing";
import Blog from "@/components/home-page/home-11/Blog";
import CallToActions from "@/components/home-page/home-11/CallToActions";
import Social from "@/components/home-page/home-11/Social";
import Footer from "@/components/home-page/home-11/Footer";
export const metadata = {
  title: "Seo Agency || Jano - Creative Multipurpose React NextJS Template",
};
const SeoAgency = () => {
  return (
    <>
      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />
      {/* <!-- /.theme-main-menu --> */}

      {/* 
			=============================================
				Theme Hero Banner
			============================================== 
			*/}
      <div className="hero-banner-six position-relative pt-180 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center" data-aos="fade-up">
              <Hero />
              {/* /.subscribe-form */}
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder text-center mt-45"
            data-aos="fade-up"
          >
            <div className="d-lg-block">
              <img
                src="/images/assets/ils_02.svg"
                alt="shape"
                className="lazy-img m-auto"
              />
            </div>
          </div>
          {/* End .illustration-holder */}
        </div>
        {/* /.container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_85.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
        <div className="shapes shape-six rounded-circle" />
        <div className="shapes shape-seven rounded-circle" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-eight"
        />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-nine"
        />
      </div>
      {/* /.hero-banner-six */}

      {/* 
			=============================================
				Feature Section Nineteen
			============================================== 
			*/}
      <div className="fancy-feature-nineteen position-relative pt-170 pb-160 lg-pt-100 lg-pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-normal tx-dark m0">
                  Provide <span>Quality</span> Services.
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
            {/* End .col-lg-6 */}

            <div className="col-xl-5 col-lg-6 ms-auto" data-aos="fade-left">
              <p className="text-lg text-center text-lg-start md-pt-30 m0 ps-xxl-4">
                Jano provides alternative asset management solutions to a global
                client base and manages a significant.
              </p>
            </div>
          </div>
          {/* End .row */}

          <div className="row gx-xxl-5 pt-60 lg-pt-20">
            <Services />
          </div>
        </div>
        {/* /.container */}

        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
      </div>
      {/* /.fancy-feature-nineteen */}

      {/* 
			=============================================
				Feature Section Twenty
			============================================== 
			*/}
      <div className="fancy-feature-twenty mt-250 lg-mt-140">
        <div className="container">
          <FancyFeatures />
        </div>
        {/* /.container */}

        <div className="wrapper mt-60 lg-mt-10">
          <div className="container">
            <div className="row justify-content-center">
              <Counter />
            </div>
          </div>
        </div>
        {/* /.wrapper */}
      </div>
      {/* /.fancy-feature-twenty */}

      {/* 
			=============================================
				Feature Section Twenty One
			============================================== 
			*/}
      <div className="fancy-feature-twentyOne position-relative mt-190 pt-130 pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
        <div className="container">
          <div className="row">
            <Services2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
        <img
          src="/images/shape/shape_88.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_89.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
      </div>
      {/* /.fancy-feature-twentyOne */}

      {/*
			=====================================================
			Pricing Section Three
			=====================================================
			*/}
      <div className="pricing-section-three position-relative mt-225 mb-225 lg-mt-140 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div
                className="title-style-one text-center mb-70 lg-mb-40"
                data-aos="fade-up"
              >
                <div className="sc-title text-uppercase">OUR PRICING </div>
                <h2 className="main-title fw-normal tx-dark m0">
                  No <span>hidden</span> charge, Choose your plan.
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
          </div>
          {/* End .row */}
          <Pricing />
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
      </div>
      {/* /.pricing-section-three */}

      {/* 
			=============================================
				Feature Section Twenty Two
			============================================== 
			*/}
      <div className="fancy-feature-twentyTwo position-relative pt-170 pb-170 lg-pt-80 lg-pb-100">
        <div className="fancy-short-banner-eight">
          <div className="container">
            <Contact />
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-short-banner-eight */}

        {/* ^^^^^^^^^^^^^^^^^^^ Feedback Section Five ^^^^^^^^^^^^^^^^^^^^^^^ */}
        <div className="feedback-section-five pt-225 lg-pt-130">
          <div className="container">
            <div className="position-relative">
              <div className="row">
                <div className="col-lg-5 col-md-6 " data-aos="fade-right">
                  <div className="title-style-one text-center text-md-start mb-100 lg-mb-50">
                    <h2 className="main-title fw-normal tx-dark m0">
                      You’r gonna <span>love</span> us forever.
                    </h2>
                  </div>
                  {/* /.title-style-one */}
                </div>
              </div>
              {/* /.row */}
              <Testimonial />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.feedback-section-five */}

        <div className="shapes shape-three rounded-circle" />
        <div className="shapes shape-four rounded-circle" />
        <div className="shapes shape-five rounded-circle" />
        <div className="shapes shape-six rounded-circle" />
        <img
          src="/images/shape/shape_92.svg"
          alt="shape"
          className="lazy-img shapes shape-seven"
        />
        <img
          src="/images/shape/shape_93.svg"
          alt="shape"
          className="lazy-img shapes shape-eight"
        />
      </div>
      {/* /.fancy-feature-twentyTwo */}

      {/*
			=====================================================
				Blog Section Three
			=====================================================
			*/}
      <div className="blog-section-three mt-225 lg-mt-140">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5 col-md-6 col-sm-7">
              <div
                className="title-style-one text-center text-sm-start xs-mb-20"
                data-aos="fade-right"
              >
                <h2 className="main-title fw-normal tx-dark m0">
                  <span>Company</span> inside News.
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
            <div className="col-lg-5 col-md-6 col-sm-5 ms-auto text-center text-sm-end">
              <Link
                href="/blog/blog-v2"
                className="btn-thirteen fw-500 tran3s mb-20"
                data-aos="fade-left"
              >
                Go to Blog
              </Link>
            </div>
          </div>
          {/* /.row */}

          <div className="row gx-xxl-5 pt-60 lg-pt-10">
            <Blog />
          </div>
          {/* /.row */}
        </div>
      </div>
      {/* /.blog-section-three */}

      {/*
			=====================================================
				Fancy Short Banner Three
			=====================================================
			*/}
      <div className="fancy-short-banner-three bg position-relative pt-130 pb-110 mt-225 mb-10 lg-mt-140 lg-pt-80 lg-pb-50">
        <CallToActions />
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
        <img
          src="/images/assets/ils_03.svg"
          alt="illustration"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/assets/ils_04.svg"
          alt="illustration"
          className="lazy-img shapes shape-five"
        />
      </div>
      {/* /.fancy-short-banner-three */}

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-six theme-basic-footer position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/logo_01.png" alt="" width={95} />
                  </Link>
                </div>
              </div>
              {/* End .col-lg-2 */}

              <Footer />

              <div className="col-md-3 col-sm-6 mb-30">
                <h5 className="footer-title tx-dark fw-500">Our Address</h5>
                <p className="fs-17">
                  2190 Lojiho Terrace, Mirpur, Equal Licensed in 50 states.
                </p>
                <a
                  href="mailto:januinc@company.com"
                  className="email tran3s fs-17"
                >
                  januinc@company.com
                </a>
                <br />
                <a
                  href="tel:+7576994478"
                  className="mobile tran3s fs-20 mt-20 mb-30"
                >
                  +757 699-4478
                </a>
                <Social />
              </div>
              {/* End .col-md-3 */}
            </div>
            {/* End .row */}

            <div className="bottom-footer">
              <p className="copyright text-center m0">
                Copyright © {new Date().getFullYear()} {"  "}
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
      {/* /.footer-style-six */}
    </>
  );
};

export default SeoAgency;
