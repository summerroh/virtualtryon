import React from "react";

const ContactForm3 = () => {
  return (
    <form action="#">
      <div className="messages" />
      <div className="input-bg-group position-relative controls">
        <div className="d-block">
          <div className="input-group-meta form-group mb-50">
            <label className="d-block">Name*</label>
            <input
              type="text"
              placeholder="Bostmai Hasan"
              name="name"
              required="required"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .d-block */}

        <div className="d-block">
          <div className="input-group-meta form-group mb-60">
            <label className="d-block">Email*</label>
            <input
              type="email"
              placeholder="demo@domain.com"
              name="email"
              required="required"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .d-block */}

        <div className="d-block">
          <div className="input-group-meta form-group">
            <textarea
              placeholder="Your message*"
              name="message"
              required="required"
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .d-block */}
      </div>
      {/* /.input-bg-group */}

      <button className="btn-one fw-500 w-100 fs-18 d-block mt-45">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm3;
