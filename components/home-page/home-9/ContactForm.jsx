"use client";
const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-25">
            <input
              type="text"
              placeholder="Rashed Kabir"
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
              placeholder="rshdkabir@gmail.com"
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
          <button
            type="submit"
            className="send-btn ripple-btn w-100 fw-500 tran3s text-uppercase text-white"
          >
            Send Message
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default ContactForm;
