import { MobileDrawer } from "../header/MobileDrawer";

const DashboardHeader = () => {
  return (
    <>
      <div
        className={`px-10 md:px-20 py-6 lg:py-4 z-30 fixed w-full transition-colors duration-500 bg-white shadow-md`}
      >
        <div className="relative">
          <div className="flex items-center justify-between">
            <a className={`font-recoleta text-xl text-dark`} href={"/"}>
              Virtual Try On
            </a>

            <div className="flex align-items-center ms-auto z-1">
              <div className="block lg:hidden">
                <MobileDrawer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
