"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Sidebar } from "@/components/sidebar";
import { albums } from "@/data/albums";

import { Download, Expand, Loader2, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { Suspense, useCallback, useEffect, useState } from "react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import useApi from "@/lib/hooks/useApi";

const headerHeight = "pt-[70px] lg:pt-0";

export default function Page() {
  const searchParams = useSearchParams();
  const creationId = searchParams.get("id");
  const [creationData, setCreationData] = useState(null);

  const { isLoading, apiError, callApi } = useApi();

  // Get creation by ID
  const checkCreationStatus = useCallback(
    (creationId) => {
      return callApi(`/api/v1/creations/${creationId}`, "GET", null, true)
        .then((data) => {
          setCreationData(data);
          console.log("creation data", data);
          return data;
        })
        .catch((error) => {
          console.error("Error checking creation data:", error);
          throw error;
        });
    },
    [callApi]
  );

  useEffect(() => {
    checkCreationStatus(creationId);
  }, []);

  useEffect(() => {
    console.log("apiError", apiError);
  }, [apiError]);

  return (
    <>
      <div className="block lg:hidden">
        <DashboardHeader />
      </div>

      <div className="flex flex-col lg:flex-row w-full h-dvh">
        <Sidebar className="w-[318px] hidden lg:block h-full lg:h-auto lg:overflow-hidden" />
        <div className="flex flex-col lg:flex-row flex-grow overflow-hidden">
          <Suspense>
            <ChooseContent creationData={creationData} isLoading={isLoading} />
            <RightPanel creationData={creationData} isLoading={isLoading} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

function RightPanel({ creationData, isLoading }) {
  const handleDownload = () => {
    if (creationData && creationData.public_img) {
      window.open(creationData.public_img, "_blank");
    }
  };

  return (
    <div className="w-[400px] lg:border-l p-4 flex flex-col">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-2">Uploaded image</h3>
        {creationData && (
          <Image
            src={creationData.public_img}
            alt="Uploaded image"
            width={200}
            height={200}
            className="w-full object-cover rounded-md"
          />
        )}
      </div>
      <div className="space-y-2 mt-4">
        <div className="w-full flex flex-col justify-center items-center mt-10">
          <small className="text-muted-text font-semibold cursor-pointer mb-2">
            Not satisfied with the result?
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
          <div className="w-full flex flex-row justify-center items-center space-x-2">
            <Button
              onClick={handleDownload}
              // disabled={!resultImage}
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
          </div>
        </div>
      </div>
    </div>
  );
}

function ChooseContent({ creationData, isLoading }) {
  const searchParams = useSearchParams();
  const creationId = searchParams.get("id");

  if (isLoading) {
    return (
      <div
        className={`col-span-3 lg:col-span-5 w-full flex justify-center items-center lg:px-20 xl:px-40 bg-background-dashboard ${headerHeight}`}
      >
        <Loader2 className="w-8 h-8 animate-spin" />
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  return (
    <div
      className={`col-span-3 lg:col-span-5 lg:border-l px-6 lg:px-20 xl:px-40 bg-background-dashboard pb-10 w-full flex flex-col overflow-y-auto ${headerHeight}`}
    >
      {/* Step 1 */}
      <div className="pt-12">
        <div>
          <div className="flex items-center justify-between">
            <div className="space-y-1 mb-6">
              <h2 className="text-xl font-bold tracking-tight">Result image</h2>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {creationData && creationData.public_img && (
                <PhotoLayout
                  resultImage={creationData.public_img}
                  className=""
                  aspectRatio="portrait"
                  width={750}
                  height={990}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
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
        width={width}
        height={height}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all aspect-[3/4]"
        )}
      />
    </div>
  );
}
