import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import Blog3 from "@/components/blog/Blog3";
import Pagination from "@/components/blog/Pagination";
export const metadata = {
  title: "Grid Layout || Jano - Creative Multipurpose React NextJS Template",
};
const GridLayout = () => {
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
            <div
              className="col-xxl-7 col-lg-6 text-center m-auto"
              data-aos="fade-right"
            >
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Blog
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Check our inside News
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-150 lg-pb-60">
            <div className="row gx-xxl-5">
              <Blog3 />
            </div>
            {/* End .row */}
            <div className="page-pagination-one d-flex justify-content-center text-center pt-15">
              <Pagination />
            </div>
            {/* End pagination */}
          </div>
          {/* End border-bottom */}
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default GridLayout;
