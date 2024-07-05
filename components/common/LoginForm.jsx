"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

const endpoint =
  "https://devclusterzkhme5io-api-service.functions.fnc.nl-ams.scw.cloud";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${endpoint}/api/v1/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.isSuccess && data.data && data.data.idToken) {
        console.log("Logged in successfully");
        setEmail("");
        setPassword("");
        setShowPassword(false);
        // Save idToken and is_verified status in sessionStorage
        sessionStorage.setItem("idToken", data.idToken);
        sessionStorage.setItem("isVerified", data.is_verified);

        if (data.is_verified) {
          router.push("/dashboard");
        } else {
          router.push("/verify-email");
        }
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.log("Error during login:");
      setError("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white rounded-lg mt-10"
    >
      <div className="mb-4">
        <Label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="hasan@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full"
        />
      </div>

      <div className="mb-4 relative">
        <Label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </Label>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full"
        />
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute top-6 inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-500" />
          ) : (
            <Eye className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>

      <div className="mb-4 flex justify-between items-center">
        {/* <div className="flex items-center">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="ml-2 text-sm text-gray-600">
            Keep me logged in
          </Label>
        </div> */}
        <a
          href="/resetpassword"
          className="text-sm text-blue-600 hover:underline"
        >
          Forget Password?
        </a>
      </div>

      <div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </form>
  );
};

export default LoginForm;
