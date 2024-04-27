import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import FaqAccordion from "@/components/faqs/FaqAccordion";
import Link from "next/link";
export const metadata = {
  title: "Faq's || Jano - Creative Multipurpose React NextJS Template",
};
const Faq = () => {
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
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  FAQ
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Questions &amp; Answers
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* 
			=============================================
				Feature Section Thirty Three
			============================================== 
			*/}
      <div className="fancy-feature-thirtyThree mt-100 lg-mt-80">
        <div className="container">
          <div className="border-bottom pb-100 lg-pb-70">
            <div className="bg-wrapper position-relative" data-aos="fade-up">
              <FaqAccordion />
              <img
                src="/images/shape/shape_133.svg"
                alt="shape"
                className="lazy-img shapes shape-one"
              />
            </div>
            {/* /.bg-wrapper */}

            <div className="text-center  mt-80 lg-mt-50" data-aos="fade-up">
              <h3 className="fw-bold tx-dark mb-30">Didn’t get your answer?</h3>
              <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-thirtyThree */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default Faq;
