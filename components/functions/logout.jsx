"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    // Clear cookies by setting their expiration date to the past
    document.cookie = "idToken=; Max-Age=0; path=/";
    document.cookie = "isVerified=; Max-Age=0; path=/";

    // Redirect to login page
    router.push("/login");
  };

  return (
    <Button
      variant="outline"
      className="bg-button-background text-dark"
      onClick={handleSignOut}
    >
      Log out
    </Button>
  );
}
