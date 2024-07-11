"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { checkIsLoggedIn, checkIsVerified } from "../functions/checkIsLoggedIn";

export default function StartGenerating({ className }) {
  const router = useRouter();

  const handleClick = async () => {
    const isLoggedIn = await checkIsLoggedIn();

    if (isLoggedIn) {
      const isVerified = await checkIsVerified();
      if (isVerified) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <Button
      size="lg"
      className={`mt-6 w-full bg-black hover:bg-primary text-white hover:text-black ${className}`}
      onClick={handleClick}
    >
      Start generating
    </Button>
  );
}
