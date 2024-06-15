import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="w-full h-screen bg-background-hero flex justify-center items-center">
      <div className="space-y-4 md:space-y-4 flex flex-col items-center gap-2 lg:gap-6 p-8">
        <h1 className="fw-normal text-white font-recoleta text-4xl lg:text-6xl max-w-[700px] text-center">
          We can't seem to fnd the page you're looking for.
        </h1>

        <p className="text-lg lg:text-xl text-secondary max-w-[800px]">
          But don't worry, you can find plenty of other things on our homepage.
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

export default HeroContent;
