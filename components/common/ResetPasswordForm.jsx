"use client";

import { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const success = await sendPasswordResetEmail(email);
      if (success) {
        alert("Email Sent");
        router.push("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      action="#"
      className="user-data-form mt-40 lg-mt-30"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input
              type="email"
              placeholder="hasan@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <a href="/resetpassword">
              Don't remember your email address? Contact us
            </a>
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
            Send Email
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
}
