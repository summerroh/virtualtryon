"use client";
import Link from "next/link";

const CallToActions = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="title fw-500 text-white mb-20">
              Let’s get started with us.
            </h2>
            <p className="text-lg text-white m0">
              For furthur info &amp; support,{" "}
              <Link href="/contact" className="text-decoration-underline">
                Contact us.
              </Link>
            </p>
          </div>
          {/* End .col-lg-6 */}

          <div className="col-lg-6" data-aos="fade-left">
            <div className="form-bg md-mt-40 ms-lg-4">
              <form onSubmit={handleSubmit}>
                <div className="d-sm-flex justify-content-between">
                  <input type="email" placeholder="Enter your email" required />
                  <button className="text-uppercase text-white">SEND</button>
                </div>
                <div className="fs-14 tx-dark opacity-75 mt-15">
                  We’ll contact you shortly
                </div>
              </form>
            </div>
            {/* /.form-bg */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActions;
