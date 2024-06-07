import Link from "next/link";
import LoginForm from "@/components/common/LoginForm";

export const metadata = {
  title: "Login || Create professional fashion photoshoots",
};

const LogIn = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-dark1">
        <div className="form-wrapper m-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-4">Login</h2>
            <div className="text-lg text-dark">
              Still don't have an account?{" "}
              <Link href="/signup">
                <p className="text-primary hover:text-primary-dark">Sign up</p>
              </Link>
            </div>
          </div>
          <LoginForm />
        </div>

        <p className="mt-auto pt-10 text-sm text-secondary">
          &copy; {currentYear} Virtual Fitting Room Inc.
        </p>
      </div>
    </>
  );
};

export default LogIn;
