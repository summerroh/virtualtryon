import { NextResponse } from "next/server";

export function middleware(request) {
  const idToken = request.cookies.get("idToken")?.value;
  const isVerified = request.cookies.get("isVerified")?.value;

  console.log("idToken:", idToken); // Log idToken
  console.log("isVerified:", isVerified); // Log isVerified

  if (!idToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isVerified !== "true") {
    return NextResponse.redirect(new URL("/verify-email", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
