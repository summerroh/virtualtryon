import React, { useEffect } from "react";
import { useDeleteUser, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function DeleteUserFunction() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const [deleteUser, loading, error] = useDeleteUser(auth);

  const handleDeleteUser = async () => {
    const success = await deleteUser();
    if (success) {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("user");
      }
      alert("User has been deleted");
      router.push("/");
    }
  };

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <button onClick={() => handleDeleteUser()}>Delete User</button>
    </>
  );
}
