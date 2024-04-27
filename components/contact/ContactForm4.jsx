import React from "react";

const ContactForm4 = () => {
  return (
    <form action="#">
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label>Name*</label>
            <input
              type="text"
              placeholder="Rashed Kabir"
              name="name"
              required="required"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-45">
            <label>Email*</label>
            <input
              type="email"
              placeholder="rshdkabir@gmail.com"
              name="email"
              required="required"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-45">
            <textarea
              placeholder="Your message*"
              name="message"
              required="required"
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase">
            SEND MESSAGE
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default ContactForm4;
