import CopyrightFooter from "@/components/landing/CopyrightFooter";
import Header from "@/components/landing/Header";

export const metadata = {
  title: "Virtual Try On || Create professional fashion photoshoots",
};
export default function Privacy() {
  return (
    <>
      <Header />

      {/* Contents */}
      <div className="w-full pb-20 bg-background-hero flex justify-center items-center">
        <div className="flex flex-col items-center gap-2 lg:gap-6 p-0 md:p-8">
          <h1 className="mb-12 mt-32 md:mb-32 fw-normal text-white font-recoleta text-4xl lg:text-6xl max-w-[700px] text-center">
            Privacy Policy
          </h1>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Introduction
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              Virtual Try On (“Company”, “we”, “our”, “us”) is committed to
              protecting the privacy of our clients and their users. This
              Privacy Policy describes how we collect, use, and protect personal
              data when you use our SaaS platform for virtual try-on
              (“Service”).
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Data Collection
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              Personal Data: We collect personal data that you provide to us
              when you create an account, such as your name, email address, and
              billing information.
              <br />
              <br />
              Usage Data: We collect data about how you and your users interact
              with our Service, including IP addresses, browser types, and
              access times.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Data Usage
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              Service Provision: We use the collected data to provide, maintain,
              and improve our Service. This includes using data to manage
              accounts, process transactions, and provide customer support.
              <br />
              <br />
              Communication: We may use your contact information to send you
              updates, newsletters, and other communications related to the
              Service. You can opt-out of these communications at any time.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Data Sharing
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              We do not share, sell, rent, or trade your personal data with
              third parties for their promotional purposes. All generated images
              and uploaded images belong to you and your users and are not
              shared in any way.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Data Protection
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              Security Measures: We implement industry-standard security
              measures to protect your data from unauthorized access,
              disclosure, alteration, or destruction. This includes encryption,
              firewalls, and secure server environments.
              <br />
              <br />
              Data Retention: We retain your data only as long as necessary to
              fulfill the purposes outlined in this Privacy Policy or as
              required by law.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              User Rights
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              Access and Correction: You have the right to access and correct
              the personal data we hold about you. You can do this by logging
              into your account or contacting us directly.
              <br />
              <br />
              Deletion: You have the right to request the deletion of your
              personal data. Please contact us if you wish to exercise this
              right, and we will process your request in accordance with
              applicable laws.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Cookies
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              Usage of Cookies: We use cookies and similar technologies to
              enhance your experience on our Service. Cookies help us understand
              how you use our Service and allow us to personalize your
              experience.
              <br />
              <br />
              Managing Cookies: You can manage your cookie preferences through
              your browser settings. Please note that disabling cookies may
              affect the functionality of our Service.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Changes to Privacy Policy
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable laws. We will notify you of
              any significant changes by posting the new Privacy Policy on our
              website. Your continued use of the Service after such changes
              constitutes your acceptance of the new Privacy Policy.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Contact Information
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
              virtualtryon.io@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <CopyrightFooter />
      </div>
    </>
  );
}
