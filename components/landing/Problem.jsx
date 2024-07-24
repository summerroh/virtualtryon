// fully tailwind and shadcn

import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import StartGenerating from "../button/startGenerating";

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
    backgroundColor: "bg-red-light",
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
      { bold: "Access to ", normal: "model library", boldFirst: true },
      { normal: "Results in ", bold: "minutes", boldFirst: false },
    ],
    color: "-primary",
    backgroundColor: "bg-background-dashboard",
    button: true,
    icon: <CheckIcon className="text-primary" size={24} />,
  },
];

export default function Problem() {
  return (
    <div className="flex justify-center px-8 lg:px-12 xl:px-40 py-8 md:py-16">
      <div className="w-full space-y-12 md:space-y-24">
        <div
          className="feedback-section-eight position-relative pt-20 lg:pt-60 pb-30 lg-pt-100"
          data-aos="fade-up"
        >
          <div className="container">
            <div className="row">
              <div className="feedback-block-eight text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-dark font-recoleta fw-normal mb-4">
                  Save days and thousands of dollars on{" "}
                  <span
                    className="position-relative text-primary"
                    style={{
                      textDecorationLine: "underline",
                      textDecorationStyle: "solid",
                      textDecorationThickness: "4px",
                    }}
                  >
                    photoshoots.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 xl:gap-10 2xl:gap-20">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col items-center p-6 md:py-12 md:px-6 xl:px-6 2xl:px-12 rounded-2xl border border-gray-300 w-full md:w-[500px] ${plan.backgroundColor}`}
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
              {plan.button && <StartGenerating className={"bg-primary"} />}
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
