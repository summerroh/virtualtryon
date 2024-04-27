"use client";

import { useState } from "react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form
      action="#"
      className="user-data-form mt-40 lg-mt-30"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Name</label>
            <input type="text" placeholder="Rashed Kabir" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input type="email" placeholder="hasan@gmail.com" required />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pass_log_id"
              required
            />
            <span className="placeholder_icon" onClick={handleTogglePassword}>
              <span className=" d-flex align-items-center">
                {showPassword ? (
                  <>
                    <i className="fa-regular fa-eye"></i>
                  </>
                ) : (
                  <>
                    <i className=" fa-regular fa-eye-slash"></i>
                  </>
                )}
              </span>
            </span>
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="pass_log_id"
              required
            />
            <span
              className="placeholder_icon"
              onClick={handleToggleConfirmPassword}
            >
              <span className=" d-flex align-items-center">
                {showConfirmPassword ? (
                  <>
                    <i className="fa-regular fa-eye"></i>
                  </>
                ) : (
                  <>
                    <i className=" fa-regular fa-eye-slash"></i>
                  </>
                )}
              </span>
            </span>
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="agree_to_policy" />
              <label htmlFor="agree_to_policy">
                By clicking &quot;SIGN UP&quot; I agree to the Terms and
                Conditions and Privacy Policy.
              </label>
            </div>
          </div>
          {/* /.agreement-checkbox */}
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
            Sign Up
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default SignupForm;
