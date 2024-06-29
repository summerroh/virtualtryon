import CopyrightFooter from "@/components/landing/CopyrightFooter";
import Header from "@/components/landing/Header";

export const metadata = {
  title: "Virtual Try On || Create professional fashion photoshoots",
};
export default function Refund() {
  return (
    <>
      <Header />

      {/* Contents */}
      <div className="w-full pb-20 bg-background-hero flex justify-center items-center">
        <div className="flex flex-col items-center gap-2 lg:gap-6 p-0 md:p-8">
          <h1 className="mb-12 mt-32 md:mb-32 fw-normal text-white font-recoleta text-4xl lg:text-6xl max-w-[700px] text-center">
            Refund Policy
          </h1>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Introduction
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              At Virtual Try On (“Company”, “we”, “our”, “us”), we strive to
              provide high-quality services to our clients. This Refund Policy
              outlines the conditions under which we offer refunds for our SaaS
              platform for virtual try-on (“Service”).
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Eligibility for Refunds
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              Unused Credits: We offer refunds for any unused credits. If you
              have purchased credits that have not been used, you may request a
              refund for these unused credits.
              <br />
              <br />
              Used Credits: We do not offer refunds for credits that have
              already been used. Once the credits are used to access our
              Service, they are considered consumed, and no refund will be
              provided.
              <br />
              If you encountered a technical error with our service that
              prevented you from using your credits to generate images, please
              contact our support team. We will investigate the issue and, if
              confirmed, we will provide a refund for the affected credits.
              <br />
              An error is defined as a technical issue that prevented the
              service from generating images as expected. Please note that
              dissatisfaction with the quality of the generated images does not
              qualify as an error.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Refund Process
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              Requesting a Refund: To request a refund for unused credits,
              please contact our support team at virtualtryon.io@gmail.com.
              Provide your account details and the amount of unused credits you
              wish to refund.
              <br />
              <br />
              Verification: Our team will verify the unused credits in your
              account. This process may take up to 3 business days.
              <br />
              <br />
              Processing the Refund: Once the verification is complete, we will
              process your refund. The refund will be issued to the original
              payment method used for the purchase. Please allow 7 business days
              for the refund to appear on your account.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Partial Refunds
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              Pro-Rated Refunds: In certain cases, we may offer pro-rated
              refunds for partially used credits. This is determined on a
              case-by-case basis and at our sole discretion.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Non-Refundable Items
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              Service Fees: Any fees paid for services that have already been
              rendered are non-refundable.
              <br />
              <br />
              Promotional Credits: Credits obtained through promotions or
              special offers are non-refundable and non-transferable.
            </p>
          </div>

          <div className="space-y-2 md:space-y-2 flex flex-col gap-2 lg:gap-6 p-8">
            <h1 className="fw-normal text-white font-recoleta text-xl lg:text-2xl text-left">
              Contact Information
            </h1>

            <p className="text-md lg:text-lg text-secondary max-w-[800px]">
              If you have any questions about our Refund Policy or wish to
              request a refund, please contact us at: virtualtryon.io@gmail.com
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
