"use client";

import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);

    // 로그인 성공시
    if (user) {
      console.log("Signed In User: ", user.email);
      sessionStorage.setItem("user", true);
      setEmail("");
      setPassword("");
      setShowPassword(false);
      router.push("/");
    }

    // 로그인 실패시
    if (error) {
      console.log("Error while sign in (error.message): ", error.message);
      console.log("Error while sign in (error): ", error);
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
        <div className="flex items-center">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="ml-2 text-sm text-gray-600">
            Keep me logged in
          </Label>
        </div>
        <a
          href="/resetpassword"
          className="text-sm text-blue-600 hover:underline"
        >
          Forget Password?
        </a>
      </div>

      <div>
        <Button type="submit" className="w-full">
          {loading ? "Logging in ..." : "Login"}
        </Button>
      </div>

      {error && error.message === "auth/invalid-credential" && (
        <p>auth/invalid-credential</p>
      )}
    </form>
  );
};

export default LoginForm;
