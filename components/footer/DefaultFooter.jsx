import Link from "next/link";
import Footer2 from "./Footer2";
import NewsLetter from "./NewsLetter";
import CopyrightFooter2 from "./CopyrightFooter2";

const DefaultFooter = () => {
  return (
    <div className="relative footer-style-eleven theme-basic-footer">
      <div className="relative bg-wrapper">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full xl:w-2/12 mb-10">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo/logo_01.png" alt="brand" />
                </Link>
              </div>
            </div>

            <Footer2 />

            <div className="w-full xl:w-4/12 lg:w-5/12 mb-10">
              <h5 className="text-dark font-normal">Newsletter</h5>
              <h6 className="pt-4 pb-5 md:pt-2">Join our newsletter</h6>
              <NewsLetter />
              <div className="text-sm mt-2">
                We only send interesting and relevant emails.
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter2 />
    </div>
  );
};

export default DefaultFooter;
