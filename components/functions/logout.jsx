"use client";

import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { Button } from "../ui/button";

export default function LogoutButton() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("user");
        router.push("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Only access sessionStorage if running in the browser
    if (typeof window !== "undefined") {
      const userSession = sessionStorage.getItem("user");
      // 로그인 안되어 있으면 메인 페이지로 이동
      if (!user && !userSession) {
        router.push("/dashboard");
      }
    }
  }, [user, router]);

  return (
    <>
      <Button
        variant="outline"
        className="bg-button-background text-dark"
        onClick={() => handleSignOut()}
      >
        Log out
      </Button>
    </>
  );
}
