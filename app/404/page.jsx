import Link from "next/link";

// import DefaulHeader from "@/components/header/DefaulHeader";
import Image from "next/image";
export const metadata = {
  title: "404 || Create professional fashion photoshoots",
};
const Pricing = () => {
  return (
    <>
      {/* <DefaulHeader /> */}

      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3>Opps! you’r on the wrong place.</h3>
              <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">
                Can not find what you need? Take a moment and do a search below
                or start from our Homepage.
              </p>
              <Link href="/" className="btn-twentyOne fw-500 tran3s">
                Back to home
              </Link>
            </div>
          </div>
          <Image
            width={800}
            height={522}
            src="/images/assets/ils_06.svg"
            alt=""
            className="m-auto"
          />
        </div>
        {/* End .container */}

        <Image
          width={1915}
          height={674}
          src="/images/shape/shape_178.svg"
          alt="shape"
          className="shapes shape-one w-100"
        />
      </div>
      {/* /.error-page-content */}
    </>
  );
};

export default Pricing;
