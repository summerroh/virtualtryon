"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

export default function StartGenerating({ className }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const href = user ? "/dashboard" : "/login";

  useEffect(() => {
    router.prefetch(href);
  }, [href, router]);

  return (
    <Link href={href}>
      <Button
        size="lg"
        className={`mt-6 w-full bg-black hover:bg-primary text-white hover:text-black ${className}`}
      >
        Start generating
      </Button>
    </Link>
  );
}
