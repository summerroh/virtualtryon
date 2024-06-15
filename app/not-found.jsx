import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="w-full h-full bg-background-hero">
      <div className="w-full space-y-4 md:space-y-4 flex flex-col justify-between items-center sm:gap-10 lg:gap-24 bg-background-hero">
        <h1 className="fw-normal text-white font-recoleta text-5xl md:text-5xl lg:text-5xl xl:text-7xl leading-tight max-w-[800px]">
          We can't seem to fnd the page you're looking for.
        </h1>

        <p className="text-lg lg:text-xl mb-45 lg-mb-30 text-secondary max-w-[800px]">
          But don't worry, you can find plenty of other things on our homepage.
        </p>
        <div className="flex items-center mb-0 mt-4">
          <Link
            href="/login"
            className="fw-500 align-items-center mb-25 text-yellow border-2 px-8 py-3 border-yellow rounded-full"
          >
            <span>Get Started</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
