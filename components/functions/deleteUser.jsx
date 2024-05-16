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

  useEffect(() => {
    // Only access sessionStorage if running in the browser
    if (typeof window !== "undefined") {
      const userSession = sessionStorage.getItem("user");
      // 로그인 안되어 있으면 로그인 페이지로 이동
      if (!user && !userSession) {
        router.push("/login");
      }
    }
  }, [user, router]);

  return (
    <>
      <button onClick={() => handleDeleteUser()}>Delete User</button>
    </>
  );
}
