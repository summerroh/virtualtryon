"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const endpoint =
  "https://devclusterzkhme5io-api-service.functions.fnc.nl-ams.scw.cloud";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${endpoint}/api/v1/users/forgotpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Check your email inbox to reset the password.");
        router.push("/login");
      } else {
        alert(
          "Failed to send password reset email. Please contact our support team."
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      action="#"
      className="max-w-md mx-auto mt-8 space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <Input
            id="email"
            type={"email"}
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full"
          />
        </div>

        <div className="text-center text-sm text-gray-600">
          <a href="/resetpassword">
            Don't remember your email address? Contact us
          </a>
        </div>
      </div>

      <div>
        <Button type="submit" className="w-full">
          Send Email
        </Button>
      </div>
    </form>
  );
}
