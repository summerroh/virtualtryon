import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="text-center mt-150 lg-mt-100" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-7 m-auto">
          <h2 className="tx-dark">
            Join us &amp; shine the world with you skill
          </h2>
        </div>
      </div>
      {/* End .row */}
      <p className="cr-text text-lg tx-dark mt-30 mb-50 md-mt-20">
        Our nearly
        <span className="text-decoration-underline fw-500"> 8,000+ </span>
        committed staff members are ready to help.
      </p>
      <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
        Join Now!!
      </Link>
    </div>
  );
};

export default CallToAction;
