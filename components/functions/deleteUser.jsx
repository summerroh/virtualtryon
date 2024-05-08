import React, { useEffect } from "react";
import { useDeleteUser, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function DeleteUserFunction() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  const [deleteUser, loading, error] = useDeleteUser(auth);

  //   if (error) {
  //     return (
  //       <div>
  //         <p>Error: {error.message}</p>
  //       </div>
  //     );
  //   }
  //   if (loading) {
  //     return <p>Loading...</p>;
  //   }

  const handleDeleteUser = async () => {
    const success = await deleteUser();
    if (success) {
      sessionStorage.removeItem("user");
      alert("User have been deleted");
      router.push("/");
    }
  };

  useEffect(() => {
    // 로그인 안되어 있으면 로그인 페이지로 이동
    if (!user && !userSession) {
      router.push("/login");
    }
  }, [user, userSession, router]);

  return (
    <>
      <button onClick={() => handleDeleteUser()}>Delete User</button>
    </>
  );
}
