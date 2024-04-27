"use client";
const CallToAction = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default behavior of form submission
    // add your form submission logic here
  };

  return (
    <div className="fancy-short-banner-seven position-relative mt-150 pt-80 pb-70 lg-mt-100 lg-pt-60 lg-pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-lg-8 m-auto text-center">
            <div className="title-style-four" data-aos="fade-up">
              <h2 className="main-title fw-500 text-white m0">
                Get updated by subscribe to our newsletter
              </h2>
            </div>
            {/* /.title-style-four */}
            <p
              className="text-lg text-white mt-35 mb-75 lg-mt-20 lg-mb-30"
              data-aos="fade-up"
            >
              Get instant news by subscribe to our daily newsletter
            </p>
            <div className="subscribe-form m-auto" data-aos="fade-up">
              <form className="position-relative" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email address" required />
                <button className="tran3s position-absolute fw-500">
                  Try for free
                </button>
              </form>
            </div>
            {/* /.subscribe-form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
