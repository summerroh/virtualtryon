"use client";
import Link from "next/link";

const CallToActions = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-7 col-lg-8 col-md-9 m-auto text-center">
          <div className="title-style-one" data-aos="fade-up">
            <h2 className="main-title fw-normal tx-dark m0">
              Ready to take plan? It’s just a matter of
              <span>one click</span>
            </h2>
          </div>
          {/* /.title-style-one */}
          <p
            className="text-lg tx-dark pt-45 pb-40 lg-pt-30 lg-pb-20"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Try it risk free — we don’t charge cancellation fees.
          </p>
          <div
            className="subscribe-form m-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <form
              onSubmit={handleSubmit}
              action="#"
              className="position-relative"
            >
              <input type="email" placeholder="Email address" required />
              <button type="submit" className="tran3s position-absolute fw-500">
                Subscribe
              </button>
            </form>
            {/* End form */}

            <p className="m0 pt-20">
              Already a member? {"  "}
              <Link
                href="/login"
                className="tx-dark fw-500 text-decoration-underline"
              >
                Sign in.
              </Link>
            </p>
          </div>
          {/* /.subscribe-form */}
        </div>
      </div>
    </div>
  );
};

export default CallToActions;
