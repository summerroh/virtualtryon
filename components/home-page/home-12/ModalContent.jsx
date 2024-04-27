"use client";
const ModalContent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };
  return (
    <div className="modal-content">
      <div className="modal-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>

      <div className="modal-body p0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-11 m-auto">
              <div className="form-style-one pt-50 pb-70 lg-pt-30 lg-pb-30">
                <form onSubmit={handleSubmit}>
                  <div className="messages" />
                  <div className="row controls">
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-30">
                        <input
                          type="text"
                          placeholder="Your Name*"
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
                          placeholder="Email Address*"
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
                        className="btn-twentyOne fw-500 tran3s d-block"
                      >
                        Send Message
                      </button>
                    </div>
                    {/* End .col-12 */}
                  </div>
                </form>
              </div>
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
