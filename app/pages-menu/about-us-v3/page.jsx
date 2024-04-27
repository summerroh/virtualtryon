import Image from "next/image";

import Footer from "@/components/home-page/home-10/Footer";
import Header from "@/components/home-page/home-10/Header";
import Testimonial from "@/components/home-page/home-10/Testimonial";
import CallToActions from "@/components/services/CallToActions";
import Team5 from "@/components/team/Team5";
import Block from "@/components/about/Block";
import Counter2 from "@/components/about/Counter2";
import AboutCeo from "@/components/about/AboutCeo";
export const metadata = {
  title: "AboutUs V3 || Jano - Creative Multipurpose React NextJS Template",
};
const AboutUsV3 = () => {
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
              <h2 className="main-title tx-dark fw-bold">About us</h2>
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
        Feature Section Two
        ============================================== 
        */}
      <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <AboutCeo />
          </div>
        </div>{" "}
        {/* /.container */}
        <div className="container">
          <div className="row justify-content-center pt-60 md-pt-40">
            <Counter2 />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-two */}

      {/* 
        =============================================
        Feature Section Fifty Four
        ============================================== 
        */}
      <div className="fancy-feature-fiftyFour p-30 mt-150 lg-mt-90">
        <div className="bg-wrapper position-relative zn2 pt-140 lg-pt-60 pb-140 lg-pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="title-style-one mt-30">
                  <div className="sc-title text-uppercase">Why us?</div>
                  <h2 className="main-title fw-bold tx-dark">
                    Why <span>choose</span> Jano.
                  </h2>
                </div>{" "}
                {/* /.title-style-one */}
                <p className="text-lg mt-40 lg-mt-20">
                  We helping our client to fullfill their needs with our expert.
                </p>
                <Image
                  width={73}
                  height={75}
                  src="/images/shape/shape_179.svg"
                  alt="icon"
                  className="lazy-img d-none d-lg-block mt-80"
                />
              </div>
              {/* End .col */}

              <div className="col-lg-7 ms-auto">
                <div className="row gx-xxl-5">
                  <Block />
                </div>
              </div>
            </div>
          </div>
          <Image
            width={10}
            height={10}
            src="/images/shape/shape_11.svg"
            alt="icon"
            className="lazy-img shapes shape-one"
          />
          <Image
            width={18}
            height={16}
            src="/images/shape/shape_13.svg"
            alt="icon"
            className="lazy-img shapes shape-two"
          />
          <Image
            width={8}
            height={8}
            src="/images/shape/shape_10.svg"
            alt="icon"
            className="lazy-img shapes shape-three"
          />
          <Image
            width={10}
            height={10}
            src="/images/shape/shape_12.svg"
            alt="icon"
            className="lazy-img shapes shape-four"
          />
        </div>{" "}
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-fiftyFour */}

      {/*
        =====================================================
        Team Section Four
        =====================================================
        */}
      <div className="team-section-four mt-150 lg-mt-90">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-md-7" data-aos="fade-right">
              <div className="title-style-one text-center text-md-start">
                <div className="sc-title text-uppercase">OUR TEAM</div>
                <h2 className="main-title fw-bold tx-dark m0">
                  We’ve talented expert to help you
                </h2>
              </div>{" "}
              {/* /.title-style-one */}
            </div>
            <div
              className="col-xxl-6 col-md-5 text-center text-md-end"
              data-aos="fade-left"
            >
              <a href="#" className="btn-one fw-500 sm-mt-30">
                View full team
              </a>
            </div>
          </div>{" "}
          {/* /.row */}
          <div className="wrapper border-bottom pt-80 lg-pt-50">
            <div className="row gx-xxl-5">
              <Team5 />
            </div>
            {/* /.row */}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.team-section-four */}

      {/*
        =====================================================
        Feedback Section One
        =====================================================
        */}
      <div
        className="feedback-section-one position-relative p-30 mt-200 lg-mt-130 "
        data-aos="fade-up"
      >
        <div className="bg-wrapper position-relative pt-150 pb-180 lg-pt-100 lg-pb-120">
          <img
            src="/images/shape/shape_14.svg"
            alt="img"
            className="lazy-img shapes shape-one"
          />
          <div className="shapes shape-two" />
          <div className="shapes shape-three" />
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

export default AboutUsV3;
