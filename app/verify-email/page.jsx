import Link from "next/link";

const VerifyEmail = () => {
  return (
    <div className="w-full h-dvh bg-background-hero flex justify-center items-center">
      <div className="space-y-4 md:space-y-4 flex flex-col items-center gap-2 lg:gap-6 p-8">
        <h1 className="fw-normal text-white font-recoleta text-4xl lg:text-6xl max-w-[700px] text-center">
          Verify your email
        </h1>

        <p className="text-lg lg:text-xl text-secondary max-w-[800px]">
          You have signed up successfully and we've sent you a confirmation
          link.
          <br />
          Please check your email and click on the link to access your account.
        </p>
        <div className="flex items-center mb-0 mt-4">
          <Link
            href="/"
            className="font-medium align-items-center mb-25 text-yellow border-2 px-8 py-3 border-yellow rounded-full"
          >
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
