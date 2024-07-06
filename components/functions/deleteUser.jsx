import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState, useDeleteUser } from "react-firebase-hooks/auth";

export default function DeleteUserFunction() {
  const [deleteUser, loading, error] = useDeleteUser(auth);

  const handleDeleteUser = async () => {
    const success = await deleteUser();
    if (success) {
      alert("User has been deleted");
      // router.push("/");
    }
  };

  () => {
    if (!checkIsLoggedIn()) {
      return redirect("/login");
    }

    if (!checkIsVerified()) {
      return redirect("/verify-email");
    }
  };

  return (
    <>
      <button onClick={() => handleDeleteUser()}>Delete User</button>
    </>
  );
}
