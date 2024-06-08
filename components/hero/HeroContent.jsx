import Link from "next/link";

const HeroContent = () => {
  return (
    <>
      <h1 className="fw-normal text-white font-recoleta text-5xl md:text-5xl lg:text-5xl xl:text-7xl leading-tight md:leading-tight lg:leading-tight mt-20 lg:mt-0">
        Create professional
        <br /> model shots
        <br />
        <span
          className="position-relative text-yellow"
          style={{
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationThickness: "4px",
          }}
        >
          instantly.
          {/* <img src="/images/shape/shape_114.svg" alt="img" /> */}
        </span>
      </h1>
      <p className="text-lg lg:text-xl mt-10 mb-2 text-white max-w-[600px]">
        Forget expensive photoshoots —
      </p>
      <p className="text-lg lg:text-xl mb-45 lg-mb-30 text-secondary max-w-[600px]">
        create professional model images instantly and focus on what really
        matters for your business.
      </p>
      <div className="d-lg-flex align-items-center mb-0">
        <Link
          href="/contact/contact-v1"
          className="fw-500 tran3s d-inline-flex align-items-center mb-25 text-yellow border-2 px-8 py-3 border-yellow rounded-full"
        >
          <span>Get Started</span>
          {/* <img src="/images/icon/icon_91.svg" alt="img" className="ms-3" /> */}
        </Link>
        <div className="mb-25 text-white signIn-btn">
          {/* Already a member? <Link href="/">Sign in</Link> */}
        </div>
      </div>
      {/*
      <h2 className="fw-normal text-white mt-60 mb-5 lg-mt-40">A+ Rating</h2>
      <p className="fs-18 opacity-50 text-white">
        Avg rating 4.8 makes us world most best apps.
      </p>
  */}
    </>
  );
};

export default HeroContent;
