import Link from "next/link";
import LoginForm from "@/components/common/LoginForm";

export const metadata = {
  title: "Login || Create professional fashion photoshoots",
};
const LogIn = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* 
        =============================================
        Theme Main Menu
        ============================================== 
        */}
      <header className="theme-main-menu sticky-menu theme-menu-eight">
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-block">
                <div
                  className={`nav-link font-recoleta fs-20 text-white`}
                  href={"#"}
                >
                  Virtual Fitting Room
                </div>
              </Link>
            </div>
            <Link href="/" className="go-back-btn fw-500 tran3s text-white">
              Go to home
            </Link>
          </div>
        </div>
        {/* /.inner-content */}
      </header>
      {/* /.theme-main-menu */}

      {/* 
        =============================================
        User Data Page
        ============================================== 
        */}
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative bg-dark1">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="text-dark mb-30 lg-mb-10">Login</h2>
            <p className="fs-20 text-dark">
              Still don&lsquo;t have an account?{" "}
              <Link href="/signup">Sign up</Link>
            </p>
          </div>
          <LoginForm />
        </div>
        {/* End form-wrapper */}

        <p className="mt-auto pt-50 text-secondary">
          Copyright @{currentYear} Virtual Fitting Room inc.
        </p>
      </div>
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
};

export default LogIn;
