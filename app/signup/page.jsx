import Link from "next/link";
import SignupForm from "@/components/common/SignupForm";

export const metadata = {
  title: "Sign Up || Create professional fashion photoshoots",
};

const SignUp = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="flex items-center justify-center flex-col min-h-screen bg-white md:bg-dark">
        <div className="form-wrapper m-auto bg-white py-10 px-10 md:px-20 rounded-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-4">Registration</h2>
            <p className="text-lg text-dark">
              Have an account?{" "}
              <Link href="/login" className="text-primary">
                Login Here
              </Link>
            </p>
          </div>
          <SignupForm />
        </div>

        <p className="mt-auto pt-10 text-sm text-secondary">
          &copy; {currentYear} Virtual Fitting Room Inc.
        </p>
      </div>
    </>
  );
};

export default SignUp;
