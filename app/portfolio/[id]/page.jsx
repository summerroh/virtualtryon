import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import SocialShare from "@/components/portfolio/portfolio-details/SocialShare";
import ProjectDetails from "@/components/portfolio/portfolio-details/ProjectDetails";
import ProjectSlide from "@/components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "@/components/portfolio/CallToAction";
import PortfolioGallery from "@/components/portfolio/portfolio-details/PortfolioGallery";

import portfolioData from "@/data/portfolio";
import PortfolioDetailsTitle from "@/components/portfolio/portfolio-details/PortfolioDetailsTitle";
export const metadata = {
  title:
    "Portfolio Details || Jano - Creative Multipurpose React NextJS Template",
};
const DynamicPortfolioDetails = ({ params }) => {
  const id = params.id;
  const portfolio =
    portfolioData.find((item) => item.id == id) || portfolioData[0];

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
      <PortfolioDetailsTitle portfolio={portfolio} />

      {/* 
			=============================================
				Portfolio Details Two
			============================================== 
			*/}
      <div className="portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="fade-right">
                <ProjectSlide slide={portfolio} />
                {/* /#gallery-carousel */}
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4" data-aos="fade-left">
                <div className="sidebar ms-xl-5">
                  <h3 className="mb-20">About</h3>
                  <p className="border-bottom pb-40 mb-35 lg-pb-20">
                    The Internet advertising famous today behaved lately.
                  </p>
                  <div className="row">
                    <ProjectDetails details={portfolio} />
                  </div>
                  {/* End .row */}

                  <SocialShare />
                </div>
              </div>
              {/* End col-lg-4 */}
            </div>
            {/* End .row */}

            <div className="col-xl-9  mt-120 lg-mt-80">
              <div
                className="title-style-twelve mb-45 lg-mb-30"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  Overview
                </div>
                <h2 className="main-title fw-500 tx-dark">About Rodpen</h2>
              </div>
              {/* /.title-style-twelve */}
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullaum laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit volupta velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p data-aos="fade-up">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum magna quis
                nostured.
              </p>
              <div className="row">
                <div className="col-xl-8">
                  <div
                    className="title-style-twelve mb-45 pt-75 lg-pt-40 lg-mb-30"
                    data-aos="fade-up"
                  >
                    <div className="sc-title fst-italic position-relative">
                      Work Proccess
                    </div>
                    <h2 className="main-title fw-500 tx-dark">
                      Find out the design solution.
                    </h2>
                  </div>
                  {/* /.title-style-twelve */}
                </div>
              </div>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p data-aos="fade-up">
                Enim eu turpis egestas pretium aenean pharetra. Dui accumsan sit
                amet nulla facilisi morbi tempus iaculis. Eu ultrices vitae
                auctor eu augue. Sed turpis tincidunt id aliquet risus Purus in
                massa tempor nec feugiat nisl pretium fusce. Feugiat vivamus at
                augue eget arcu dictum. Gravida quis blandit turpis cursus in
                hac habitasse platea dictumst.
              </p>
              <div className="row">
                <PortfolioGallery />
              </div>

              <div
                className="title-style-twelve mb-45 mt-120 lg-mb-30 lg-mt-80"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  Work Proccess
                </div>
                <h2 className="main-title fw-500 tx-dark">Final Result</h2>
              </div>
              {/* /.title-style-twelve */}

              <p data-aos="fade-up">
                Content creators and human resources personnel are able to
                seamlessly update the website through graphical interfaces, and
                the site simply rebuilds itself along with search engine indexes
                as the OpenWeb team continues to create.
              </p>
              <p data-aos="fade-up">
                Enim eu turpis egestas pretium aenean pharetra. Dui accumsan sit
                amet nulla facilisi mor tempu iaculis. Eu ultrices vitae auctor
                eu augue. Sed turpis tincidunt id aliquet risus Purus in massa
                tempor nec feugiat nisl pretium fusce. Feugiat vivamus at augue
                eget arcu dictum. Gravida quis blandit turpis cursus in hac
                habitasse platea dictumst.
              </p>
            </div>
            {/* End col-xl-9 */}

            <div className="project-pagination m-auto pt-100 lg-pt-50 sm-pt-10">
              <div className="row gx-xxl-5">
                <div className="col-sm-6">
                  <div
                    className="arrow-block position-relative zn2 mt-20"
                    data-aos="fade-right"
                  >
                    <img
                      src="/images/media/img_92.jpg"
                      alt="media"
                      className="lazy-img w-100"
                    />
                    <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                      <div className="text-white fw-500 pg-title">
                        Prev Project
                      </div>
                      <a
                        href="#"
                        className="arrow rounded-circle text-center tran3s"
                      >
                        <i className="bi bi-arrow-left" />
                      </a>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.arrow-block */}
                </div>
                {/* End .col-6 */}

                <div className="col-sm-6">
                  <div
                    className="arrow-block position-relative zn2 mt-20"
                    data-aos="fade-left"
                  >
                    <img
                      src="/images/media/img_93.jpg"
                      alt="media"
                      className="lazy-img w-100"
                    />
                    <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                      <div className="text-white fw-500 pg-title">
                        Next Project
                      </div>
                      <a
                        href="#"
                        className="arrow rounded-circle text-center tran3s"
                      >
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.arrow-block */}
                </div>
                {/* End .col-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* /.project-pagination */}
          </div>
          {/* End .container */}
        </div>
        {/* /.project-desctiption */}
      </div>
      {/* /.project-details */}

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <CallToAction />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default DynamicPortfolioDetails;
