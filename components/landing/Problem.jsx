// fully tailwind and shadcn

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const plans = [
  {
    id: "1",
    price: "$2,800",
    title: "Traditional Photoshoot",
    features: [
      {
        bold: "$100 - $300",
        normal: " per hour for a photographer",
        boldFirst: true,
      },
      {
        bold: "$300 -$2000",
        normal: " per day for studio rental",
        boldFirst: true,
      },
      { bold: "$50 - $500", normal: " per hour for a model", boldFirst: true },
      { bold: "1 to 5 days", normal: " for the photoshoot", boldFirst: true },
    ],
    color: "-red",
    backgroundColr: "-red-light",
    button: false,
    icon: <X className="text-red" size={24} />,
  },
  {
    id: "2",
    price: "$45",
    title: "Virtual Try On",
    features: [
      { bold: "No photographer", normal: " needed", boldFirst: true },
      { bold: "No studio rental", normal: " required", boldFirst: true },
      { bold: "model library", normal: "Access to ", boldFirst: true },
      { normal: "Results in ", bold: "minutes", boldFirst: false },
    ],
    color: "-primary",
    backgroundColr: "-primary-light",
    button: true,
    icon: <CheckIcon className="text-primary" size={24} />,
  },
];

export default function Problem() {
  return (
    <div className="flex justify-center px-8 lg:px-12 xl:px-40 py-8 md:py-16 bg-white">
      <div className="w-full space-y-12 md:space-y-24">
        <div
          className="feedback-section-eight position-relative pt-60 pb-30 lg-pt-100"
          data-aos="fade-up"
        >
          <div className="container">
            <div className="row">
              <div className="feedback-block-eight text-center">
                <p className="font-recoleta text-dark">
                  Save weeks and thousands of dollars on{" "}
                  <span>photoshoots.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-6 xl:gap-10 2xl:gap-20">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col items-center p-6 md:py-20 md:px-6 xl:px-6 2xl:px-12 bg-white rounded-2xl border border-gray-300 w-[500px] bg${plan.backgroundColr}`}
            >
              <div
                className={`mt-2 mb-4 text-xl md:text-2xl font-semibold text${plan.color}`}
              >
                {plan.title}
              </div>
              <div className="flex items-start gap-1 mb-1">
                <span
                  className={`text-3xl font-bold font-recoleta fw-normal text${plan.color}`}
                >
                  {plan.price.slice(0, 1)}
                </span>
                <div
                  className={`text-5xl font-bold font-recoleta fw-normal text${plan.color}`}
                >
                  {plan.price.slice(1)}
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {plan.features.map((feature, index) => (
                  <p
                    key={index}
                    className={`flex items-center space-x-2 text${plan.color}`}
                  >
                    {plan.icon}

                    <span className="text-sm lg:text-lg font-medium">
                      {feature.boldFirst ? (
                        <>
                          <strong>{feature.bold}</strong>
                          {feature.normal}
                        </>
                      ) : (
                        <>
                          {feature.normal}
                          <strong>{feature.bold}</strong>
                        </>
                      )}
                    </span>
                  </p>
                ))}
              </div>
              {plan.button && (
                <Button className="mt-6 w-full bg-primary hover:bg-primary text-white hover:text-black">
                  Start generating
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
