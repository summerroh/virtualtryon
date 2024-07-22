"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Sidebar } from "@/components/sidebar";
import { albums } from "@/data/albums";

import { Download, Expand, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { cn } from "@/lib/utils";

const headerHeight = "pt-[70px] lg:pt-0";

export default function Page() {
  const searchParams = useSearchParams();
  const resultImage = searchParams.get("resultImage");

  const handleDownload = () => {
    if (resultImage) {
      window.open(resultImage, "_blank");
    }
  };

  return (
    <>
      <div className="block lg:hidden">
        <DashboardHeader />
      </div>

      <div className="flex flex-col lg:flex-row w-full h-dvh">
        <Sidebar className="w-[400px] hidden lg:block h-full lg:h-auto lg:overflow-hidden" />
        <div
          className={`col-span-3 lg:col-span-5 lg:border-l px-6 lg:px-20 xl:px-40 bg-background-dashboard pb-10 w-full flex flex-col overflow-y-auto ${headerHeight}`}
        >
          {/* Step 1 */}
          <div className="pt-12">
            <div>
              <div className="flex items-center justify-between">
                <div className="space-y-1 mb-6">
                  <h2 className="text-xl font-bold tracking-tight">
                    Choose your final result
                  </h2>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {resultImage && (
                    <PhotoLayout
                      resultImage={resultImage}
                      className=""
                      aspectRatio="portrait"
                      width={500}
                      height={660}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center mt-10">
              <small className="text-muted-text font-semibold cursor-pointer mb-2">
                Not satisfied with the result? Regenerate
              </small>
              <Link href="/dashboard/choose" className="d-block w-full">
                <Button className="w-full h-14 font-bold">
                  <RefreshCcw
                    color={"#ffffff"}
                    size={"20px"}
                    strokeWidth={2}
                    className="mr-2"
                  />
                  Regenerate (-1 credit)
                </Button>
              </Link>
            </div>

            <div className="w-full flex flex-col justify-center items-center mt-10">
              <small className="text-muted-text font-semibold cursor-pointer mb-2">
                Do you like the result? Download or apply upscaler for a better
                resolution
              </small>
              <div className="w-full flex flex-row justify-center items-center space-x-2">
                <Button
                  onClick={handleDownload}
                  disabled={!resultImage}
                  className="w-full h-14 font-bold mb-4 bg-button-secondary"
                >
                  <Download
                    color={"#ffffff"}
                    size={"20px"}
                    strokeWidth={2}
                    className="mr-2"
                  />
                  Download
                </Button>
                {/* <Link href="/dashboard/final" className="d-block w-full">
                  <Button className="w-full h-14 font-bold mb-4 bg-button-secondary">
                    <Expand
                      color={"#ffffff"}
                      size={"20px"}
                      strokeWidth={2}
                      className="mr-2"
                    />
                    Apply upscaler
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function PhotoLayout({
  resultImage,
  aspectRatio,
  width,
  height,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative w-full aspect-[3/4] overflow-hidden rounded-md",
        className
      )}
      {...props}
    >
      <Image
        src={resultImage}
        alt={"resultImage"}
        layout="fill"
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all aspect-[3/4]"
        )}
      />
    </div>
  );
}
