import Link from "next/link";
import ResetPasswordForm from "@/components/common/ResetPasswordForm";

export const metadata = {
  title: "Login || Create professional fashion photoshoots",
};
export default function ResetPassword() {
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
            <h2 className="tx-dark mb-30 lg-mb-10">Reset Password</h2>
            <p className="fs-20 tx-dark">
              Ready to log in to your account? <Link href="/login">Log in</Link>
            </p>
          </div>
          <ResetPasswordForm />
        </div>
        {/* End form-wrapper */}

        <p className="mt-auto pt-50 text-secondary">
          Copyright @{currentYear} Virtual Fitting Room inc.
        </p>
      </div>
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
}
