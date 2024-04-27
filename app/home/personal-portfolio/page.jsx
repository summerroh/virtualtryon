import Link from "next/link";

import Awards from "@/components/home-page/home-9/Awards";
import Block from "@/components/home-page/home-9/Block";
import ContactForm from "@/components/home-page/home-9/ContactForm";
import Counter from "@/components/home-page/home-9/Counter";
import Education from "@/components/home-page/home-9/Education";
import Header from "@/components/home-page/home-9/Header";
import Hero from "@/components/home-page/home-9/Hero";
import Portfolio from "@/components/home-page/home-9/Portfolio";
import ProjectBanner from "@/components/home-page/home-9/ProjectBanner";
import Sidebar from "@/components/home-page/home-9/Sidebar";
import Skills from "@/components/home-page/home-9/Skills";
import Testimonial from "@/components/home-page/home-9/Testimonial";
import Tools from "@/components/home-page/home-9/Tools";
import Social from "@/components/home-page/home-9/Social";
export const metadata = {
  title:
    "Persoanl Portfolio || Jano - Creative Multipurpose React NextJS Template",
};
const PersonalPortfolio = () => {
  return (
    <>
      {/* <!-- 
        =============================================
        Sidebar Nav
        ============================================== 
        --> */}
      <Sidebar />

      {/* <!--  =============================================
        Theme Header4 Menu
        ============================================== 	--> */}
      <Header />

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      <Hero />

      {/* 
			=============================================
				Feature Section Twelve
			============================================== 
			*/}
      <div
        className="fancy-feature-twelve position-relative mt-300 xl-mt-200 md-mt-120"
        id="s2"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-2 col-lg-3 text-center"
              data-aos="fade-right"
            >
              <div className="main-count">
                0<span className="counter">7</span>+
              </div>
              <h2 className="title fw-500 tx-dark">
                Years Experience in field
              </h2>
            </div>
          </div>
          {/* End .row */}

          <div className="block-wrapper md-mt-10">
            <div className="row gx-xxl-5">
              <Block />
            </div>
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/* 
			=============================================
				Portfolio Gallery One
			============================================== 
			*/}
      <div
        className="portfolio-gallery-one position-relative mt-150 pt-100 xl-pt-50 md-mt-80"
        id="s3"
        data-aos="fade-up"
      >
        <img
          src="/images/shape/shape_60.svg"
          alt="shape media"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_61.svg"
          alt="shape media"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_62.svg"
          alt="shape media"
          className="lazy-img shapes shape-three"
        />
        <Portfolio />
        {/* /.container */}
      </div>

      {/* 
			=============================================
				Feature Section Thirteen
			============================================== 
			*/}
      <div
        className="fancy-feature-thirteen position-relative mt-250 mb-150 lg-mt-120 lg-mb-100"
        id="s4"
      >
        <div className="fancy-text">Creative</div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="title-style-five pe-xxl-5 mb-110 lg-mb-70"
                data-aos="fade-right"
              >
                <h2 className="main-title font-recoleta fw-500 tx-dark">
                  My
                  <span className="d-inline-block position-relative">
                    Expereince
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#FFDBDB" }}
                    />
                  </span>
                  &amp; skills.
                </h2>
              </div>
              {/* /.title-style-five */}
            </div>
          </div>
          {/* End skill */}

          <div className="row">
            <div
              className="col-xxl-5 col-lg-6 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="block-title fw-500 tx-dark pb-30 lg-pb-10">
                Skills
              </h3>
              <Skills />
            </div>
            <div
              className="col-xl-5 col-lg-6 ms-auto "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="block-title fw-500 tx-dark pb-20 md-mt-50 md-pb-10">
                Award
              </h3>
              <Awards />
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-3 col-sm-6 " data-aos="fade-up">
              <h3 className="block-title fw-500 tx-dark pb-30 mt-150 md-pb-20 md-mt-60">
                Education
              </h3>
              <Education />
            </div>
            {/* End .col */}

            <div
              className="col-lg-3 col-sm-6 ps-xl-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="block-title fw-500 tx-dark pb-30 mt-150 md-pb-20 md-mt-60">
                Tools
              </h3>
              <Tools />
            </div>
            {/* End tools */}

            <div
              className="col-lg-6 col-md-7 col-sm-10 m-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <ProjectBanner />
              {/* /.img-meta */}
            </div>
          </div>
        </div>
      </div>

      {/* 
			=============================================
				Counter Section One
			============================================== 
			*/}
      <div className="p-30">
        <div className="counter-section-one position-relative pt-80 pb-100 lg-pt-50 lg-pb-60">
          <img
            src="/images/shape/shape_64.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <img
            src="/images/shape/shape_65.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
          <img
            src="/images/shape/shape_66.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <img
            src="/images/shape/shape_67.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
          <div className="container">
            <div className="row">
              <Counter />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.counter-section-one */}
      </div>

      {/*
			=====================================================
			Feedback Section Four
			=====================================================
			*/}
      <div className="feedback-section-four position-relative mt-150 lg-mt-120">
        <div className="container">
          <div
            className="title-style-five text-center mb-75 lg-mb-40"
            data-aos="fade-up"
          >
            <div className="sc-title text-uppercase">TESTIMONIALS</div>
            <h2 className="main-title font-recoleta fw-500 tx-dark">
              Client
              <span className="d-inline-block position-relative">
                Feedback
                <span
                  className="mark-bg"
                  style={{ backgroundColor: "#FFE9B0" }}
                />
              </span>
            </h2>
          </div>
          {/* /.title-style-five */}
        </div>
        {/* End .container */}

        <div className="slider-wrapper p-30">
          <div className="feedback_slider_four">
            <Testimonial />
          </div>
          {/* /.feedback_slider_three */}
        </div>
        {/* /.slider-wrapper */}
      </div>

      {/*
			=====================================================
				Fancy Short Banner Five
			=====================================================
			*/}
      <div className="fancy-short-banner-five p-30 mt-110" id="s5">
        <div className="bg-wrapper position-relative pt-180 pb-140 lg-pt-80 lg-pb-80">
          <img
            src="/images/shape/shape_68.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <img
            src="/images/shape/shape_69.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
          <img
            src="/images/shape/shape_70.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <div className="r-shape-one position-absolute" />
          <div className="container">
            <div
              className="innner-content bg-white position-relative"
              data-aos="fade-up"
            >
              <div className="r-shape-two rounded-circle position-absolute" />
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2 className="title-xl font-recoleta fw-500 tx-dark">
                    Let’s
                    <span className="d-inline-block position-relative">
                      Connect
                    </span>
                  </h2>
                  <p className="text-lg mt-35 md-mt-20">
                    Growing up in poverty, children face tough challenges.
                  </p>
                </div>
                <div className="col-lg-6 ms-auto">
                  <div className="form-style-one md-mt-40">
                    <ContactForm />
                  </div>
                  {/* /.form-style-one */}
                </div>
              </div>
            </div>
            {/* /.innner-content */}
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>

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
                  <img src="/images/logo/logo_04.png" alt="" width={77} />
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
                </span>
                <span>support@jano.com</span>
              </a>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 order-lg-2">
              <Social />
            </div>
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </div>
    </>
  );
};

export default PersonalPortfolio;
