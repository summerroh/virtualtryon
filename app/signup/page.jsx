import Link from "next/link";
import SignupForm from "@/components/common/SignupForm";

export const metadata = {
  title: "Sign Up || Create professional fashion photoshoots",
};

const SignUp = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* <header className="theme-main-menu sticky-menu theme-menu-eight">
        <div className="inner-content position-relative">
          <div className="flex items-center justify-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-block">
                <div className="nav-link font-recoleta text-white text-lg">
                  Virtual Fitting Room
                </div>
              </Link>
            </div>
            <Link href="/" className="go-back-btn font-medium text-white">
              Go to home
            </Link>
          </div>
        </div>
      </header> */}

      <div className="user-data-section flex items-center justify-center flex-col min-h-screen bg-dark1">
        <div className="form-wrapper m-auto">
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
