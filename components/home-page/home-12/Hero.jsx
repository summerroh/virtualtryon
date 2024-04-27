import Link from "next/link";

const Hero = () => {
  const socialLinks = [
    { label: "Fb.", url: "#" },
    { label: "Tw.", url: "#" },
    { label: "Inst.", url: "#" },
  ];

  return (
    <div className="hero-banner-eleven mt-225 lg-mt-200 md-mt-180">
      <div className="banner-intro position-relative">
        <div className="scroll-bar" />
        <div className="social-elemnet">
          <ul className="style-none d-flex align-items-center">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="tran3s">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* End social-element */}

        <div className="container">
          <div className="text-wrapper pb-60 position-relative">
            <h1
              className="hero-heading font-recoleta fw-light mb-30 lg-mb-50 pe-xxl-4"
              data-aos="fade-up"
            >
              <span className="line-one">Design,</span> Products, Brand In-House
              <span className="line-two">development</span> &amp; More.
            </h1>

            <div className="d-sm-flex align-items-center justify-content-between">
              <div className="d-inline-block">
                <div className="ct-text fs-15 text-uppercase">
                  Contact me for hire
                </div>
                <div className="mt-5">
                  <a
                    href="mailto:hey@janodesign.com"
                    className="mail-info tran3s"
                  >
                    hey@janodesign.com
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-twentyThree d-flex align-items-center justify-content-center xs-mt-30"
              >
                <img src="/images/icon/icon_115.svg" alt="" />
              </Link>
            </div>

            <img
              src="/images/shape/shape_142.svg"
              alt="shape"
              className="shapes lazy-img shape-one"
            />
          </div>
        </div>
      </div>
      {/* /.banner-intro */}
    </div>
  );
};

export default Hero;
