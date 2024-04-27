import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";

import Faq from "@/components/home-page/home-2/Faq";

import Link from "next/link";
import ProgressBar from "@/components/service-details/ProgressBar";
import Social from "@/components/service-details/Social";
export const metadata = {
  title:
    "Service Details || Jano - Creative Multipurpose React NextJS Template",
};
const PortfolioV1 = () => {
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
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Service Details
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  We Provide Qulaity Services.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>
      {/* 
			=============================================
				Service Details
			============================================== 
			*/}
      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-30">Web Design.</h2>
                <p className="text-lg tx-dark">
                  Commonly used in the graphic, prit quis due &amp; publishing
                  indust for previewing lightly visual mockups.
                </p>
                <img
                  src="/images/media/img_95.jpg"
                  alt="media"
                  className="main-img-meta"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas interdum, orci at dapibus, massa ante pharetra
                  tellus. Maecenas interdum, orci at euismod dapibus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  interdum.
                </p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Our Goal</h4>
                      <ul className="style-none list-item md-mb-40">
                        <li>Various analysis options.</li>
                        <li>Page Load (time, number of requests).</li>
                        <li>Big data analysis.</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">The Challange</h4>
                      <p className="pe-xxl-5">
                        Evernote Web offers a complete lineup of features from
                        any major Maecena quis interdum, orci at euis dapibus,
                        mass ante pharetra tellus done.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas interdum, orci at dapibus, massa ante pharetra
                  tellus. Maecenas interdum, orci at euismod dapibus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  interdum.
                </p>
                <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                  Any Questions find here.
                </h3>
                <Faq />
              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}

            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
                <div className="service-category mb-40">
                  <h4 className="tx-dark mb-15">Services</h4>
                  <ul className="style-none">
                    <li className="current-page">
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Mockup</a>
                    </li>
                    <li>
                      <a href="#">Print Design</a>
                    </li>
                    <li>
                      <a href="#">Logo</a>
                    </li>
                    <li>
                      <a href="#">Mobile Application</a>
                    </li>
                    <li>
                      <a href="#">Branding</a>
                    </li>
                    <li>
                      <a href="#">Illusutration</a>
                    </li>
                  </ul>
                </div>
                {/* /.service-category */}

                <div className="sidebar-quote mb-50">
                  <img
                    src="/images/icon/icon_150.svg"
                    alt="icon"
                    className="m-auto"
                  />
                  <p className="fw-500">
                    Evernote Web offers a complete lineup major linup browser
                  </p>
                  <div className="name">- Rashed Kabir</div>
                </div>
                {/* /.sidebar-quote */}
                <h4 className="tx-dark mb-15">Share it.</h4>
                <Social />
              </div>
              {/* /.service-sidebar */}
            </div>
          </div>
        </div>
      </div>
      {/* /.service-details */}
      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

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
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}
      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV1;
