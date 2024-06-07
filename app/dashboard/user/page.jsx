// import DeleteUserFunction from "@/components/functions/deleteUser";
import LogoutFunction from "@/components/functions/logout";
import React from "react";

import Image from "next/image";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Sidebar } from "@/components/sidebar";
import { albums } from "@/data/albums";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const metadata = {
  title: "Virtual Fitting Room",
  description: "Example music app using the components.",
};

export default function Page() {
  return (
    <>
      <div className="bg-background overflow-x-hidden">
        <div className="flex flex-col lg:flex-row w-full h-screen">
          <Sidebar className="w-2/12 hidden lg:block h-full lg:h-auto lg:overflow-hidden min-w-20" />
          <div className="col-span-3 lg:col-span-5 lg:border-l px-4 lg:px-20 xl:px-40 bg-background-dashboard pb-10 w-full lg:w-10/12 flex flex-col overflow-y-auto">
            <div className="space-y-1 mt-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center text-left">
              <h2 className="text-xl font-bold tracking-tight">Settings</h2>
              <LogoutFunction />
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
