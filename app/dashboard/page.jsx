"use client";

import DeleteUserFunction from "@/components/functions/deleteUser";
import LogoutFunction from "@/components/functions/logout";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <div>Dashboard</div>
      <LogoutFunction />
      <DeleteUserFunction />
    </>
  );
}
