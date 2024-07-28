"use client";

import Image from "next/image";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Sidebar } from "@/components/sidebar";
import { albums } from "@/data/albums";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import useApi from "@/lib/hooks/useApi";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const headerHeight = "pt-[70px] lg:pt-0";
const endpoint =
  "https://devclusterzkhme5io-api-service.functions.fnc.nl-ams.scw.cloud";

export default function Page() {
  const { isLoading, apiError, callApi } = useApi();

  const [creationData, setCreationData] = useState([]);
  const [creationLoading, setCreationLoading] = useState(true);

  const fetchCreationData = useCallback(() => {
    setCreationLoading(true);
    const url = `${endpoint}/api/v1/creations`;

    return callApi(url, "GET", null, true)
      .then((data) => {
        setCreationData(data);
        // console.log("creation data: ", data);
        return data; // Return the data
      })
      .catch((error) => {
        console.error("Error during get creation data:", error);
        throw error; // Re-throw the error
      })
      .finally(() => {
        setCreationLoading(false);
      });
  }, [callApi]);

  useEffect(() => {
    fetchCreationData();
  }, []);

  useEffect(() => {
    if (apiError) {
      console.error("API Error:", apiError);
      // You can also show an error message to the user here
    }
  }, [apiError]);

  const filteredCreations = useMemo(() => {
    return creationData.filter((creation) => creation.status !== "failed");
  }, [creationData]);

  return (
    <>
      <div className="block lg:hidden">
        <DashboardHeader />
      </div>

      <div className="flex flex-col lg:flex-row w-full h-dvh">
        <Sidebar className="w-[400px] hidden lg:block h-full lg:h-auto lg:overflow-hidden" />
        <div
          className={`col-span-3 lg:col-span-5 lg:border-l px-6 lg:px-20 xl:px-40 bg-background-dashboard pb-10 w-full flex flex-col overflow-y-auto pb-12 ${headerHeight}`}
        >
          <div className="space-y-1 mt-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center text-left">
            <h2 className="text-xl font-bold tracking-tight">My Creations</h2>

            <ScrollArea className="overflow-x-auto w-full sm:w-auto">
              <Tabs defaultValue="account" className="">
                <TabsList className="mb-3 flex flex-row md:flex-nowrap space-x-4">
                  <TabsTrigger value="shirt">Shirt</TabsTrigger>
                  <TabsTrigger value="croptop">Crop Top</TabsTrigger>
                  <TabsTrigger value="pants">Pants</TabsTrigger>
                  <TabsTrigger value="jacket">Jacket</TabsTrigger>
                  <TabsTrigger value="dress">Dress</TabsTrigger>
                </TabsList>
              </Tabs>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          {creationLoading ? (
            <LoadingSpinner />
          ) : filteredCreations.length === 0 ? (
            <div>No creations available.</div>
          ) : (
            <CreationGrid creations={filteredCreations} />
          )}
        </div>
      </div>
    </>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
      <span className="ml-2">Loading images...</span>
    </div>
  );
}

function CreationGrid({ creations }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {creations.map((creation) =>
        creation.status === "pending" ? (
          <PendingCreation key={creation._id} />
        ) : (
          <PhotoLayout
            key={creation._id}
            url={creation.public_img}
            onClick={() =>
              router.push(
                `/dashboard/choose?resultImage=${encodeURIComponent(
                  creation.public_img
                )}`
              )
            }
            aspectRatio="portrait"
            width={250}
            height={330}
          />
        )
      )}
    </div>
  );
}

function PendingCreation() {
  return (
    <div className="flex items-center justify-center bg-gray-300 rounded-md aspect-[3/4]">
      <p className="text-sm text-gray-600">Image is being generated...</p>
    </div>
  );
}

export function PhotoLayout({
  url,
  aspectRatio = "portrait",
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
        src={url}
        alt={"creation img"}
        width={width}
        height={height}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all",
          aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
        )}
      />
    </div>
  );
}
