import Link from "next/link";
import ResetPasswordForm from "@/components/common/ResetPasswordForm";

export const metadata = {
  title: "Reset Password || Create professional fashion photoshoots",
};

export default function ResetPassword() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex items-center justify-center flex-col min-h-screen bg-white md:bg-dark">
        <div className="form-wrapper m-auto bg-white py-10 px-10 md:px-20 rounded-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Reset Password
            </h2>
            <p className="text-lg text-dark">
              Ready to log in to your account?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary-dark"
              >
                Log in
              </Link>
            </p>
          </div>
          <ResetPasswordForm />
        </div>

        <p className="mt-auto pt-10 text-sm text-secondary">
          &copy; {currentYear} Virtual Try On
        </p>
      </div>
    </>
  );
}
