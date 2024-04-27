"use client";
import Link from "next/link";

const Subsribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevents default form submission
    // add your form submission logic here
  };

  return (
    <div className="subscribe-form m-auto" data-aos="fade-up">
      <form onSubmit={handleSubmit} action="#" className="position-relative">
        <input type="email" placeholder="Email address" />
        <button className="tran3s position-absolute fw-500">
          Try for free
        </button>
      </form>
      <p className="m0 pt-20 text-white">
        Already a member?{" "}
        <Link href="/login" className="fw-500 text-decoration-underline">
          Sign in.
        </Link>
      </p>
    </div>
  );
};

export default Subsribe;
