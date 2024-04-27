"use client";
import React from "react";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default behavior of form submission
    // add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-25">
            <input
              type="text"
              placeholder="Your name*"
              name="name"
              required="required"
              data-error="Name is required."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-50">
            <input
              type="email"
              placeholder="Email*"
              name="email"
              required="required"
              data-error="Valid email is required."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <textarea
              placeholder="Your message*"
              name="message"
              required="required"
              data-error="Please,leave us a message."
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button className="btn-nine border3 w-100 fw-500 tran3s text-uppercase tx-dark">
            Join Now
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}

      <div className="fs-16 text-center mt-25">
        <span className="opacity-75">Been here before?</span>{" "}
        <a href="#" className="tx-dark fw-500">
          Start helping the poor
        </a>
      </div>
    </form>
  );
};

export default ContactUs;
