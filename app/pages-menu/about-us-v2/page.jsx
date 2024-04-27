import Header5 from "@/components/header/Header5";
import Quote from "@/components/home-page/home-5/Quote";
import About from "@/components/home-page/home-5/about";
import Testimonial from "@/components/home-page/home-5/Testimonial";
import Blog from "@/components/home-page/home-5/Blog";
import Footer from "@/components/home-page/home-5/footer";
import Team4 from "@/components/team/Team4";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "About Us v2 || Jano - Creative Multipurpose React NextJS Template",
};
const RealEstate = () => {
  return (
    <>
      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header5 />

      {/* 
        =============================================
        Theme Inner Banner
        ============================================== 
        */}
      <div className="inner-banner-one text-center">
        <div className="container">
          <h2 className="title fw-500 tx-dark">About Us</h2>
        </div>
      </div>
      {/* /.inner-banner-one */}

      {/* 
        =============================================
        Feature Section Forty Six
        ============================================== 
        */}
      <div className="fancy-feature-fortySix position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-20 pb-180 lg-pt-20 md-pb-130">
            <Quote />
            {/* /.quote-wrapper */}

            <div className="shapes shape-two" />

            <img
              src="/images/assets/sticker_02.png"
              alt="sticker"
              className="lazy-img shapes shape-four"
            />
            <div className="shapes shape-five" />
            <div className="shapes shape-six" />
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Forty Eight
        ============================================== 
        */}
      <div className="fancy-feature-fortyEight position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
            <About />
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/*
        =====================================================
        Team Section Three
        =====================================================
        */}
      <div className="team-section-three position-relative pt-40 md-pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xxl-8 col-md-7 col-sm-9 m-auto"
              data-aos="fade-up"
            >
              <div className="title-style-five text-center pb-50 lg-pb-20">
                <h2 className="main-title fw-500 tx-dark">
                  We’ve talented expert to help you
                </h2>
              </div>
              {/* /.title-style-five */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <div className="pe-3 ps-3 ps-xxl-5 pe-xxl-5">
          <div className="row">
            <Team4 />
          </div>
        </div>
        <div className="line-bg-wrapper" />
      </div>
      {/* /.team-section-three */}

      {/*
        =====================================================
        Feedback Section Fourteen
        =====================================================
        */}
      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pt-250 pb-180 lg-pt-120 lg-pb-80">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h2 className="main-title fw-500 tx-dark">
                    Check our client lovely words.
                  </h2>
                </div>
                {/* /.title-style-five */}
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                  <div className="feedback_slider_eleven">
                    <Testimonial />
                  </div>
                  {/* /.feedback_slider_eleven */}
                </div>
              </div>
              {/* End .col-md-6 */}

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25"
                  data-aos="fade-left"
                >
                  <Image
                    width={500}
                    height={592}
                    layout="responsive"
                    src="/images/media/img_84.jpg"
                    alt="shape"
                    className="lazy-img ms-auto"
                  />

                  <div className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <strong className="fw-500">4.8</strong>
                    <span>avg rating</span>
                  </div>
                  {/* /.rating-box */}

                  <img
                    src="/images/shape/shape_163.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                  />
                  <img
                    src="/images/shape/shape_168.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_169.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
      </div>

      {/* 
        =============================================
        Blog Section Six
        ============================================== 
        */}
      <div className="blog-section-six position-relative zn2 pt-150 pb-200 lg-pt-90 lg-pb-100">
        <div className="container">
          <div className="position-relative">
            <div className="title-style-five text-center text-sm-start mb-30 lg-mb-10">
              <h2 className="main-title fw-500 tx-dark">Our Blog</h2>
            </div>
            {/* /.title-style-five */}

            <div className="row gx-xxl-5">
              <Blog />
            </div>
            {/* End .row */}

            <div className="btn-holder text-center">
              <div className="btn-eighteen position-relative d-inline-block tx-dark">
                <Link href="/blog/blog-v1" className="fw-500 tran3s">
                  Check our all news <i className="fa-solid fa-angle-right" />
                </Link>
              </div>
            </div>
            {/* End btn-holder */}
          </div>
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_163.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>

      {/* <!--
        =====================================================
        Footer
        =====================================================
        --> */}
      <Footer />
    </>
  );
};

export default RealEstate;
