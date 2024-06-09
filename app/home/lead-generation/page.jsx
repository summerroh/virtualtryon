import React from "react";

import Header from "@/components/landing/Header";
import Hero from "@/components/hero";
import Problem from "@/components/landing/Problem";
import Link from "next/link";
import CopyrightFooter from "@/components/landing/CopyrightFooter";
import Image from "next/image";
// import { Element } from "react-scroll";
// import Pricing from "@/app/404/page";
import Pricing from "@/components/landing/Pricing";
import ImageRoller from "@/components/roller/ImageRoller";
import Step2 from "@/components/landing/Step2";
import Step3 from "@/components/landing/Step3";
import Step1 from "@/components/landing/Step1";
import { QnA } from "@/components/landing/QnA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Virtual Fitting Room || Create professional fashion photoshoots",
};
const LeadGeneration = () => {
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

      {/* <div className="fancy-feature-thirtyTwo mt-20 lg-mt-20">
        <div className="wrapper mt-20 lg-mt-0">
          <div className="container">
            <Counter />
          </div>
        </div>
      </div> */}

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
      <div className="flex justify-center flex-col px-8 lg:px-12 xl:px-40 py-8 md:py-16 bg-white mt-40">
        <div className="w-full md:space-y-24 flex flex-col md:flex-row justify-between sm:gap-10 lg:gap-24 bg-dark rounded-xl px-12 lg:px-32 py-12">
          <div className="flex flex-col">
            <div className="text-yellow pb-8">Interested?</div>
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

      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        {/* 
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo/logo_06.png"
                      alt="logo"
                      width={76}
                      height={27}
                    />
                  </Link>
                </div>
              </div>
              <FooterContent />

              <div className="col-lg-4 mb-30 form-widget">
                <h5 className="footer-title fw-normal">Newslettert</h5>
                <h6 className="pt-15 pb-20 text-white">Join our newsletter</h6>
                <Subscribe />
                <div className="fs-14 mt-10 text-white opacity-50">
                  We only send interesting and relevant emails.
                </div>
              </div>
            </div>
          </div>
        </div>
          */}

        <CopyrightFooter />
      </div>

      {/* /.footer-style-nine */}
    </>
  );
};

export default LeadGeneration;
