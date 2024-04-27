import Link from "next/link";

import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Footer2 from "@/components/footer/Footer2";
import NewsLetter from "@/components/footer/NewsLetter";
import Header2 from "@/components/header/Header2";
import CallToActions from "@/components/feature-web-hosting/CallToActions";
import Image from "next/image";
import IncludedPlan from "@/components/home-page/home-2/IncludedPlan";
import Features from "@/components/feature-web-hosting/Features";
import CountryList from "@/components/feature-web-hosting/CountryList";
export const metadata = {
  title: "Features V2 || Jano - Creative Multipurpose React NextJS Template",
};
const FeaturesV2 = () => {
  return (
    <>
      {/* <!--  =============================================
      Theme Header2 Menu
      ============================================== 	--> */}
      <Header2 />
      {/* 
        =============================================
        Feature Section Fifty Six
        ============================================== 
        */}
      <div className="fancy-feature-fiftySix pt-225 lg-pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="title-style-seven text-center text-lg-start"
                data-aos="fade-right"
              >
                <h2 className="main-title fw-bold tx-dark">
                  Premium{" "}
                  <span className="position-relative d-inline-block">
                    Hosting{" "}
                    <Image
                      width={269}
                      height={122}
                      src="/images/shape/shape_96.svg"
                      alt="shape"
                    />
                  </span>
                  Technologies
                </h2>
              </div>
              {/* /.title-style-seven */}
            </div>
            {/* End .col-lg-6 */}

            <div className="col-xl-5 col-lg-6 ms-auto" data-aos="fade-left">
              <p className="m0 fs-20 lh-lg text-center text-lg-start md-pt-20">
                Our vision as a hosting provider is to provide you with the
                fastest speed, best security, easiest scalability and
                exceptional support for best web hosting experience that you
                have ever had.
              </p>
            </div>
          </div>
        </div>
        {/* End .contianer */}

        <div className="p-30 mt-90 lg-mt-50">
          <div className="bg-wrapper pt-90 lg-pt-50 pb-130 lg-pb-80">
            <div className="container">
              <div className="row gx-xxl-5">
                <Features />
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-feature-fiftySix */}

      {/* 
        =============================================
        Feature Section Twenty Three
        ============================================== 
        */}
      <div className="fancy-feature-twentyThree mt-130 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 m-auto">
              <div
                className="title-style-seven text-center pb-20"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-bold tx-dark">
                  <span className="position-relative d-inline-block">
                    Blazing
                    <Image
                      width={269}
                      height={122}
                      style={{ objectFit: "contain" }}
                      src="/images/shape/shape_184.svg"
                      alt="shape"
                    />
                  </span>{" "}
                  Technology &amp; Great security
                </h2>
              </div>
              {/* /.title-style-seven */}
            </div>
          </div>
          {/* End .row */}

          <div className="row gx-xl-5">
            <IncludedPlan />
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-twentyThree */}

      {/* 
      =============================================
      Feature Section Twenty Four
      ============================================== 
      */}
      <div className="fancy-feature-twentyFour p-30 mt-130 lg-mt-80">
        <div
          className="bg-wrapper pt-100 lg-pt-80 pb-110 lg-pb-70"
          style={{ background: "#F1FCFF" }}
        >
          <div className="container">
            <div className="block-style-four">
              <div className="row align-items-center">
                <div
                  className="col-xl-5 col-lg-6 order-lg-last"
                  data-aos="fade-left"
                >
                  <div className="title-style-eight">
                    <div className="sc-title text-uppercase">
                      TRSUTED SECURITY
                    </div>
                    <h2 className="main-title tx-dark fw-bold">
                      Security <br /> you can{" "}
                      <span className="d-inline-block position-relative">
                        trust
                      </span>{" "}
                      blindly.
                    </h2>
                  </div>
                  <p className="fs-20 lh-lg mt-35 mb-50 lg-mt-20 lg-mb-30">
                    Lorem ipsum began as scrambled, Latin derived Cicero&apos;s
                    1st-century BC text De Finibus ubiquitous lorem ipsum
                    passage.
                  </p>
                  <Link
                    href="/pages-menu/about-us-v1"
                    className="btn-fifteen fw-500 position-relative d-inline-flex align-items-center"
                  >
                    <span>Click here to learn more</span>{" "}
                    <Image
                      width={23}
                      height={14}
                      src="/images/icon/icon_69.svg"
                      alt="arrow icon"
                      className="ms-2"
                    />
                  </Link>
                </div>
                <div
                  className="col-xl-7 col-lg-6 col-md-8 m-auto order-lg-first"
                  data-aos="fade-right"
                >
                  <div className="illustration-holder md-mt-60">
                    <Image
                      width={660}
                      height={561}
                      style={{ objectFit: "contain" }}
                      src="/images/assets/ils_06.png"
                      alt="illustration"
                      className="lazy-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /.block-style-four */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-twentyFour */}

      {/* 
		=============================================
		Feature Section Fifty Seven
		============================================== 
		*/}
      <div className="fancy-feature-fiftySeven mt-120 lg-mt-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 m-auto">
              <div
                className="title-style-seven text-center pb-20"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-bold tx-dark">
                  7 Servers, Pick{" "}
                  <span className="position-relative d-inline-block">
                    one!{" "}
                    <Image
                      width={165}
                      height={99}
                      src="/images/shape/shape_185.svg"
                      alt="shape"
                    />
                  </span>
                </h2>
                <p className="pt-20 fs-20">
                  You choose which Data Center you&apos;re provisioned in
                </p>
              </div>{" "}
              {/* /.title-style-seven */}
            </div>
          </div>
          {/* End .row */}

          <div className="text-center mt-40 sm-mt-20" data-aos="fade-up">
            <div className="server-location position-relative d-inline-block">
              <CountryList />
              <Image
                width={1028}
                height={500}
                layout="responsive"
                src="/images/assets/bg-18.png"
                alt="bg"
                className="lazy-img"
              />
            </div>
          </div>
          {/* End div */}

          <div className="row">
            <div
              className="col-xxl-10 col-lg-11 m-auto text-center"
              data-aos="fade-up"
            >
              <p className="fs-20 mt-45 mb-50">
                When creating a hosting account, you can choose where your
                website is hosted by selecting where your hosting account is
                provisioned. We have data centers in Phoenix, Chicago, Toronto,
                Montreal and Amsterdam. You will enjoy all of our hosting
                platform benefits such as scaling, speed, security, and
                eco-friendly technologies regardless of which data center you
                choose.
              </p>
              <Link
                href="/pages-menu/about-us-v1"
                className="btn-fifteen fw-500 position-relative"
              >
                <span>Learn more about our servers</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-fiftySeven */}

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
                    <Image
                      width={95}
                      height={30}
                      src="/images/logo/logo_01.png"
                      alt="brand"
                    />
                  </Link>
                </div>
              </div>
              {/* End .col */}

              <Footer2 />

              <div className="col-xl-4 col-lg-5 mb-30 form-widget">
                <h5 className="footer-title tx-dark fw-normal">Newslettert</h5>
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
  );
};

export default FeaturesV2;
