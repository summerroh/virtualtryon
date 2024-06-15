import React from "react";

import Header from "@/components/landing/Header";
import Hero from "@/components/hero";
import Problem from "@/components/landing/Problem";
import Link from "next/link";
import Image from "next/image";
import Pricing from "@/components/landing/Pricing";
import ImageRoller from "@/components/roller/ImageRoller";
import Step2 from "@/components/landing/Step2";
import Step3 from "@/components/landing/Step3";
import Step1 from "@/components/landing/Step1";
import { QnA } from "@/components/landing/QnA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CopyrightFooter from "@/components/landing/CopyrightFooter";

export const metadata = {
  title: "Virtual Fitting Room || Create professional fashion photoshoots",
};
export default function Home() {
  // 상단 메뉴 스크롤 기능
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);

  return (
    <>
      <Header />

      <Hero />

      <ImageRoller />

      <Problem />

      <div id="services">
        <Step1 />
      </div>
      <Step2 />
      <Step3 />

      <div id="pricing">
        <Pricing />
      </div>

      <div
        id="faq"
        className="flex justify-center flex-col px-8 lg:px-12 xl:px-40 py-8 md:py-16 bg-white mt-40 bg-black"
      >
        <div className="text-center">
          <h6 className="text-sm uppercase text-primary fw-semibold mb-3">
            Q & A
          </h6>
          <h1 className="text-5xl font-bold text-dark font-recoleta fw-normal mb-4">
            Questions & Answers
          </h1>
        </div>

        <div className="position-relative sm:mt-10 lg:mt-20" aos="fade-up">
          <QnA />
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center flex-col px-8 lg:px-12 xl:px-40 py-8 md:py-16 bg-white mt-0">
        <div className="w-full md:space-y-24 flex flex-col md:flex-row justify-between sm:gap-10 lg:gap-24 bg-dark rounded-xl px-12 lg:px-32 py-12">
          <div className="flex flex-col">
            <div className="text-yellow pb-8">Still have questions?</div>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-8">
              Don’t hesitate to send us message.
            </h2>
          </div>

          <div className="flex flex-col w-full max-w-[600px] items-end justify-start space-y-4">
            <Input className="w-full h" placeholder="Name"></Input>
            <Input className="w-full" placeholder="Message"></Input>

            <Button className="rounded-full px-6 py-4 text-md">
              Send message
            </Button>
          </div>
        </div>
      </div>

      <div className="relative">
        <CopyrightFooter />
      </div>

      {/* /.footer-style-nine */}
    </>
  );
}
