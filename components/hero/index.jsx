import HeroContent from "./HeroContent";
import HeroGallery from "./HeroGallery";
import Partners from "./Partners";

const index = () => {
  return (
    <div className="position-relative zn2 pt-1 bg-background-hero">
      <div className="flex justify-center px-8 md:px-24 lg:px-24 xl:px-28 2xl:px-52 bg-background-hero mt-12">
        <div className="w-full space-y-12 md:space-y-24 flex flex-col md:flex-row justify-between items-center sm:gap-10 lg:gap-24">
          <div className="" data-aos="fade-right">
            <HeroContent />
          </div>

          <div className="pb-24 bg-background-hero" data-aos="fade-left">
            <div className="row align-items-center">
              <HeroGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
