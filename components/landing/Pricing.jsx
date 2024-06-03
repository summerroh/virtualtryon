// fully tailwind and shadcn

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    id: "1",
    price: "$5",
    plan: "1 Credit",
    perCredit: "$5 per credit",
    features: [
      "2 Generated images",
      "2 Regenerated images",
      "Email & Chat Support",
    ],
  },
  {
    id: "2",
    price: "$40",
    plan: "10 Credits",
    perCredit: "$4 per credit",
    features: [
      "20 Generated images",
      "20 Regenerated images",
      "Email & Chat Support",
    ],
    active: true,
  },
  {
    id: "3",
    price: "$120",
    plan: "40 Credits",
    perCredit: "$3 per credit",
    features: [
      "80 Generated images",
      "80 Regenerated images",
      "Email & Chat Support",
    ],
  },
];

export default function Component() {
  return (
    <div className="flex justify-center px-4 md:px-12 lg:px-24 py-8 md:py-16 bg-white mt-10 md:mt-20 lg:mt-40">
      <div className="w-full space-y-12 md:space-y-24">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-dark">
          Pricing
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-20">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col items-center p-6 md:px-6 md:py-20 xl:px-12 bg-white rounded-2xl border border-gray-300 ${
                plan.active ? "md:scale-110" : ""
              }`}
            >
              <div className="flex items-start gap-1 mb-1">
                <span className="text-3xl font-bold text-dark">
                  {plan.price.slice(0, 1)}
                </span>
                <div className="text-5xl font-bold text-dark">
                  {plan.price.slice(1)}
                </div>
              </div>
              <div className="mt-2 text-xl md:text-2xl font-semibold text-primary">
                {plan.plan}
              </div>
              <div className="mt-1 text-sm md:text-md font-medium text-gray-500">
                {plan.perCredit}
              </div>
              <div className="mt-4 space-y-3">
                {plan.features.map((feature, index) => (
                  <p key={index} className="flex items-center space-x-2">
                    <CheckIcon className="text-primary" size={24} />
                    <span className="text-sm lg:text-lg font-medium">
                      {feature}
                    </span>
                  </p>
                ))}
              </div>
              <Button className="mt-6 w-full bg-black hover:bg-primary text-white hover:text-black">
                Sign up
              </Button>
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
