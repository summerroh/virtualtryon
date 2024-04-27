import Link from "next/link";
import Address from "./Address";
import FooterMenu from "./FooterMenu";
import Social from "./Social";

const index = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-style-twelve theme-basic-footer position-relative zn2">
      <div className="container">
        <div className="line-bg-wrapper position-relative pt-130 pb-60 lg-pt-100 lg-pb-40">
          <div className="row justify-content-between">
            <div className="col-lg-4 footer-intro mb-40">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo/logo_02.png" alt="brand" width={95} />
                </Link>
              </div>
              <p className="text-white fs-18 mt-30 mb-40 md-mt-10 md-mb-20 pe-xxl-5">
                Best non-profit solution for charity.
              </p>
              <Social />
            </div>
            {/* End .col-lg-3  */}
            <FooterMenu />

            <Address />
          </div>
          {/* End .row */}
          <p className="copyright text-center pt-30 m0">
            © 2010 - {currentYear} jano inc.
          </p>
        </div>
        {/* /.inner-wrapper */}
      </div>
      {/* End .container */}
      <img
        src="/images/shape/shape_170.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default index;
