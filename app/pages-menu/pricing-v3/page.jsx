import Link from "next/link";

import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Footer2 from "@/components/footer/Footer2";
import NewsLetter from "@/components/footer/NewsLetter";
import Header2 from "@/components/header/Header2";
import CallToActions from "@/components/feature-web-hosting/CallToActions";
import Image from "next/image";
import Pricing3 from "@/components/pricing/Pricing3";
import CompareTable from "@/components/pricing/CompareTable";
import Faq3 from "@/components/faqs/Faq3";
export const metadata = {
  title: "Pricing V3 || Jano - Creative Multipurpose React NextJS Template",
};
const PricingV3 = () => {
  return (
    <>
      {/* <!--  =============================================
      Theme Header2 Menu
      ============================================== 	--> */}
      <Header2 />

      {/* 
        =============================================
        Pricing Section Four
        ============================================== 
        */}
      <div className="pricing-section-four pt-225 lg-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-md-9 m-auto">
              <div className="title-style-seven text-center" data-aos="fade-up">
                <h2 className="main-title fw-bold tx-dark">
                  Solo, Agency or Team? We’ve got you{" "}
                  <span className="position-relative d-inline-block">
                    covered{" "}
                    <Image
                      width={305}
                      height={104}
                      src="/images/shape/shape_96.svg"
                      alt="shape"
                    />
                  </span>
                </h2>
              </div>
              {/* /.title-style-seven */}
            </div>
          </div>
        </div>
        {/* End container */}
        <div className="container pricing-table-area-four pt-60 lg-pt-30">
          <div className="row">
            <Pricing3 />
          </div>
        </div>{" "}
        {/* /.pricing-table-area-four */}
        <div className="container">
          <div className="text-center mt-70 lg-mt-40" data-aos="fade-up">
            <div className="d-inline-block consult-text fs-18 fw-500 tx-dark">
              Not sure which website hosting plan is right for you? We can help.{" "}
              <Link
                href="/contact/contact-v3"
                className="fw-normal text-decoration-underline"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>{" "}
        {/* /.container */}
      </div>
      {/* /.pricing-section-four */}

      {/* 
			=============================================
				Hosting Compare Table
			============================================== 
			*/}
      <div className="hosting-compare-table mt-150 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-md-9 m-auto">
              <div className="title-style-seven text-center" data-aos="fade-up">
                <h2 className="main-title fw-bold tx-dark">
                  Compare our{" "}
                  <span className="position-relative d-inline-block">
                    price{" "}
                    <Image
                      width={193}
                      height={66}
                      src="/images/shape/shape_96.svg"
                      alt="icon"
                    />
                  </span>{" "}
                  <br /> with top hsoting provider
                </h2>
              </div>
              {/* /.title-style-seven */}
            </div>
          </div>
          {/* End .row */}

          <div
            className="compare-table border-bottom pb-100 lg-pb-40 mt-80 lg-mt-40"
            data-aos="fade-up"
          >
            <div className="table-responsive">
              <CompareTable />
            </div>
          </div>
        </div>
      </div>
      {/* /.hosting-compare-table */}

      {/* 
			=============================================
				Feature Section Twenty Five
			============================================== 
			*/}
      <div className="fancy-feature-twentyFive mt-140 lg-mt-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 m-auto" data-aos="fade-up">
              <div className="title-style-seven text-center pb-120 lg-pb-50">
                <h2 className="main-title fw-bold tx-dark">
                  Got questions? <br /> Well, we&lsquo;ve got{" "}
                  <span className="position-relative d-inline-block">
                    answers{" "}
                    <Image
                      width={305}
                      height={110}
                      src="/images/shape/shape_99.svg"
                      alt=""
                    />
                  </span>
                </h2>
              </div>{" "}
              {/* /.title-style-seven */}
            </div>
            {/* End col-xl-9 */}

            <div className="col-xl-9 col-lg-10 m-auto" data-aos="fade-up">
              <Faq3 />
              {/* /.accordion-style-two */}
              <div className="text-center mt-80 lg-mt-50" data-aos="fade-up">
                <h3 className="fw-bold tx-dark mb-30">
                  Didn’t get your answer?
                </h3>
                <Link
                  href="/contact/contact-v3"
                  className="btn-fourteen fw-500 tran3s"
                >
                  Submit your question
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
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

export default PricingV3;
