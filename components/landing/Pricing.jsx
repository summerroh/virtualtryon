// fully tailwind and shadcn

import { Card } from "@/components/ui/card";
import question from "@/public/images/icon/question.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import StartGenerating from "../button/startGenerating";

const plans = [
  {
    id: "1",
    price: "$5",
    plan: "2 Photo-shoots",
    perCredit: "$0.625 per image",
    features: [
      { bold: "8", normal: " Images", boldFirst: true },
      { normal: "Results in ", bold: "minutes", boldFirst: false },
      { normal: "Access to ", bold: "all models", boldFirst: false },
      { normal: "Email & chat Support", bold: "", boldFirst: false },
    ],
  },
  {
    id: "2",
    price: "$39",
    plan: "20 Photo-shoots",
    perCredit: "$0.487 per image",
    features: [
      { bold: "80", normal: " Images", boldFirst: true },
      { normal: "Results in ", bold: "minutes", boldFirst: false },
      { normal: "Access to ", bold: "all models", boldFirst: false },
      { normal: "Email & chat Support", bold: "", boldFirst: false },
    ],
    active: true,
  },
  {
    id: "3",
    price: "$69",
    plan: "40 Photo-shoots",
    perCredit: "$0.431 per image",
    features: [
      { bold: "160", normal: " Images", boldFirst: true },
      { normal: "Results in ", bold: "minutes", boldFirst: false },
      { normal: "Access to ", bold: "all models", boldFirst: false },
      { normal: "Email & chat Support", bold: "", boldFirst: false },
    ],
  },
];

export default function Component() {
  return (
    <div className="flex justify-center px-8 lg:px-12 xl:px-40 py-8 md:py-16 bg-white mt-40">
      <div className="w-full space-y-12 md:space-y-24">
        <h1 className="text-center text-5xl font-bold text-dark font-recoleta fw-normal">
          Pricing
        </h1>

        <div className="grid grid-col0.s-1 md:grid-cols-3 gap-6 xl:gap-10 2xl:gap-20">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col items-center p-6 md:py-20 md:px-6 xl:px-6 2xl:px-12 bg-white rounded-2xl border border-gray-300 ${
                plan.active ? "md:scale-110 bg-[#F5F6FE] border-primary" : ""
              }`}
            >
              <div className="flex items-start gap-1 mb-1">
                <span className="text-3xl font-bold text-dark font-recoleta fw-normal">
                  {plan.price.slice(0, 1)}
                </span>

                <div className="text-5xl font-bold text-dark font-recoleta fw-normal">
                  {plan.price.slice(1)}
                </div>
              </div>

              <div className="mt-2 text-xl md:text-2xl font-semibold text-primary flex items-center gap-1">
                {plan.plan}

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src={question}
                        alt="question"
                        className="w-[25px]"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>You will get 4 images per photo-shoot</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="mt-4 space-y-3">
                {plan.features.map((feature, index) => (
                  <p key={index} className="flex items-center space-x-2">
                    <CheckIcon className="text-primary" size={24} />
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
              <StartGenerating className={plan.active ? "bg-primary" : ""} />
              <div className="mt-2 text-sm md:text-md font-medium text-gray-500">
                {plan.perCredit}
              </div>
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
