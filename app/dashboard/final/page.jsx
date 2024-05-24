// "use client";

// import DeleteUserFunction from "@/components/functions/deleteUser";
// import LogoutFunction from "@/components/functions/logout";
// import React from "react";

// export default function Dashboard() {
//   return (
//     <>
//       <div>Dashboard</div>
//       <LogoutFunction />
//       <DeleteUserFunction />
//     </>
//   );
// }

// import { Metadata } from "next";
// import "@/styles/index.scss";
// import "@/public/main.scss";
// import "@/output.css";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Sidebar } from "@/components/sidebar";
import { layouts } from "@/data/albums";

import { Download, Expand, RefreshCcw } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const metadata = {
  title: "Virtual Fitting Room",
  description: "Example music app using the components.",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-screen">
        <Sidebar className="w-2/12 hidden lg:block h-full lg:h-auto lg:overflow-hidden" />
        <div className="col-span-3 lg:col-span-5 lg:border-l px-10 lg:px-20 xl:px-40 bg-background-dashboard pb-10 w-full lg:w-10/12 flex flex-col overflow-y-auto">
          {/* Step 1 */}
          <div className="pt-12">
            <div>
              <div className="flex items-center justify-between">
                <div className="space-y-1 mb-6">
                  <h2 className="text-xl font-bold tracking-tight">
                    Your upscaled final result
                  </h2>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {Array.from({ length: 1 }).map((_, index) => (
                    <PhotoLayout
                      key={index}
                      album={layouts[0]}
                      className=""
                      aspectRatio="portrait"
                      width={500}
                      height={660}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center mt-10">
              <div className="w-full flex flex-row justify-center items-center space-x-2">
                <Link href="/dashboard/choose" className="d-block w-full">
                  <Button className="w-full h-14 font-bold mb-4 bg-button-secondary">
                    <Download
                      color={"#ffffff"}
                      size={"20px"}
                      strokeWidth={2}
                      className="mr-2"
                    />
                    Download
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center mt-10">
              <small className="text-muted-text font-semibold cursor-pointer mb-2">
                Do you have more clothes that needs model shots? Generate more
              </small>
              <Link href="/dashboard/choose" className="d-block w-full">
                <Button className="w-full h-14 font-bold">
                  <RefreshCcw
                    color={"#ffffff"}
                    size={"20px"}
                    strokeWidth={2}
                    className="mr-2"
                  />
                  Generate more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function PhotoLayout({
  album,
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
        src={album.cover}
        alt={album.name}
        layout="fill"
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all",
          aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
        )}
      />
    </div>
  );
}
