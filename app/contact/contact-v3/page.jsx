import Link from "next/link";

import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Footer2 from "@/components/footer/Footer2";
import NewsLetter from "@/components/footer/NewsLetter";
import Header2 from "@/components/header/Header2";
import BlockContact3 from "@/components/contact/BlockContact3";
import ContactForm3 from "@/components/contact/ContactForm3";
export const metadata = {
  title: "Contact v3 || Jano - Creative Multipurpose React NextJS Template",
};
const ContactV3 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header2 />
      {/* 
			=============================================
				Contact Section Three
			============================================== 
			*/}
      <div className="contact-section-three p-30">
        <div className="address-wrapper zn2 position-relative pt-180 lg-pt-150 mb-150 lg-mb-80">
          <div className="container">
            <div className="title-style-seven text-center" data-aos="fade-up">
              <h2 className="main-title fw-bold tx-dark">
                Get in
                <span className="position-relative d-inline-block">
                  Touch <img src="/images/shape/shape_96.svg" alt="shape" />
                </span>
              </h2>
            </div>
            {/* /.title-style-seven */}

            <div className="row">
              <div className="col-xxl-6 col-xl-7 m-auto">
                <p
                  className="mt-45 lg-mt-20 mb-70 lg-mb-30 fs-20 lh-lg text-center"
                  data-aos="fade-up"
                >
                  Want to get in touch? We’d love to hear from you. Here’s how
                  you can reach us.
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <BlockContact3 />
            </div>
          </div>
          {/* End container */}
        </div>
        {/* /.address-wrapper */}

        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div
                className="title-style-one text-center mb-60 lg-mb-40"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-500 tx-dark m0">
                  Drop us a line for any kind of info.
                </h2>
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xxl-11 m-auto">
              <div className="form-style-four" data-aos="fade-up">
                <ContactForm3 />
              </div>
              {/* /.form-style-four */}
            </div>
          </div>
        </div>
      </div>
      {/* /.contact-section-three */}
      {/*
			=====================================================
				Fancy Short Banner Ten
			=====================================================
			*/}
      <div
        className="fancy-short-banner-ten position-relative mt-225 lg-mt-100"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper position-relative pt-50 pb-65 lg-pt-40 lg-pb-50">
            <div className="row">
              <div className="col-lg-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-5">
                    <h2 className="m0 text-white fw-bold md-pb-20">
                      Sign up for best web hosting today.
                    </h2>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-xl-6 col-lg-7">
                    <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-end">
                      <Link
                        href="/contact/contact-v3"
                        className="btn-line fw-500 tran3s position-relative me-sm-5"
                      >
                        Chat with a an Expert
                      </Link>
                      <Link
                        href="/contact/contact-v3"
                        className="btn-solid fw-500 tran3s"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                  {/* End .col-6 */}
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
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

export default ContactV3;
