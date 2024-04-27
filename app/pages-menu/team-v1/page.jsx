import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import Team1 from "@/components/team/Team1";
import CallToAction from "@/components/team/CallToAction";
export const metadata = {
  title: "Team V1 || Jano - Creative Multipurpose React NextJS Template",
};
const TeamV1 = () => {
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
                  Our Team
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  World most qualified team member.
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
			=====================================================
				Team Section Two
			=====================================================
			*/}
      <div className="team-section-two mt-20">
        <div className="container">
          <div className="wrapper border-bottom pb-120 lg-pb-80 position-relative">
            <div className="row">
              <Team1 />
            </div>
            {/* /.row */}

            <CallToAction />
            {/* End  call to action*/}
          </div>
          {/* /.wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.team-section-two */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default TeamV1;
