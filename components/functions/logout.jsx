"use client";

import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { redirect, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { Button } from "../ui/button";

export default function LogoutButton() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        return redirect("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
