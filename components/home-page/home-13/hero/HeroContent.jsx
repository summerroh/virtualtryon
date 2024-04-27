import Link from "next/link";

const HeroContent = () => {
  return (
    <>
      <h1 className="hero-heading fw-normal text-white font-recoleta">
        Create Professional{" "}
        <span className="position-relative">
          model <img src="/images/shape/shape_114.svg" alt="img" />
        </span>
        images
      </h1>
      <p className="sub-text mt-20 mb-45 lg-mb-30">
        You will save moeny and time for a physical photoshoot
        <br />
        <span className="text-white"> 3x faster</span> revenue than other
        eccormerce.
      </p>
      <div className="d-lg-flex align-items-center mb-150">
        <Link
          href="/contact/contact-v1"
          className="demo-btn fw-500 tran3s d-inline-flex align-items-center mb-25 me-4"
        >
          <span>Request a demo</span>
          <img src="/images/icon/icon_91.svg" alt="img" className="ms-3" />
        </Link>
        <div className="mb-25 text-white signIn-btn">
          {/*
          Already a member? <Link href="/login">Sign in</Link> */}
          Already a member? <Link href="/">Sign in</Link>
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
