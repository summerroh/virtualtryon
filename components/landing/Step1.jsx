import { layouts, clothesThumbnails } from "@/data/albums";
import { PhotoLayout } from "@/components/album-artwork";

export default function Component() {
  return (
    <div className="flex justify-center px-8 md:px-24 lg:px-24 xl:px-28 2xl:px-60 py-8 md:py-16 bg-white mt-40">
      <div className="w-full space-y-12 md:space-y-24 flex flex-col md:flex-row justify-between sm:gap-10 lg:gap-24">
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

          <div className="mt-4 space-y-4">
            <div data-aos="fade-up">
              <p className="text-sm font-medium text-dark">Top</p>
              <div className="grid grid-cols-3 gap-4 w-full">
                {clothesThumbnails.map((album, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-gray-300 aspect-w-1 aspect-h-1 overflow-hidden rounded-md"
                    >
                      <img
                        src={album.cover}
                        alt={album.alt || "Thumbnail"}
                        className="w-full h-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div data-aos="fade-up">
              <p className="text-sm font-medium text-dark">Bottom</p>
              <div className="grid grid-cols-3 gap-4 w-full">
                {clothesThumbnails.map((album, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-gray-300 aspect-w-1 aspect-h-1 overflow-hidden rounded-md"
                    >
                      <img
                        src={album.cover}
                        alt={album.alt || "Thumbnail"}
                        className="w-full h-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div data-aos="fade-up">
              <p className="text-sm font-medium text-dark">Dress</p>
              <div className="grid grid-cols-3 gap-4 w-full">
                {clothesThumbnails.map((album, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-gray-300 aspect-w-1 aspect-h-1 overflow-hidden rounded-md"
                    >
                      <img
                        src={album.cover}
                        alt={album.alt || "Thumbnail"}
                        className="w-full h-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
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
          {/* <div
            className={`round-bg d-flex align-items-center justify-content-center`}
            style={{ width: "499px", height: "631px" }}
          >
            <img
              src={"/images/media/model_preview.png"}
              alt={`model`}
              className="lazy-img"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
