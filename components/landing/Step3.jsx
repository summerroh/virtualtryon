// fully coded with tailwind and shadcn

export default function Step3() {
  return (
    <div className="flex justify-center px-8 md:px-24 lg:px-24 xl:px-28 2xl:px-52 py-8 md:py-16 bg-white mt-40 md:mt-0">
      <div className="w-full space-y-12 md:space-y-24 flex flex-col md:flex-row justify-between items-center sm:gap-10 lg:gap-24">
        <div className="">
          <div data-aos="fade-right">
            <h6 className="text-sm uppercase text-primary fw-semibold mb-3">
              TRY IT OUT
            </h6>
            <h1 className="text-5xl font-bold text-dark font-recoleta fw-normal mb-4">
              Professional Quality
            </h1>
            <p className="text-lg fw-medium text-dark">
              Our technology ensures that your product images are of the highest
              standard, enhancing your brand's image and credibility.
            </p>
          </div>
        </div>
        <div
          className="w-full flex items-end md:justify-end sm:justify-center min-w-[360px]"
          data-aos="fade-left"
        >
          <img
            src="/images/media/model_preview.png"
            alt="Image"
            width={450}
            className="w-auto sm:h-auto lg:h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
